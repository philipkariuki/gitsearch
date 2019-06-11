import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { User } from './../user';
import { GitserviceService } from './../services/gitservice.service';
import { filter, switchMap, debounceTime, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gitserviceService: GitserviceService) {}
  findControl= new FormControl();
  error: boolean = false;
  user: User = null;

  ngOnInit(){
  this.findControl.valueChanges
  .pipe(filter(value => value.length > 3),
  debounceTime(1000),
  switchMap(value =>
    this.gitserviceService.getUser(value).pipe(
      catchError (err => {
        this.user = null;
        this.error = true;
        return EMPTY;
      })))
    ).subscribe(user => this.user = user);
  }
  }

