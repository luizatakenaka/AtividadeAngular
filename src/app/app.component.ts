import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnderecoService } from './services/endereco.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  endereco: EnderecoService;
  cep: string = '';
  name: string = '';
  cpf: string = '';
  email: string = '';
  telefone: string = '';
  datanascimento: string = '';
  rua: string = '';
  bairro: string = '';
  cidade: string = '';
  uf: string = '';

  constructor(enderecoService: EnderecoService) {
    this.endereco = enderecoService;
   }


   getEndereco(cep: string) {
    this.endereco.getEndereco(cep).then(endereco => {
      this.rua = endereco.logradouro;
      this.bairro = endereco.bairro;
      this.cidade = endereco.cidade;
      this.uf = endereco.uf;
      console.log(endereco);
    });
  }
  title = 'aula_ts_angular';
}
