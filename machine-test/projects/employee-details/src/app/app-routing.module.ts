import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskOneComponent } from './show-details/task-one/task-one.component';
import { TaskTwoComponent } from './search-filter/task-two/task-two.component';
import { TaskThreeComponent } from './add-edit/task-three/task-three.component';
import { AddComponent } from './add-edit/add/add.component';
import { EditComponent } from './add-edit/edit/edit.component';


const routes: Routes = [
  { path : '',component : TaskOneComponent },
  { path : 'task_two',component : TaskTwoComponent },
  { path : 'task_three',component : TaskThreeComponent },
  { path : 'add',component : AddComponent },
  { path : 'edit/:id',component : EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
