import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {

  text1 = "Action";
  text2 = "Racing";
  text3 = "RPG";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.goToRpg();
  }
  goToAction(){
    this.router.navigate(['action'])
  }

  goToRacing(){
    this.router.navigate(['racing'])
  }

  goToRpg(){
    this.router.navigate(['rpg'])
  }
}
