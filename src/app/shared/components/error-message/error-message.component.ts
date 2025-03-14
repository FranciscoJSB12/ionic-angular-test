import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.scss'],
})
export class ErrorMessageComponent implements OnInit {
  @Input({ required: true })
  message!: string;
  constructor() {}

  ngOnInit() {}
}
