import { CourseInterface } from '../interfaces/course.interface';

export class Course {
  id: number;
  frequency: string[];
  level: [];
  name: string;
  description: string;
  price: number;
  startDate: Date;
  startTime: string;
  endTime: string;
  cover: string;
  temary: string;

  constructor(data: CourseInterface) {
    this.id = data.id;
    this.frequency = data.frequency;
    this.level = data.level;
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.startDate = data.start_date;
    this.startTime = data.start_time;
    this.endTime = data.end_time;
    this.cover = data.cover;
    this.temary = data.temary;
  }
}