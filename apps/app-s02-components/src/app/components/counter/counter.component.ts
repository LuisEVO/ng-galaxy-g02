import { Component, Input, OnInit, Output, EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy, OnChanges {
  @Input() count: number = 0;
  @Output() countChange: EventEmitter<number> = new EventEmitter();

  id = Math.random();
  intervalId?: any;

  resume?: string;

  constructor() { }

  add() {
    this.count += 1;
    this.countChange.emit(this.count);
  }

  less() {
    this.count -= 1;
    this.countChange.emit(this.count);
  }

  ngOnInit(): void {
    this.resume = `Este es el contador ${this.count}`;

    this.intervalId = setInterval(() => {
      console.log('[CounterComponent]', this.id, 'Evento ejecutandose');
    }, 1000);
    console.log('[CounterComponent] ngOnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (!changes.count.firstChange) {
      this.resume = `Este es el contador ${this.count}`;
    }

    console.log('[CounterComponent] ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId)
    console.log('[CounterComponent] ngOnDestroy');
  }

}
