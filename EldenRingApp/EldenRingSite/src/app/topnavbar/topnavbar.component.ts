import { Component, OnInit } from '@angular/core';
import { EldenringapiserviceService } from '../service/eldenringapiservice.service';
import { AshOfWar } from '../ashOfWar/ashOfWar';

@Component({
  selector: 'app-topnavbar',
  templateUrl: './topnavbar.component.html',
  styleUrls: ['./topnavbar.component.css']
})
export class TopnavbarComponent implements OnInit {
  
  ashesOfWar: any = []
  static ash: AshOfWar
  constructor(private service: EldenringapiserviceService){  }

  ngOnInit(): void {
    this.service.getAshesOfWar().subscribe((result) => {
      console.log(result)
      this.ashesOfWar = result.data
    })
  }

  test(obj: any): void {
    console.log(obj)
    TopnavbarComponent.ash = obj
  }

  static getAsh() {
    return this.ash
  }

}
