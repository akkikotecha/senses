import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class BrowserService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  getWindowWidth(): number {
    if (isPlatformBrowser(this.platformId)) {
      return window.innerWidth;
    }
    return 0; // or any default value you want to return in the server environment
  }

  // Add more browser-specific functions here as needed
}
