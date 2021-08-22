import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoggerService } from 'apps/app-s04-services/src/app/common/services/logger.service';
import { WorkshopsService } from '../../services/workshops.service';

@Component({
  templateUrl: './workshop-detail.view.html',
  styleUrls: ['./workshop-detail.view.scss']
})
export class WorkshopDetailView implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private logger: LoggerService,
    private workshopsService: WorkshopsService,
  ) {
  }

  ngOnInit(): void {
    this.logger.info('[WorkshopDetailView] loaded');
    this.logger.table(this.workshopsService.selected);
  }

}
