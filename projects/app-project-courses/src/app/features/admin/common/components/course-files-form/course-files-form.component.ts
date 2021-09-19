import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Course } from 'projects/app-project-courses/src/app/common/models/course.model';
import { AppValidators } from 'projects/app-project-courses/src/app/common/validators/app-validators';

@Component({
  selector: 'app-course-files-form',
  templateUrl: './course-files-form.component.html',
  styleUrls: ['./course-files-form.component.scss']
})
export class CourseFilesFormComponent implements OnInit {
  @Input() course?: Course;
  @Output() saveCover: EventEmitter<File> = new EventEmitter();
  @Output() saveTemary: EventEmitter<File> = new EventEmitter();

  form: FormGroup;

  get coverControl(): FormControl {
    return this.form.get('cover') as FormControl
  }

  get temaryControl(): FormControl {
    return this.form.get('temary') as FormControl
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      cover: [null, [Validators.required, AppValidators.extensions(['png', 'jpg'])]],
      temary: [null, [Validators.required, AppValidators.extensions(['pdf'])]]
    })

    this.coverControl.valueChanges.subscribe(() => this.saveCoverHandler())
    this.temaryControl.valueChanges.subscribe(() => this.saveTemaryHandler())
  }

  ngOnInit(): void {
  }

  saveCoverHandler() {
    if (this.coverControl.invalid) return;
    this.saveCover.emit(this.coverControl.value);
  }

  saveTemaryHandler() {
    if (this.temaryControl.invalid) return;
    this.saveTemary.emit(this.temaryControl.value);
  }

}
