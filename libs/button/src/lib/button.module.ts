import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContiButtonComponent } from './components/button/button.component';
import { BoxComponent } from './components/box/box.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ContiButtonComponent,
    BoxComponent,
  ],
  exports: [
    ContiButtonComponent,
    BoxComponent,
  ],
})
export class ButtonModule {}
