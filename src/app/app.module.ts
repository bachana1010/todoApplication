import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoStatusDirective } from './todo-status.directive';
import { HoverDirective } from './hover.directive';
import { ToastrModule } from 'ngx-toastr';
import { TaskAddTimePipe } from './task-add-time.pipe';
import { CompleteComponent } from './complete/complete.component';
import { IncompleteComponent } from './incomplete/incomplete.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoStatusDirective,
    HoverDirective,
    TaskAddTimePipe,
    CompleteComponent,
    IncompleteComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



