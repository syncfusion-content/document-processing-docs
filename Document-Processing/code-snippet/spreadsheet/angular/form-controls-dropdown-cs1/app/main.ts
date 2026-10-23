import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app';

platformBrowserDynamic()
  .bootstrapComponent(AppComponent)
  .catch((err) => console.error(err));
