export interface CourseInterface {
  id: number;
  frequency: number[]; // Lunes, Martes, Miercoles
  level: number[]; // basico, intermedio, avanzado
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
}
