import { Component, inject } from '@angular/core';
import { Produto } from '../../interface/produto.interface';
 
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})

export class ItemListComponent{
  firestore  = inject(Firestore)
  items$: Observable<any[]>;
  constructor(){
    const produtoColecao = collection(this.firestore,"products")
    
    this.items$ = collectionData(produtoColecao,{
      idField:'id',
    })
  
  }
}
// export class ItemListComponent  implements OnInit {
//   ngOnInit(): void {
//   this._getProdutoData();  // Ao iniciar, carrega os dados dos produtos
//   }
//   produtoList: Produto[] = [];
// private _produtoList = inject(ProdutoService);

// private _getProdutoData(){
//   this._produtoList.getProduto().subscribe(data => {
//     // this.produtoList = data;
//     console.log(this.produtoList);
//   });
// }
// }
