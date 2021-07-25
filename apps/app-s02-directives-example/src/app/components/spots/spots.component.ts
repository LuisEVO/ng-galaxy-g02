import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {
  @Input() spots: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
