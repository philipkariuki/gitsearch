import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {

  constructor() { }
@Input()
user: User;

  ngOnInit() {
  }

}
