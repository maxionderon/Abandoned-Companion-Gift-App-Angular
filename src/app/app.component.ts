import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterEvent, Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  
  loading: Boolean = true;
  routeListener = Subscription.EMPTY;
 
  constructor(private router: Router) {
   
  }

  ngOnInit() {
    
    this.routeListener = this.router.events.subscribe((event: RouterEvent) => {
      this.navigationInterceptor(event);
    });
    

  }

  navigationInterceptor(event: RouterEvent): void {
    

    if (event instanceof NavigationStart) {
      
      this.loading = true;

    }
    if (event instanceof NavigationEnd) {
      
      setTimeout(() => { 
        
        this.loading = false;

      }, 500);
      
    }

    if (event instanceof NavigationCancel) {
      
        this.loading = false;
      
    }
    if (event instanceof NavigationError) {
      
        this.loading = false;
      
    }
    
  }

  ngOnDestroy( ) {

    this.routeListener.unsubscribe();

  }
 
}
