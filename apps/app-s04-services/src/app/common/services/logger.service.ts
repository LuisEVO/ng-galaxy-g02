import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  info(text: string) {
    console.log(text);
  }

  table(obj: any) {
    console.table(obj);
  }
}
