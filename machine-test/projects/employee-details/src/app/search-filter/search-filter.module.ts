import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskTwoComponent } from './task-two/task-two.component';

import { FormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [TaskTwoComponent],
  imports: [
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class SearchFilterModule { }
