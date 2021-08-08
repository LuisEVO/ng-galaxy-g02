import { AfterContentInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ContentChildren, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabGroupComponent implements OnInit, AfterViewInit, AfterContentInit {
  // @ViewChild(TabComponent) firstTab: TabComponent;
  // static: true campura las referencias en el OnInit
  /* FORMA 1
  @ViewChild('tab1', { static: true }) firstTab!: TabComponent;
  @ViewChild('tab2', { static: true }) secondTab!: TabComponent;
  @ViewChild('tab3', { static: true }) tirdhTab!: TabComponent;
  @ViewChild('tab4', { static: true }) fourTab!: TabComponent;
  tabs: TabComponent[] = [];
  */

  /* FORMA 2
  @ViewChildren(TabComponent) tabs!: QueryList<TabComponent>;
  */

  /* FORMA 3
  @ContentChild('tab1') firstTab!: TabComponent;
  @ContentChild('tab2') secondTab!: TabComponent;
  tabs: TabComponent[] = [];
  */

  @ContentChildren(TabComponent) tabs!: QueryList<TabComponent>;

  constructor(
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    // console.log(this.firstTab);
    // console.log(this.secondTab);
    /* FORMA 1
    this.tabs = [ this.firstTab, this.secondTab, this.tirdhTab, this.fourTab ];
    */
  }

  ngAfterViewInit(): void {
    // console.log(this.firstTab);
    console.log(this.tabs);
    /**
     * actualiza la pantalla de manera manual, solo funciona con el
     * ChangeDetectionStrategy.OnPush
     */
    // this.changeDetectorRef.detectChanges();
  }

  ngAfterContentInit(): void {
    // FORMA 3
    // this.tabs = [ this.firstTab, this.secondTab ];
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach(itemTab => itemTab.active = false);
    tab.active = true;
  }

}
