import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Noticia } from 'src/model/noticia';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Message } from 'src/model/message';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class NoticiaService {
  constructor(private http: HttpClient) { }

  api: string = environment.apiNoticias + "/noticia/";
  BucketName = 'imagem-app';
  s3Config = environment.awsAccess;
  n: any;

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.api);
  }

  getNoticiaById(id): Observable<Noticia> {
    return this.http.get<Noticia>(`${this.api}/${id}`);
  }

  novo(obj: Noticia): Observable<Message> {
    return this.http.post<Message>(`${this.api}`,
      obj,
      {
        observe: 'response',
        responseType: 'json'
      }
    );
  }

  atualiza(obj: Noticia): Observable<Message> {
    return this.http.put<Message>(`${this.api}/${obj.id}`,
      obj,
      {
        observe: 'response',
        responseType: 'json'
      }
    );
  }

  delete(obj: Noticia): Observable<Message> {
    return this.http.delete<Message>(`${this.api}/${obj.id}`,
      {
        observe: 'response',
        responseType: 'json'
      }
    );
  }

  fileUpload(file, fileName): Promise<any> {

    const contentType = file.type;
    const bucket = new S3(this.s3Config);

    let name: string = file.name;
    let arrayFileName = name.split('.');
    let finalName = fileName + '.' + arrayFileName[1];

    const params = {
      Bucket: this.BucketName,
      Key: finalName,
      Body: file,
      ACL: 'public-read',
      ContentType: contentType
    };

    return bucket.upload(params).promise().then(data => {
      return data;
    });

  }

  getImage(id) : string{ 
    return environment.locationAWS + "/noticia" +id+".jpg";
  }

}