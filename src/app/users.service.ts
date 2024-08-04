import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}
  private fetchApi = 'http://localhost:5262/FetchData';
  private createApi = 'http://localhost:5262/Create';
  private findByIdApi = 'http://localhost:5262/FindById';
  private updateDataApi = 'http://localhost:5262/EditData';
  private deleteApi = 'http://localhost:5262/DeleteData';

  fetchData(): Observable<any> {
    return this.httpClient.get<any>(this.fetchApi);
  }

  addData = (data: any): Observable<any> => {
    return this.httpClient.post<any>(this.createApi, data);
  };

  getEditData = (userId: string): Observable<any> => {
    const url = `${this.findByIdApi}?id=${userId}`;
    return this.httpClient.get<any>(url);
  };

  updateData = (data: any, userId: string): Observable<any> => {
    const url = `${this.updateDataApi}?id=${userId}`;
    return this.httpClient.post<any>(url, data, {
      headers: new HttpHeaders({
        enctype: 'multipart/form-data',
      }),
    });
  };

  deleteData = (userId : number):Observable<any> =>{
    const url = `${this.deleteApi}?id=${userId}`;
    return this.httpClient.delete<any>(url);
  }

}
