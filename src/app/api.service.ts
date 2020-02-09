import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Note } from './note';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8000/api/notes/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(apiUrl)
      .pipe(
        tap(note => console.log('fetched notes')),
        catchError(this.handleError('getNotes', []))
      );
  }
  
  getNote(id: any): Observable<Note> {
    const url = `${apiUrl}/show/${id}`;
    return this.http.get<Note>(url).pipe(
      tap(_ => console.log(`fetched note id=${id}`)),
      catchError(this.handleError<Note>(`getNote id=${id}`))
    );
  }
  
  addNote(Note: Note): Observable<Note> {
    const url = `${apiUrl}/create/`;
    return this.http.post<Note>(url, Note, httpOptions).pipe(
      tap((note: Note) => console.log(`added note w/ id=${note.id}`)),
      catchError(this.handleError<Note>('addNote'))
    );
  }
  
  updateNote(id: any, Note: any): Observable<any> {
    const url = `${apiUrl}/update/${id}`;
    return this.http.put(url, Note, httpOptions).pipe(
      tap(_ => console.log(`updated Note id=${id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }
  
  deleteNote(id: any): Observable<Note> {
    const url = `${apiUrl}/delete/${id}`;
    return this.http.delete<Note>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Note id=${id}`)),
      catchError(this.handleError<Note>('deleteNote'))
    );
  }
}
