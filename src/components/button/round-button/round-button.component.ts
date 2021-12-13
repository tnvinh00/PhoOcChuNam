import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-button',
  templateUrl: './round-button.component.html',
  styleUrls: ['./round-button.component.scss'],
  inputs: ['text', 'icon', 'color', 'textColor', 'width', 'height', 'disabled', 'onClick']
})
export class RoundButtonComponent implements OnInit {
  @Input() text = 'Button';
  @Input() icon = 'home';
  @Input() color = 'warn';
  @Input() textColor = '';
  @Input() width = '';
  @Input() height = '50px';
  @Input() disabled = false;
  @Input() borderRadius = '30px';
  @Input() onClick = () => { }

  buttonStyle = ''

  constructor() {

  }

  ngOnInit() {
    this.buttonStyle = 'width:' + this.width + '; height:' + this.height + ';' + 'disabled:' + this.disabled + ';'
      + 'border-radius:' + this.borderRadius + ';' + (this.textColor ? 'color:' + this.textColor + ';' : '');
  }

}
