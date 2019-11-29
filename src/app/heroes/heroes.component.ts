import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { State } from '../counter.reucer';
import { Store, select } from '@ngrx/store';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit, OnDestroy {
  private storeSubscription: Subscription;
  public count: number;
  public operator: string;
  public action: string;


  constructor(private store: Store<any>) {

  }

  ngOnInit() {
    this.storeSubscription = this.store.pipe(
      select('demo')
    ).subscribe((state: State) => {
      console.log(state);
      if (state) {
        this.count = state.count;
        this.operator = state.operator;
        this.action = state.action;
      }
    });
  }
  ngOnDestroy(): void {
    this.storeSubscription.unsubscribe();
  }

}
