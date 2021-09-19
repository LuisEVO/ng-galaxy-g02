import * as moment from 'moment';
import { CourseInterface } from '../interfaces/course.interface';

const WEEL_DAYS: Map<number, string> = new Map([
  [1, 'Lunes'],
  [2, 'Martes'],
  [3, 'Miercoles'],
  [4, 'Jueves'],
  [5, 'Viernes'],
  [6, 'Sabado'],
  [7, 'Domingo'],
]);

const LEVELS: Map<number, string> = new Map([
  [1, 'Básico'],
  [2, 'Intermedio'],
  [3, 'Avanzado'],
]);

const getFileNameFromUrl = (fileName: string): string => {
  const parts = fileName.split('/');
  return parts[parts.length - 1];
}

export class Course {
  id: number;
  frequency: number[];
  level: number[];
  name: string;
  description: string;
  hours: number;
  sessions: number;
  workshops: number;
  price: number;
  startDate: Date;
  startTime: string;
  endTime: string;
  cover: string;
  temary: string;

  get coverName(): string {
    return this.cover ? getFileNameFromUrl(this.cover) : '';
  }

  get temaryName(): string {
    return this.temary ? getFileNameFromUrl(this.temary) : '';
  }

  get frequencyText(): string {
    return this.frequency.map(frecuency => WEEL_DAYS.get(frecuency)!).join(', ')
  }

  get levelText(): string {
    return this.level.map(level => LEVELS.get(level)!).join(', ')
  }

  get startDateFormat(): string {
    return moment(this.startDate, 'YYYY-MM-DD').format('DD/MM/YYYY'); 
  }

  get startTimeFormat(): string {
    return moment(this.startTime, 'HH-mm-ss').format('hh:mm a'); 
  }

  get endTimeFormat(): string {
    return moment(this.endTime, 'HH-mm-ss').format('hh:mm a'); 
  }

  get schedule(): string {
    return `${this.startTimeFormat} - ${this.endTimeFormat}`; 
  }

  constructor(data: CourseInterface) {
    this.id = data.id;
    this.frequency = data.frequency;
    this.level = data.level;
    this.name = data.name;
    this.description = data.description;
    this.hours = data.hours;
    this.sessions = data.sessions;
    this.workshops = data.workshops;
    this.price = data.price;
    this.startDate = data.startDate;
    this.startTime = data.startTime;
    this.endTime = data.endTime;
    this.cover = data.cover;
    this.temary = data.temary;
  }
}