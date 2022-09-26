import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Usuario } from '../usuario';
import { environment } from 'src/environments/environment';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  cadastrar(nomeUsuario: string, senha: string) {
    
  }

}
