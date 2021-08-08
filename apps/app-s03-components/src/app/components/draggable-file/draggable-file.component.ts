import { Component, EventEmitter, HostBinding, HostListener, OnInit, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-draggable-file',
  templateUrl: './draggable-file.component.html',
  styleUrls: ['./draggable-file.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class DraggableFileComponent implements OnInit {
  dragging: boolean = false;

  @Output() droppedFile: EventEmitter<FileList> = new EventEmitter(); 

  @HostBinding('class')
  get className(): string {
    if (this.dragging) {
      return 'bg-info';
    }

    return 'bg-light'
  }

  @HostListener('dragover', ['$event'])
  dragover(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragging = true;
  }

  @HostListener('dragleave', ['$event'])
  dragleave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragging = false;
  }

  @HostListener('drop', ['$event'])
  drop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.dragging = false;

    this.droppedFile.emit(event.dataTransfer?.files)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
