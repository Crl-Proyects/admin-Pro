import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// routes
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.module';


// components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ProgressComponent } from './pages/progress/progress.component';
// import { Graficas1Component } from './pages/graficas1/graficas1.component';
/* import { HeaderComponent } from './shared/header/header.component';
   import { BreadcrumsComponent } from './shared/breadcrums/breadcrums.component';
   import { SidebarComponent } from './shared/sidebar/sidebar.component';
   import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component'; */
// import { PagesComponent } from './pages/pages.component';
import { RegisterComponent } from './login/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    /*DashboardComponent,
    ProgressComponent,
    Graficas1Component,
    PagesComponent,
    */
    /* HeaderComponent,
    BreadcrumsComponent,
    SidebarComponent,
    NopagefoundComponent, */
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
