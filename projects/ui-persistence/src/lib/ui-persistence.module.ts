import { NgModule } from '@angular/core';
import { UiPersistenceComponent } from './ui-persistence.component';
import { UiPersistenceDirective } from './directives/ui-persistence.directive';

@NgModule({
  imports: [
  ],
  declarations: [UiPersistenceComponent, UiPersistenceDirective],
  exports: [UiPersistenceComponent]
})
export class UiPersistenceModule { }
