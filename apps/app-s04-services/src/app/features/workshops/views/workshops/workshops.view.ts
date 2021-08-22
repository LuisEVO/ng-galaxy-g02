import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from 'apps/app-s04-services/src/app/common/services/logger.service';
import { WorkshopsHttpService } from 'apps/app-s04-services/src/app/common/services/workshops-http.service';
import { Workshop } from '../../../../common/interfaces/workshop.interface';
import { WorkshopsService } from '../../services/workshops.service';

@Component({
  templateUrl: './workshops.view.html',
  styleUrls: ['./workshops.view.scss']
})
export class WorkshopsView implements OnInit {
  workshops: Workshop[] = [];

  constructor(
    private logger: LoggerService,
    private workshopsService: WorkshopsService,
    private workshopsHttpService: WorkshopsHttpService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.logger.info('[WorkshopsView] loaded');
    this.workshopsHttpService.getAll()
      .subscribe(
        res => this.workshops = res
      )
  }

  goDetail(item: Workshop) {
    this.workshopsService.selected = item;
    this.router.navigate(['/talleres', item.id]);
  }

  /*
  create() {
    this.workshopsHttpService.create()
    .subscribe(
      workshopCreated => this.workshops.push(workshopCreated) 
    )
  }

  update() {
    this.workshopsHttpService.update()
    .subscribe(
      workshopUpdated => {
        const index = this.workshops.findIndex(workshop => workshop.id === id);
        this.workshops[index] = workshopUpdated;
      } 
    )
  }
  */

  remove(id: number) {
    const yes = confirm('Estas de eliminar este taller');
    if (yes) {
      this.workshopsHttpService.remove(id)
      .subscribe(
        () => {
          const index = this.workshops.findIndex(workshop => workshop.id === id);
          this.workshops.splice(index, 1);
        }
      );
    }
  }

}
