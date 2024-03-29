import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

import { UiMaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
	imports: [CommonModule, UiMaterialModule],
	declarations: [HeaderComponent, FooterComponent],
	exports: [HeaderComponent, FooterComponent],
})
export class UiNavigationModule {}
