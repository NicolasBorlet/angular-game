import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCardComponent } from './component-card/component-card.component';
import { ComponentCardDetailComponent } from './component-card-detail/component-card-detail.component';

const routes: Routes = [
    { path: '', component: ComponentCardComponent },
    { path: ':id', component: ComponentCardDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CardModuleRootingModule { }