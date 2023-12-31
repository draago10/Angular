import { Component, OnInit } from '@angular/core';
import { NewsapiserviceService } from '../service/newsapiservice.service';

@Component({
  selector: 'app-topheading',
  templateUrl: './topheading.component.html',
  styleUrls: ['./topheading.component.css']
})
export class TopheadingComponent implements OnInit {
  topheadingDisplay:any = [];
  constructor(private service: NewsapiserviceService) {

  }

  ngOnInit(): void {
    console.log("ben sucks")
    this.service.topHeading().subscribe((result) => {
      console.log(result)
      this.topheadingDisplay = result.articles
    })
  }
}
