import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ItemAddComponent } from "../components/item-add/item-add.component";
import { ItemDetailsComponent } from "../components/item-details/item-details.component";
import { ItemListComponent } from "../components/item-list/item-list.component";


const routes: Routes = [
  { path: '', redirectTo: '/itens', pathMatch: 'full' },
  { path: 'itens', component: ItemListComponent },
  { path: 'item-add', component: ItemAddComponent },
  { path: 'item-details/:id', component: ItemDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
