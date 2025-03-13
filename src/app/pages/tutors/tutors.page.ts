import { Component, DestroyRef, OnInit } from '@angular/core';
import { TutorsService } from './services/tutors.service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.page.html',
  styleUrls: ['./tutors.page.scss'],
  standalone: false,
})
export class TutorsPage implements OnInit {
  constructor(
    private readonly tutorsService: TutorsService,
    private readonly destroyRef: DestroyRef
  ) {}

  ngOnInit() {
    this.tutorsService.getTutorsList().subscribe({
      next: (tutors) => {
        console.log(tutors);
      },
    });
  }
}
