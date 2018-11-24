import { Component, OnInit  } from '@angular/core';



declare var $: any;
@Component({
  selector: 'app-root',
  animations: [ routerTransition ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
  ngOnInit() {


  }


}
