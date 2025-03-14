import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, addDoc, updateDoc, deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Product } from '../interface/produto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private collectionName = 'products';

  constructor(private firestore: Firestore) {}

  getProducts(): Observable<Product[]> {
    const productsCollection = collection(this.firestore, this.collectionName);
    return collectionData(productsCollection, { idField: 'id' }) as Observable<Product[]>;
  }

  async addProduct(product: Product): Promise<string> {
    const productsCollection = collection(this.firestore, this.collectionName);
    console.log(product)
    const docRef = await addDoc(productsCollection, product);
    return docRef.id;
  }

  async updateProduct(product: Product): Promise<void> {
    const productDoc = doc(this.firestore, `${this.collectionName}/${product.id}`);
    return updateDoc(productDoc, { ...product });
  }
  

  async deleteProduct(id: string): Promise<void> {
    const productDoc = doc(this.firestore, `${this.collectionName}/${id}`);
    return deleteDoc(productDoc);
  }
}