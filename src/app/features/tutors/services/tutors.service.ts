import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TutorsAdapter } from '../adapters/tutors.adapter';
import type { TutorsReponseDto } from '../models/tutors-response.dto';
import type { Tutor } from '../models/tutor.model';

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class TutorsService {
  public isLoading: boolean = false;
  public error: string = '';
  private _originalTutors: Tutor[] = [];
  private _currentTutors: Tutor[] = [];
  private _specialities: string[] = [];

  private readonly httpClient = inject(HttpClient);
  private readonly tutorsAdapter = inject(TutorsAdapter);

  get tutors(): Tutor[] {
    return this._currentTutors;
  }

  get specialities(): string[] {
    return this._specialities;
  }

  getTutorsList() {
    this.isLoading = true;

    this.httpClient
      .get<TutorsReponseDto[]>(`${API_URL}/tutors`)
      .pipe(map((resp) => resp.map(this.tutorsAdapter.fromRespDtoToModel)))
      .subscribe({
        next: (tutors) => {
          this._currentTutors = [...tutors];
          this._originalTutors = [...tutors];
          this.determineSpecialities(tutors);
        },
        complete: () => {
          this.isLoading = false;
        },
        error: (resp) => {
          console.error(resp);
          this.isLoading = false;
          this.error = 'Hubo un error, intenta luego';
        },
      });
  }

  filterTutors(speciality: string): void {
    if (speciality === '') {
      this._currentTutors = [...this._originalTutors];
    } else {
      this._currentTutors = this._originalTutors.filter(
        (tutor) => tutor.speciality === speciality
      );
    }
  }

  private determineSpecialities(tutors: Tutor[]): void {
    this._specialities = [...new Set(tutors.map((tutor) => tutor.speciality))];
  }
}
