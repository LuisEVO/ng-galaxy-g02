import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginView } from './views/login/login.view';
import { EmailDirective } from './common/validators/email.directive';
import { SignUpView } from './views/sign-up/sign-up.view';
import { InputFileComponent } from './common/components/input-file/input-file.component';
import { UbigeoView } from './views/ubigeo/ubigeo.view';

@NgModule({
  declarations: [
    AppComponent,
    LoginView,
    EmailDirective,
    SignUpView,
    InputFileComponent,
    UbigeoView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
