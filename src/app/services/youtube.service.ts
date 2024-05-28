import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class YouTubeService {
  private apiKey: string = 'AIzaSyDLGd4yzJfq3bUiwd8n0u30SGMtp7-qsl4';
  private apiUrl: string = 'https://www.googleapis.com/youtube/v3';

  constructor(private httpClient: HttpClient) {}

  searchVideos(query: string, pageToken: string = '', maxResults: number = 10): Observable<any> {
    const url = `${this.apiUrl}/search?key=${this.apiKey}&q=${encodeURIComponent(query)}&part=snippet&type=video&order=date&maxResults=${maxResults}&pageToken=${pageToken}`;
    return this.httpClient.get(url).pipe(
      map((response: any) => ({
        videos: response.items,
        nextPageToken: response.nextPageToken
      })),
      catchError(error => {
        console.error('Error fetching videos:', error);
        return throwError(() => new Error(error.message || 'Error fetching videos'));
      })
    );
  }
}
