import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss'],
  inputs: ['label', 'isActive']
})
export class ButtonToggleComponent implements OnInit {
  @Input() label: string = "Tất cả"
  @Input() isActive: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isActive = !this.isActive;
  }
}
