import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableResumePageComponent } from './table-resume-page/table-resume-page.component';
import { ResumeTableComponent } from './components/resume-table/resume-table.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { FirstUppercasePipe } from 'src/app/pipes/first-uppercase.pipe';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [TableResumePageComponent, ResumeTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TableResumePageComponent }]),
    MatTableModule,
    FirstUppercasePipe,
    MatProgressSpinnerModule,
    MatIconModule,
  ],
})
export class ResumeTableModule {}
