import { Directive, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UIPersistenceService } from '../services/ui-persistence.service';

@Directive({
  selector: 'ui-persist'
})
export class UIPersistenceDirective implements OnInit {

  private isInitialized = false;

  @Output()
  onLoad = new EventEmitter<any>();

  _what: any;

  @Input()
  key: string;

  constructor(private persistenceService: UIPersistenceService) {
  }

  ngOnInit(): void {
    setTimeout(() => {
      const loadedValue = this.persistenceService.load(this.key);
      this.onLoad.emit(loadedValue == null ? this._what : loadedValue);
    });
    this.isInitialized = true;
  }

  @Input()
  set what(value: any) {
    this._what = value;
    if (this.isInitialized) {
      this.persistenceService.save(this.key, value);
    }
  }
}
