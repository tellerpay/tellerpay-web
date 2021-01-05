import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebNavigationComponent } from './web-navigation/web-navigation.component';



@NgModule({
  declarations: [WebNavigationComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WebNavigationComponent
  ]
})
export class SharedModule { }
