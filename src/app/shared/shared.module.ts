import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ToolbarTitleComponent } from './components/toolbar-title/toolbar-title.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorMessageComponent } from './components/error-message/error-message.component';

@NgModule({
  declarations: [ToolbarTitleComponent, HeaderComponent, ErrorMessageComponent],
  imports: [CommonModule, IonicModule],
  exports: [ToolbarTitleComponent, HeaderComponent, ErrorMessageComponent],
})
export class SharedModule {}
