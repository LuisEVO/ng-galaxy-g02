import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WorkshopModule } from 'apps/app-s04-routes/src/app/features/workshop/workshop.module';
import { Workshop } from '../../../common/interfaces/workshop.interface';
import { WorshopsServicesModule } from './services.module';

@Injectable({
  providedIn: WorshopsServicesModule
})
export class WorkshopsService {
  selected?: Workshop;

  constructor(private http: HttpClient) { }
}
