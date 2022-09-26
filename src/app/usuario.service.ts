import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Usuario } from './usuario';
import { Sessao } from './sessao';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  // callback para entrar com um usuário e uma senha
  entrar(nomeUsuario: string, senha: string): Observable<Sessao> {

    let url = environment.url;
    let usuario: Usuario = { nomeUsuario, senha };
    let httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post<Sessao>(url, usuario, httpOptions);
  }

  cadastrar(nomeUsuario: string, senha: string): void {

    // let url = environment.url;

    // this.http.post<Usuario>(url, );
  }
}
