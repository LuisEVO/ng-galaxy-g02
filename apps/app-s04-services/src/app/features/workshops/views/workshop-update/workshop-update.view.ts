import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkshopsHttpService } from 'apps/app-s04-services/src/app/common/services/workshops-http.service';

@Component({
  templateUrl: './workshop-update.view.html',
  styleUrls: ['./workshop-update.view.scss']
})
export class WorkshopUpdateView implements OnInit {

  constructor(
    private workshopsHttp: WorkshopsHttpService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  update() {
    const id = +this.route.snapshot.paramMap.get('id')!

    this.workshopsHttp.update(
      id, {
      img: 'https://online.galaxy.edu.pe/175-home_default/especializacion-java-web-developer.jpg',
      title: 'EDITADO'
    }).subscribe(() => {
      this.router.navigateByUrl('talleres')
    })
  }

}
