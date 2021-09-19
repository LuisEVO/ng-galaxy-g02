import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-course-confirm-remove',
  templateUrl: './course-confirm-remove.component.html',
  styleUrls: ['./course-confirm-remove.component.scss']
})
export class CourseConfirmRemoveComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { courseName: string },
    private dialogRef: MatDialogRef<CourseConfirmRemoveComponent>
  ) { }

  ngOnInit(): void {
  }

  yesRemove() {
    this.dialogRef.close(true);
  }
}
