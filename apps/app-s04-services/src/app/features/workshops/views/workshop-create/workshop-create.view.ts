import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkshopsHttpService } from 'apps/app-s04-services/src/app/common/services/workshops-http.service';

@Component({
  templateUrl: './workshop-create.view.html',
  styleUrls: ['./workshop-create.view.scss']
})
export class WorkshopCreateView implements OnInit {

  constructor(
    private workshopsHttp: WorkshopsHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create() {
    this.workshopsHttp.create({
      img: 'https://online.galaxy.edu.pe/175-home_default/especializacion-java-web-developer.jpg',
      title: 'Especialización JAVA WEB DEVELOPER'
    }).subscribe(() => {
      this.router.navigateByUrl('talleres')
    })
  }

}
