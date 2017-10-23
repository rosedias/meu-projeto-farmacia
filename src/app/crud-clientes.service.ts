import { Injectable } from '@angular/core';
import { Clientes } from "./cliente";

@Injectable()
export class CrudClientesService {
	clientes: Clientes[] = [];

	autoIncrement = 1;

  constructor() { }
  getClientes() {
  	return this.clientes;
  }

  adicionarCliente(cliente:Clientes){
  	cliente.codigo=this.autoIncrement++;
  	this.clientes.push(cliente);
  }

  getClientePorCodigo(codigo:number){
  	return(this.clientes.find(cliente => cliente.codigo == codigo));
  }

  removerCliente(cliente:Clientes){
  	let indice = this.clientes.indexOf(cliente, 0);
  	if (indice > -1){
  		this.clientes.splice(indice,1);
  	}
  }

  atualizaCliente(codigo:number, cliente:Clientes){
  	let indice = this.clientes.indexOf(this.getClientePorCodigo(codigo),0);
  	this.clientes[indice]=cliente;
  }

}
