import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  
  public condition!: any; // navbar is close, in true navbar is open
  public newValue: BehaviorSubject<boolean> = new BehaviorSubject(this.condition);

  constructor() { }
 
  public flags: string[] = [
    "fi fi-us", "fi fi-ea"
  ];

  public menu: any[] = [
    {
      title: 'app.menu.home',
      icon: 'mdi mdi-gauge',
      url: '/dashboard/home'
    },
    {
      title: 'app.menu.websites',
      icon: 'mdi mdi-folder-lock-open',
      url: '/dashboard/websites'
    },
    {
      title: 'app.menu.pricing',
      icon: 'mdi mdi-folder-lock-open',
      url: '/dashboard/pricing'
    },
    {
      title: 'app.menu.payment',
      icon: 'mdi mdi-folder-lock-open',
      url: '/dashboard/payment'
    },
    {
      title: 'app.menu.help',
      icon: 'mdi mdi-folder-lock-open',
      url: '/dashboard/help'
    }
        
  ];

  public closeNavBarStatus(controlVariable: string) {
    if (controlVariable === 'certain' || this.condition) {
      this.newValue.next(true);
      setTimeout(() => {
        this.condition = false;
      }, 300);
    }
  }

  public openNavbarStatus() {
    this.condition = true;
    this.newValue.next(false);
  }




  // emit() {
  //   this.clickEmmiter.next(!this.condition);
  //   this.condition = !this.condition;
  // }

}
