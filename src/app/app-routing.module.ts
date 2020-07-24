import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from 'src/app/componenti/list/list.component'
import { TypeComponent } from 'src/app/componenti/type/type.component'


const routes: Routes = [
  {
    path: 'home',
    component: ListComponent,
    outlet: "content"
  },
  {
    path: 'type',
    component: TypeComponent,
    outlet: "content"
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
