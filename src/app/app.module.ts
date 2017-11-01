import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountComponent } from './components/account/account.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotesComponent } from './components/notes/notes.component';
import { CalenderComponent } from './components/calender/calender.component';
import { PositionComponent } from './components/position/position.component';

const appRoutes : Routes = [
	{
		path:'',
		component: HomeComponent
	},
  {
    path:'accounts',
    component: AccountComponent
  },
  {
    path:'contacts',
    component: ContactComponent
  },
  {
    path:'notes',
    component: NotesComponent
  },
  {
    path:'calender',
    component: CalenderComponent
  },
  {
    path:'positions',
    component: PositionComponent
  },
  {
    path:'**',
    redirectTo: ''
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    ContactComponent,
    NotesComponent,
    CalenderComponent,
    PositionComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
