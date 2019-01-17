import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UIPersistenceDirective } from './directives/ui-persistence.directive';
import { UIPersistenceService } from './services/ui-persistence.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [UIPersistenceDirective],
  providers:[UIPersistenceService],
  exports: [UIPersistenceDirective]
})
export class UIPersistenceModule {}
