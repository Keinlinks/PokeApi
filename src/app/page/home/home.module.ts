import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ShipComponent } from 'src/app/shared/components/ship/ship.component';
import { FirstUppercasePipe } from 'src/app/pipes/first-uppercase.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, ItemListComponent, ItemDetailsComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    ShipComponent,
    FirstUppercasePipe,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    RouterModule.forChild([
      {
        path: 'resume',
        loadChildren: () =>
          import('../resume-table/resume-table.module').then(
            (m) => m.ResumeTableModule
          ),
      },
    ]),
  ],
  exports: [HomeComponent],
})
export class HomeModule {}
