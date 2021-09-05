export interface CourseInterface {
  id: number;
  frequency: string[]; // Lunes, Martes, Miercoles
  level: []; // basico, intermedio, avanzado
  name: string;
  description: string;
  price: number;
  start_date: Date;
  start_time: string;
  end_time: string;
  cover: string;
  temary: string;
}
