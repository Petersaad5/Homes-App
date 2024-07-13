import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes'; //importing the routeConfig from the routes file should be done every time 



bootstrapApplication(AppComponent,{
  providers : [
    provideRouter(routeConfig)
  ]
})
  .catch(err => console.error(err));
