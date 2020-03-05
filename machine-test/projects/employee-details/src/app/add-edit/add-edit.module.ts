import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskThreeComponent } from './task-three/task-three.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component'



@NgModule({
  declarations: [TaskThreeComponent, AddComponent, EditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddEditModule { }
