import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // callback para submeter um usuário e uma senha
  // submeter(usuario: string, senha: string): Observable<Sessao> {

  //   return this.http.post<Sessao>()

  // }
}
