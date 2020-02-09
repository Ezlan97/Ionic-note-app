import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Note } from './note';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'localhost:8000/api/notes/';

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
    const url = `${apiUrl}/${id}`;
    return this.http.get<Note>(url).pipe(
      tap(_ => console.log(`fetched note id=${id}`)),
      catchError(this.handleError<Note>(`getNote id=${id}`))
    );
  }
  
  addNote(Note: Note): Observable<Note> {
    return this.http.post<Note>(apiUrl, note, httpOptions).pipe(
      tap((note: Note) => console.log(`added note w/ id=${note._id}`)),
      catchError(this.handleError<Note>('addNote'))
    );
  }
  
  updateNote(id: any, Note: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, note, httpOptions).pipe(
      tap(_ => console.log(`updated Note id=${id}`)),
      catchError(this.handleError<any>('updateNote'))
    );
  }
  
  deleteNote(id: any): Observable<Note> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<Note>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Note id=${id}`)),
      catchError(this.handleError<Note>('deleteNote'))
    );
  }
}
