import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';
import { ImplicitReceiver } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {
  techNews: any = [];
  constructor(private service: NewsapiserviceService) {

  }
  ngOnInit(): void {
    this.service.techNews().subscribe((result)=> {
      this.techNews = result.articles
    })
  }
}
