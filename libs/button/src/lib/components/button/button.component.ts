import { Component, OnInit, ChangeDetectionStrategy, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'conti-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})

export class ContiButtonComponent implements OnInit {

  @Input() text: string = "helobelo";
  @Input() bg: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
