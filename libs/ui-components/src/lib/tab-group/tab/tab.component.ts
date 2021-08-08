import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'glx-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() title!: string;
  @Input() active: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
