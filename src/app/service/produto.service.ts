// import { inject, Injectable } from '@angular/core';
// import { collectionData, Firestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import { Produto } from '../interface/produto.interface';
// import { collection } from 'firebase/firestore';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProdutoService {
// constructor (private firestore: AngularFirestore){}

// getProduto():Observable<Produto[]>{
// const produtoColecao = collection(this.firestore,'produtos') 
// return collectionData(produtoColecao,{idField:'chave'}) as Observable<Produto[]>
// }

// getProduto(){
//   return this.firestore.collection('produtos').snapshotChanges();
// }
// }
