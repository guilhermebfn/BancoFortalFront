import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
  }

  // Incompleta
  entrar(nomeUsuario: string, senha: string) {

    this.usuarioService.entrar(nomeUsuario, senha)
      .subscribe(sessao => window.alert(sessao.nomeUsuario + ' ' + sessao.token));
  }
}
