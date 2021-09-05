import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface DataForm {
  email: string;
  password: string;
  active: boolean;
}

@Component({
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss']
})
export class LoginView implements OnInit {
  data: DataForm = {
    email: 'luis@gmail.com',
    password: '',
    active: false
  }


  constructor() { }

  ngOnInit(): void {
  }

  save(ngForm: NgForm) {
    if (ngForm.valid) {
      
    }
  }

}
