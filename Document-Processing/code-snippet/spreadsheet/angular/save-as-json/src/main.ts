import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
import 'zone.js'
bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
