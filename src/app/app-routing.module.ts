import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './Component/add-data/add-data.component';
import { DisplayDataComponent } from './Component/display-data/display-data.component';
import { EditCompComponent } from './Component/edit-comp/edit-comp.component';

const routes: Routes = [
  { path: '', component: AddDataComponent },
  { path: 'showData', component: DisplayDataComponent },
  { path: 'edit/:id', component: EditCompComponent },
  { path: 'delete/:id', component: DisplayDataComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
