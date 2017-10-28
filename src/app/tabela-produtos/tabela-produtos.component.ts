import { Component, OnInit } from '@angular/core';
import { Produtos } from "../produto";
import { CrudProdutosService } from "../crud-produtos.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-tabela-produtos',
  templateUrl: './tabela-produtos.component.html',
  styleUrls: ['./tabela-produtos.component.css']
})
export class TabelaProdutosComponent implements OnInit {
  titulo = "Estoque";
  produtos:Produtos[]=[];
  
  constructor(private servico:CrudProdutosService, private router:Router, private rota:ActivatedRoute) { }

  ngOnInit() {
    this.produtos = this.servico.getProdutos();
  }

  remover(produto:Produtos){
    this.servico.removerProduto(produto);
  }

}
