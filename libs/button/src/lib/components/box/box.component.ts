import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'conti-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
