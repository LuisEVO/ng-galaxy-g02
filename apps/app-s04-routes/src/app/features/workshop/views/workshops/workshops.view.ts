import { Component, OnInit } from '@angular/core';
import { Workshop } from 'apps/app-s04-routes/src/app/common/interfaces/workshop.interface';

@Component({
  templateUrl: './workshops.view.html',
  styleUrls: ['./workshops.view.scss']
})
export class WorkshopsView implements OnInit {
  workshops: Workshop[] = [
    { id: 1, img: 'https://online.galaxy.edu.pe/211-home_default/devops-for-java-developers.jpg', title: 'DEVOPS FOR JAVA DEVELOPERS' },
    { id: 2, img: 'https://online.galaxy.edu.pe/211-home_default/devops-for-java-developers.jpg', title: 'DEVOPS FOR JAVA DEVELOPERS' },
    { id: 3, img: 'https://online.galaxy.edu.pe/211-home_default/devops-for-java-developers.jpg', title: 'DEVOPS FOR JAVA DEVELOPERS' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
