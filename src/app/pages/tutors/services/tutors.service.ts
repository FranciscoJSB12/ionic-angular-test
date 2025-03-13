import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import type { TutorsReponseDto } from '../models/tutors-response.dto';

const API_URL = environment.API_URL;

@Injectable({ providedIn: 'root' })
export class TutorsService {
  private readonly httpClient = inject(HttpClient);

  getTutorsList(): Observable<TutorsReponseDto[]> {
    return this.httpClient.get<TutorsReponseDto[]>(`${API_URL}/tutors`);
  }
}
