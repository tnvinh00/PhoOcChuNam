import { Component, Input, OnInit } from '@angular/core';
import { Branch } from 'models/branch';

@Component({
  selector: 'app-branch-card',
  templateUrl: './branch-card.component.html',
  styleUrls: ['./branch-card.component.scss'],
  inputs: ['branch', 'isloading']
})
export class BranchCardComponent implements OnInit {
  @Input() branch: Branch = {
    "createdAt": "2021-12-08T15:53:16.653Z",
    "name": "name 1",
    "image": [],
    "address": "address 1",
    "website": "website 1",
    "desc": "desc 1",
    "googlemap": "googlemap 1",
    "phone": [],
    "email": "email 1",
    "fanpage": "fanpage 1",
    "link": "link 1",
    "id": "1"
  };

  @Input() isloading: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
