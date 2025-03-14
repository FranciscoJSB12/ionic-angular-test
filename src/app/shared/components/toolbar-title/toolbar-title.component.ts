import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-toolbar-title',
  templateUrl: './toolbar-title.component.html',
  styleUrls: ['./toolbar-title.component.scss'],
})
export class ToolbarTitleComponent implements OnInit {
  @Input({ required: true })
  text!: string;

  constructor() {}

  ngOnInit() {}
}
