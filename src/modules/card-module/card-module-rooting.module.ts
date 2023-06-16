import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card.component';
import { ComponentCardDetailComponent } from './component-card-detail/component-card-detail.component';
import { AuthGuard } from '../../app/app.guard';

const routes: Routes = [
  {
    path: '',
    component: CardComponent,
    children: [{ path: ':id', component: ComponentCardDetailComponent }],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardModuleRootingModule {}
