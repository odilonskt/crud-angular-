import { Component, OnInit } from '@angular/core';
import { ProdutoService  } from '../../service/produto.service';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/produto.interface';


@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.scss'
})

export class ItemListComponent implements OnInit {
  products: Product[] = [];
  newProduct: Product = {nomeDoProduto:'',descricaoDoProduto:'',codigo:'',quantidade:0};
  editarProduct: Product = {nomeDoProduto:'',descricaoDoProduto:'',codigo:'',quantidade:0, id:"0"};
  mode: 'add' | 'edit' =  "add";
  
  constructor(private productService: ProdutoService ){}
  ngOnInit(){
    this.productService.getProducts().subscribe((data)=>{
      this.products = data;
      // console.log(data);
    });
  }
addProduct(){
   
  if (!this.newProduct.nomeDoProduto || !this.newProduct.descricaoDoProduto || !this.newProduct.codigo) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  this.productService.addProduct(this.newProduct).then(() => {
    this.newProduct = { nomeDoProduto: '', descricaoDoProduto: '', codigo: '', quantidade: 0 };
  });
}

hadleUpdateProduct(product:Product){
  this.mode = 'edit'
  this.editarProduct ={...product}

}
editProduct(){
  if (!this.editarProduct.nomeDoProduto ||!this.editarProduct.descricaoDoProduto ||!this.editarProduct.codigo) {
    alert('Preencha todos os campos corretamente!');
    return;
  }
  if(this.editarProduct){
    this.productService.updateProduct(this.editarProduct)
 this.mode = 'add'
  this.editarProduct = {nomeDoProduto:'',descricaoDoProduto:'',codigo:'',quantidade:0, id:"0"};
  }
}
deleteProduct(id:string | undefined){
  if(id){
    this.productService.deleteProduct(id);
  }else{
    console.error('ID não encontrado')
  }
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


