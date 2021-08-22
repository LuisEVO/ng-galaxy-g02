import { Component } from '@angular/core';
import { LoggerService } from './common/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-s04-services';

  constructor(
    private logger: LoggerService
  ) {
    logger.info('[AppComponent] loaded')
  }
}
