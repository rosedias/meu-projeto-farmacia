import { Injectable } from '@angular/core';
import { Produtos } from "./produto";

@Injectable()
export class CrudProdutosService {
  produtos: Produtos[] = [];

autoIncrement:number=4;

  constructor() { }
  getProdutos() {
    return this.produtos;
  }

  adicionarProduto(produto:Produtos){
    produto.codigo=this.autoIncrement++;
    this.produtos.push(produto);
  }

  getProdutoPorCodigo(codigo:number){
    return(this.produtos.find(produto => produto.codigo == codigo));
  }

  removerProduto(produto:Produtos){
    let indice = this.produtos.indexOf(produto, 0);
    if (indice > -1){
      this.produtos.splice(indice, 1);
    }
  }

  atualizaProduto(codigo:number, produto:Produtos){
    let indice = this.produtos.indexOf(this.getProdutoPorCodigo(codigo), 0);
    this.produtos[indice] = produto;
  }

}
