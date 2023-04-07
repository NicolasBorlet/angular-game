import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentHomeComponent } from './component-home/component-home.component';
import { LoginComponent } from 'src/modules/login-module/login-component/login.component';

const routes: Routes = [
  { path: 'component-home', component: ComponentHomeComponent },
  {
    path: 'card',
    loadChildren: () =>
      import('../modules/card-module/card-module.module').then(
        (m) => m.CardModule
      ),
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'deck',
    loadChildren: () =>
      import('../modules/deck/deck.module').then((m) => m.DeckModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
