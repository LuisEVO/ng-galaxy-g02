import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'glx-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.css']
})
export class CardBodyComponent implements OnInit {
  @HostBinding('class') className = 'card-body';
  constructor() { }

  ngOnInit(): void {
  }

}
