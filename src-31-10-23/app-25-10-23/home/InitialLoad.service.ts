// initial-load.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InitialLoadService {
  private initialLoad = true;

  constructor() {}

  isFirstLoad(): boolean {
    const isFirstLoad = this.initialLoad;
    this.initialLoad = false;
    return false;
  }
}
