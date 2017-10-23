import { Component, OnInit } from '@angular/core';
import { CrudClientesService } from '../crud-clientes.service';
import { Clientes } from "../cliente";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-form-clientes',
  templateUrl: './form-clientes.component.html',
  styleUrls: ['./form-clientes.component.css']
})
export class FormClientesComponent implements OnInit {
	titulo = "Cadastro de Clientes";
	cliente:Clientes;
  codigo: number;

  constructor(private servico:CrudClientesService, private router:Router, private rota:ActivatedRoute) { }
  ngOnInit() { 
    this.codigo = this.rota.snapshot.params['cod']; 

    if(isNaN(this.codigo)){
      this.cliente = new Clientes();
    } else {
      this.cliente = Object.assign({},
        this.servico.getClientePorCodigo(this.codigo));
    }

}

  salvarCliente(){
    if(isNaN(this.codigo)){
      this.servico.adicionarCliente(this.cliente);
      this.cliente = new Clientes();
    } else {
      this.servico.atualizaCliente(this.codigo, this.cliente);
    }
      this.router.navigate(['/listaClientes']);


//    this.servico.adicionarProduto(this.produto);
//    this.router.navigate(['/listaProdutos']);
  }

    cancelar(){
    	this.router.navigate(['/listaClientes']);
    }

}