import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
  inputs: ['text', 'icon', 'color', 'width', 'height', 'disabled']
})
export class RoundButtonComponent implements OnInit {
  @Input() text = 'Button';
  @Input() icon = 'home';
  @Input() color = 'warn';
  @Input() width = '100px';
  @Input() height = '50px';
  @Input() disabled = false;
  @Input() borderRadius = '30px';

  buttonStyle = ''

  constructor() {

  }

  ngOnInit() {
    this.buttonStyle = 'width:' + this.width + '; height:' + this.height + ';' + 'disabled:' + this.disabled + ';'
        + 'border-radius:' + this.borderRadius + '; min-width: 200px;';
  }

}
