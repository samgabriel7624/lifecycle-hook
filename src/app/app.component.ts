import { ChangeDetectionStrategy, Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection:ChangeDetectionStrategy.Default,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'lifecyclehook';

  Counter=5;

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