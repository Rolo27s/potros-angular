import { Component, OnInit } from '@angular/core';
import { NewsService, News } from '../../services/news.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-noticias',
  standalone: true,
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  imports: [CommonModule]
})
export class NoticiasComponent implements OnInit {

  newsList: News[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((data: News[]) => {
      this.newsList = data;
    });
  }
}
