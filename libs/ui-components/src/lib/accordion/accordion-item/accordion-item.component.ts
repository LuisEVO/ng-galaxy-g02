import { Component, ElementRef, HostBinding, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'glx-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.css']
})
export class AccordionItemComponent implements OnInit {
  @HostBinding('class') className = 'accordion-item d-block';

  @ViewChild('header', { static: true }) header!: ElementRef<HTMLButtonElement>; 
  @ViewChild('body', { static: true }) body!: ElementRef<HTMLDivElement>;

  @Input() show: boolean = false;

  constructor(
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.openOrClose();
  }

  toggle() {
    this.show = !this.show;
    this.openOrClose();
  }

  openOrClose() {
    if (this.show) {
      // this.header.nativeElement.classList.remove('collapsed');
      // this.body.nativeElement.classList.add('show');
      this.renderer.removeClass(this.header.nativeElement, 'collapsed');
      this.renderer.addClass(this.body.nativeElement, 'show');
    } else {
      this.header.nativeElement.classList.add('collapsed');
      this.body.nativeElement.classList.remove('show');
    }

  }

}
