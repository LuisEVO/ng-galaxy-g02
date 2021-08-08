import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  @HostBinding('class') className = 'accordion d-block';

  constructor() { }

  ngOnInit(): void {
  }

}
