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
  private readonly httpClient = inject(HttpClient);
  private readonly tutorsAdapter = inject(TutorsAdapter);

  getTutorsList(): Observable<Tutor[]> {
    return this.httpClient
      .get<TutorsReponseDto[]>(`${API_URL}/tutors`)
      .pipe(map((resp) => resp.map(this.tutorsAdapter.fromRespDtoToModel)));
  }
}
