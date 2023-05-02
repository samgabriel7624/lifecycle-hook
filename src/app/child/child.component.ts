import { Component,ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'child-component',
    changeDetection:ChangeDetectionStrategy.Default,
    templateUrl: './child.component.html',
})
export class ChildComponent{
    @Input() counts:any;
    customer:any="rafcg"
    

    

    constructor() {
      console.log("AppComponent:Contructed");
    }
   
    ngOnChanges() {
      console.log("AppComponent:ngOnChanges");
    }
   
    ngOnInit() {
      console.log("AppComponent:ngOnInit");
    }
   
    ngDoCheck() {
      console.log("AppComponent:DoCheck");
    }
   
    ngAfterContentInit() {
      console.log("AppComponent:ngAfterContentInit");
    }
   
    ngAfterContentChecked() {
      console.log("AppComponent:AfterContentChecked");
    }
   
    ngAfterViewInit() {
      console.log("AppComponent:AfterViewInit");
    }
   
    ngAfterViewChecked() {
      console.log("AppComponent:AfterViewChecked");
    }
   
    ngOnDestroy() {
      console.log("AppComponent:ngOnDestroy");
    }
   
}
