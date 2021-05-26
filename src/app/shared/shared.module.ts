import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebNavigationComponent } from './web-navigation/web-navigation.component';
import { BackButtonComponent } from './components/back-button/back-button.component';



@NgModule({
  declarations: [WebNavigationComponent, BackButtonComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WebNavigationComponent,
    BackButtonComponent
  ]
})
export class SharedModule { }
