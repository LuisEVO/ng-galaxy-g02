import { Component, HostBinding, HostListener, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ButtonColor } from './button.type';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() color: ButtonColor = 'primary'; // ?: opcional, !: obligatorio
  @HostBinding('class')
  get className(): string {
    return `btn btn-${this.color}`;
  }
  // @HostBinding('style') style = 'background: red'; 

  @HostListener('click', ['$event'])
  clickHandler(event: PointerEvent): void {
    console.log('button clickeado', event);
  }

  constructor() { }

  ngOnInit(): void {
  }
}
