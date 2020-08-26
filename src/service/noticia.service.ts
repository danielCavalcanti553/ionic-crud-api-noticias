import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from 'src/model/noticia';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Message } from 'src/model/message';

@Injectable({
    providedIn: 'root',
  })
  export class NoticiaService {
    constructor(private http: HttpClient) { }

    api : string = environment.apiNoticias+"/noticias/";

    getNoticias() : Observable<Noticia[]>{
        return this.http.get<Noticia[]>(this.api);
    }

    getNoticiaById(id) : Observable<Noticia>{
      return this.http.get<Noticia>(`${this.api}/${id}`);
    }

    novo(obj : Noticia) : Observable<Message>{
      return this.http.post<Message>(`${this.api}`,
        obj,
        {
          observe: 'response',
          responseType: 'json'
        }
        );
    }

    atualiza(obj : Noticia) : Observable<Message>{
      return this.http.put<Message>(`${this.api}/${obj.id}`,
        obj,
        {
          observe: 'response',
          responseType: 'json'
        }
        );
    }

    delete(obj : Noticia) : Observable<Message>{
      return this.http.delete<Message>(`${this.api}/${obj.id}`,
        {
          observe: 'response',
          responseType: 'json'
        }
        );
    }

  }