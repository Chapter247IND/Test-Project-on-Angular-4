import { Component, NgModule } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
	activeTab: string;
  	constructor(private router: Router, private activeRoute: ActivatedRoute){
  		this.activeTab = this.router.url;
 	}
}	
