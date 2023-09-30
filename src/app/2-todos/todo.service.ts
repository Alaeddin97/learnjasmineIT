import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo:any) {
    return this.http.post('...', todo).pipe(
      map(r => r)
    );
  }

  getTodos() { 
    return this.http.get('...').pipe(
      map(r => r)
    );
  }

  getTodosPromise() {
    return Promise.resolve(this.http.get('...'))
  }

  delete(id:any) {
    return this.http.delete('...').pipe(
      map(r => r)
    );
  }
}