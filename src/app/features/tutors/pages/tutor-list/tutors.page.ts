import { Component, OnInit } from '@angular/core';
import { TutorsService } from '../../services/tutors.service';
import type { Tutor } from '../../models/tutor.model';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {
  constructor(private readonly tutorsService: TutorsService) {}

  ngOnInit(): void {
    this.getTutorsList();
  }

  get tutors(): Tutor[] {
    return this.tutorsService.tutors;
  }

  get isLoading(): boolean {
    return this.tutorsService.isLoading;
  }

  get error(): string {
    return this.tutorsService.error;
  }

  get specialities() {
    return this.tutorsService.specialities;
  }

  getTutorsList(): void {
    this.tutorsService.getTutorsList();
  }

  onSpecialityChange(data: CustomEvent) {
    const value: string = data.detail.value;
    this.tutorsService.filterTutors(value);
  }
}
