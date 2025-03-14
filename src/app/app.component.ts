import { Component, inject } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from "./components/item-list/item-list.component";

@Component({
  selector: 'app-root',
  imports: [ ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'projeto-angular';
  // private _auth = inject(Auth)
}
