import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FruitsComponent} from './fruits/fruits.component';
import { AppComponent } from './app.component';
import { from } from 'rxjs';
import {FormsModule} from '@angular/forms';
import { CapitalizePipe } from './capitilize.pipe';
import { LikesComponent } from './likes/likes.component';
import { CardComponent } from './card/card.component';
import { DirectivesComponent } from './directives/directives.component';
import {PanDirectives} from './pan.directives';
import { StudentComponent } from './student/student.component';
import { AddressComponent } from './address/address.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule} from '@angular/forms';
import { TravelComponent } from './travel/travel.component';
import { CrudComponent } from './crud/crud.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FruitsComponent,
    CapitalizePipe,
    LikesComponent,
    CardComponent,
    DirectivesComponent,
    PanDirectives,
    StudentComponent,
    AddressComponent,
    RegisterComponent,
    TravelComponent,
    CrudComponent
  
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
