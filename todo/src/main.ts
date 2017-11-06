import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// calling bootstrap process for web-based application
platformBrowserDynamic().bootstrapModule(AppModule);

// this is bootstrap file: main.ts
// it fire Angular, then in turn, process html file, process todo-element
// since selector define component match with todo-element, it replace
// placeholder template.
// place holder template is parsed, and {{}} binding is discovered and evaluated
