import { Injectable } from '@angular/core';

@Injectable()
export class UIPersistenceService {

  map: Map<String, Object> = new Map<String, Object>();

  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  load(key: string): any {
    var serialized = localStorage.getItem(key);
    return serialized == null ? null : JSON.parse(serialized);
  }
}
