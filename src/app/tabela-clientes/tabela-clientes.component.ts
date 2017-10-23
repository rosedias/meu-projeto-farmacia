import { Component, OnInit } from '@angular/core';
import { Clientes } from "../cliente";
import { CrudClientesService } from "../crud-clientes.service";

@Component({
  selector: 'app-tabela-clientes',
  templateUrl: './tabela-clientes.component.html',
  styleUrls: ['./tabela-clientes.component.css']
})
export class TabelaClientesComponent implements OnInit {
  titulo = "Clientes";
  clientes:Clientes[]=[];
  
  constructor(private servico:CrudClientesService) { }

  ngOnInit() {
    this.clientes = this.servico.getClientes();
  }

  remover(cliente:Clientes){
    this.servico.removerCliente(cliente);
  }

}
