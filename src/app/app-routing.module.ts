import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';

const routes: Routes = [
  { path: 'component-home', component: ComponentHomeComponent },
  { path: 'card', loadChildren: () => import('../modules/card-module/card-module.module').then(m => m.CardModuleModule) },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
