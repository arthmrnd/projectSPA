import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class actionComponent implements OnInit {

  constructor(public dialog : MatDialog) { }

  ngOnInit(): void {
  }


}
