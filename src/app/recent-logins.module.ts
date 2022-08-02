import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginListComponent } from './login-list/login-list.component';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [LoginListComponent],
  imports: [
    CommonModule,
    MatTableModule,
    RouterModule.forChild([{ path: '', component: LoginListComponent }]),
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' }],
})
export class RecentLoginsModule {}
