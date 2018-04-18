import {Component} from '@angular/core';
import {Item} from "./list.component";

@Component({
  selector: 'app-root',
  template: `      
    <div>
      <h1>{{ title }}</h1>
      
      <app-list [items]="items" [customItem]="customItem"></app-list>
      
      <ng-template #customItem let-item let-myI="index">
        <li style="color: blue">
          {{ myI }}
          <input type="checkbox">
          <input type="text" [value]="item.title">
        </li>
      </ng-template>
      
    </div>       
  `,
  styles: ['.red{color: red}']
})
export class AppComponent {
  title = 'Welcome to JSHeroes!';

  items: Item[] = [
    { title: 'first item' },
    { title: 'second item' },
    { title: 'third item' },
    { title: 'forth item' },
  ]
}
