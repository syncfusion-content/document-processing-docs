import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

// enableProdMode(); // Usually enabled for production builds

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch((err: any) => console.error(err));