import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './deck.component';
import { AuthGuard } from '../card-module/card.guard';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: DeckComponent,
    // children: [{ path: ':id', component: ComponentCardDetailComponent }],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckModuleRootingModule {}
