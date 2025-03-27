import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { NewComponentComponent } from './app/components/new-component/new-component.component';

bootstrapApplication(NewComponentComponent, appConfig, )
  .catch((err) => console.error(err));
