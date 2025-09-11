import {ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {CustomTheme} from '../theme/custom-theme';


export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideNoopAnimations(),
    providePrimeNG({
      theme: {
        preset: CustomTheme, options: {
          darkModeSelector: false
        }
      },
      ripple: true,

    })]
};
