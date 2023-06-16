import { RouterModule, Routes } from '@angular/router';
import { DeckComponent } from './deck.component';
import { AuthGuard } from '../../app/app.guard';
import { NgModule } from '@angular/core';
import { ComponentDeckDetailComponent } from './component-deck-detail/component-deck-detail.component';

const routes: Routes = [
  {
    path: '',
    component: DeckComponent,
    children: [{ path: ':id', component: ComponentDeckDetailComponent }],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeckModuleRootingModule {}
