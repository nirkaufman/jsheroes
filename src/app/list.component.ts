import {
  Component,
  HostBinding,
  Input,
  OnInit,
  TemplateRef,
  ViewChild, ViewContainerRef
} from '@angular/core';

export interface Item {
  title: string;
}

@Component({
  selector: 'app-list',
  template: `      
    <ul>
      <ng-container #container></ng-container>
    </ul>
    
    <ng-template #defaultItem let-item>
      <li>{{ item.title }}</li>
    </ng-template>  
  `,
})
export class ListComponent implements OnInit {
  @Input() items: Item[];
  @Input() customItem: TemplateRef<any>;

  @ViewChild('defaultItem') defaultItem:TemplateRef<any>;
  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;

  ngOnInit(): void {
    this.items.forEach( (item, i) => {
      this.container.createEmbeddedView(this.customItem || this.defaultItem, {
        $implicit: item,
        index: i
      });
    })
  }



}










