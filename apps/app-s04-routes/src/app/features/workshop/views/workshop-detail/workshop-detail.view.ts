import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './workshop-detail.view.html',
  styleUrls: ['./workshop-detail.view.scss']
})
export class WorkshopDetailView implements OnInit {

  workshopId: number;

  constructor(
    private route: ActivatedRoute
  ) {
    this.route.data
    // SOLO CAPTURA LOS PARAMETROS CUANDO EL COMPONENTE SE CREA
    this.workshopId = +this.route.snapshot.paramMap.get('workshopId')!;

    // ESCUCHAR CUANDO LOS PARAMETROS CAMBIAN
    this.route.paramMap
    .subscribe(
      paramMap => {
        this.workshopId = +paramMap.get('workshopId')!;
      }
    )
  }

  ngOnInit(): void {
  }

}
