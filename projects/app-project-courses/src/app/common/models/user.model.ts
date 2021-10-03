import { Payload } from '../interfaces/payload.interface';

export class User {
  fullName: string;

  constructor(payload: Payload) {
    this.fullName = payload.name;
  }
}