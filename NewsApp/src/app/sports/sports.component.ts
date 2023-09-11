import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {
  sports: any = []
  constructor(private service: NewsapiserviceService) {

  }
ngOnInit(): void {
  this.service.sportNews().subscribe((result) =>  {
    this.sports = result.articles
  })
}

}
