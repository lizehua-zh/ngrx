import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../counter.actions';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(private store: Store<any>) { }

  ngOnInit() {

  }
  public increment(operatorName: string, actionName: string): void {

    this.store.dispatch(increment({ operator: operatorName, action: actionName }));
  }
  public decrement(operatorName: string, actionName: string): void {

    this.store.dispatch(decrement({ operator: operatorName, action: actionName }));
  }
  public reset(operatorName: string, actionName: string): void {

    this.store.dispatch(reset({ operator: operatorName, action: actionName }));
  }
}
