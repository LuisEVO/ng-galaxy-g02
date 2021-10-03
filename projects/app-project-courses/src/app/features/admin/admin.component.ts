import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../common/services/session.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public session: SessionService,
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.session.destroy();
    this.router.navigateByUrl('/')
  }

}
