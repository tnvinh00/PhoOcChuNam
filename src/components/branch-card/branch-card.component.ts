import { Component, Input, OnInit } from '@angular/core';
import { Branch } from 'models/branch';

@Component({
  selector: 'app-branch-card',
  templateUrl: './branch-card.component.html',
  styleUrls: ['./branch-card.component.scss'],
  inputs: ['branch', 'isloading']
})
export class BranchCardComponent implements OnInit {
  @Input() branch: Branch = null;

  @Input() isloading: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  onDirection(e){
    window.open(e.toString(), "_blank");
  }
}
