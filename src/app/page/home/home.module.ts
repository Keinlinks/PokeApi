import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';



@NgModule({
  declarations: [
    HomeComponent,
    ItemListComponent,
    ItemDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
