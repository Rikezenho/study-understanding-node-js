import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

@Injectable()
export class TodoService {
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private todosApiUrl = 'http://localhost:3000/api/todos/user';

    constructor(private http: Http) { }

    getTodos(): Promise<Todo[]> {
        return this.http.get(this.todosApiUrl)
            .toPromise()
            .then(response => response.json() as Todo[])
    }
}