import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Film } from '../models/film.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FilmService{

  URL = "http://localhost:3000/filmes";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-type' : 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  incluirCatalogo(film : Film) : Observable<any> {
    return this.http.post(this.URL + '/cadastrar', film)
  }

  getFilmes(): Observable<Film[]>{
    return this.http.get<Film[]>(this.URL + '/list')
  }


  buscarProdutoPorId(id : number) : Observable<Film>{
    return this.http.get<Film>(this.URL + '/getid/' + id)
  }

  atualizarFilm(film : Film) : Observable<any>{
    return this.http.post(this.URL + "/update" , film)
  }
}


