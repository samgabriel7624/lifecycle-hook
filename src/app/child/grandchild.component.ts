import { ChangeDetectionStrategy, Component, Input,  OnInit } from '@angular/core';


@Component({
  selector: 'app-grand-child',
  changeDetection:ChangeDetectionStrategy.Default,
  template: `
  
      
  <p>hkdhaskdhkahdk</p>
  `,
})
export class GrandChildComponent {


  @Input() customer:any
  
  constructor() {
    console.log("    GrandChildComponent:Contructed");
  }

  ngOnChanges() {
    console.log("    GrandChildComponent:ngOnChanges");
  }

  ngOnInit() {
    console.log("    GrandChildComponent:ngOnInit");
  }


  ngDoCheck() {
    console.log("    GrandChildComponent:DoCheck");
  }

  ngAfterContentInit() {
    console.log("    GrandChildComponent:ngAfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("    GrandChildComponent:AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("    GrandChildComponent:AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("    GrandChildComponent:AfterViewChecked");
  }
 
  ngOnDestroy() {
    console.log("    GrandChildComponent:ngOnDestroy");
  }
 


}