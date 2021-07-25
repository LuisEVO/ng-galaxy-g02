import { Component, Input, OnInit } from '@angular/core';
import { LineoProductGroup } from '../../interfaces/lineo-data.interface';

@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {
  @Input() productGroup!: LineoProductGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
