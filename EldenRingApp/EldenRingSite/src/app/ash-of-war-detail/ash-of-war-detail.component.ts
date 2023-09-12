import { Component, Inject, Input, OnInit } from '@angular/core';
import { AshItem, AshOfWar } from '../ashOfWar/ashOfWar';
import { TopnavbarComponent } from '../topnavbar/topnavbar.component';

@Component({
  selector: 'app-ash-of-war-detail',
  templateUrl: './ash-of-war-detail.component.html',
  styleUrls: ['./ash-of-war-detail.component.css']
})

export class AshOfWarDetailComponent implements OnInit {
 ashOfWar: any;

 ngOnInit(): void {
    this.ashOfWar = TopnavbarComponent.getAsh();
 }

}
