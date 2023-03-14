import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentCardComponent } from './component-card/component-card.component';

const routes: Routes = [
    { path: '', component: ComponentCardComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CardModuleRootingModule { }