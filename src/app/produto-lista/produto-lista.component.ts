import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produto-lista',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produto-lista.component.html',
  styleUrl: './produto-lista.component.css'
})
export class ProdutoListaComponent {
  nomeProduto: string = '';

  produtos: Array<string> =[
    // "Iphone",
    // "Motorola G7",
    // "Xiome 9",
    // "Nokia"
  ]

  cadastrarProduto(){
    let existeProduto = this.produtos.some(x => this.nomeProduto);
    if (existeProduto === true)
      return;
    this.produtos.push("this.nomeProduto")
    this.nomeProduto = "";
  }

  apagarProduto(nomeProduto: string){
    let indiceProduto = this.produtos.findIndex(x=> x ===this.nomeProduto);
    this.produtos.splice(indiceProduto, 1);
  }
}


