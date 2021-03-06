import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { LEVELS } from 'projects/app-project-courses/src/app/common/constants/levels.constant';
import { WEEK_DAYS } from 'projects/app-project-courses/src/app/common/constants/week-days.constant';
import { CourseInterface } from 'projects/app-project-courses/src/app/common/interfaces/course.interface';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit, OnChanges {
  @Input() course?: Course;
  @Output() save: EventEmitter<Partial<CourseInterface>> = new EventEmitter();

  weekDays = WEEK_DAYS;
  levels = LEVELS;

  form: FormGroup;

  get startDateControl(): FormControl {
    return this.form.get('startDate') as FormControl;
  }

  get startTimeControl(): FormControl {
    return this.form.get('startTime') as FormControl;
  }

  get endTimeControl(): FormControl {
    return this.form.get('endTime') as FormControl;
  }

  get frequencyArray(): FormArray {
    return this.form.get('frequency') as FormArray;
  }

  get levelArray(): FormArray {
    return this.form.get('level') as FormArray;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: [null, Validators.required],
      description: [null, Validators.required],
      price: [null, Validators.required],
      startDate: [null, Validators.required],
      startTime: [null, Validators.required],
      endTime: [null, Validators.required],
      hours: [null, Validators.required],
      sessions: [null, Validators.required],
      workshops: [0, Validators.required],
      frequency: this.fb.array(
        this.weekDays.map(day => this.fb.group({
          id: day.id,
          active: false
        }))
      ),
      level: this.fb.array(
        this.levels.map(level => this.fb.group({
          id: level.id,
          active: false
        }))
      )
    })
  }

  ngOnInit(): void {
    console.log(this.course);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.course?.currentValue) {
      this.patchForm();
    }
  }

  patchForm() {
    if (this.course) {
      this.form.patchValue({
        name: this.course.name,
        description: this.course.description,
        price: this.course.price,
        startDate: moment(this.course.startDate, 'YYYY-MM-DD').toISOString(),
        startTime: this.course.startTimeFormat,
        endTime: this.course.endTimeFormat,
        hours: this.course.hours,
        sessions: this.course.sessions,
        workshops: this.course.workshops,
        frequency: this.weekDays.map(day => ({ id: day.id, active: this.course?.frequency.includes(day.id) })),
        level: this.levels.map(level => ({ id: level.id, active: this.course?.level.includes(level.id) }))
      })
    }
  }

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;
    
    const value: Partial<CourseInterface> = {
      ...this.form.value,
      startDate: moment(this.startDateControl.value).format('YYYY-MM-DD'),
      startTime: moment(this.startTimeControl.value, 'hh:mm a').format('HH:mm'),
      endTime: moment(this.endTimeControl.value, 'hh:mm a').format('HH:mm'),
      frequency: this.frequencyArray.value
        .filter((frecuency: { id: number; active: boolean }) => frecuency.active)
        .map((frecuency: { id: number; active: boolean }) => frecuency.id),
      level: this.levelArray.value
        .filter((level: { id: number; active: boolean }) => level.active)
        .map((level: { id: number; active: boolean }) => level.id) 
    };

    this.save.emit(value);
  }

}
