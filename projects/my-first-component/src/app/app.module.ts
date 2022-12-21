import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { PipesPipe } from './app/pipes.pipe';
import { StarRatingPipe } from './pipes/star-rating.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PipesPipe,
    StarRatingPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
