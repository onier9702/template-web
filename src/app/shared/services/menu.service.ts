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
      icon: 'bi bi-house-check-fill',
      color: 'color: #00b4d8; margin-right: 10px', 
      url: '/dashboard/home'
    },
    {
      title: 'app.menu.websites',
      icon: 'bi bi-globe2',
      color: 'color: #00b4d8; margin-right: 10px',
      url: '/dashboard/websites'
    },
    {
      title: 'app.menu.pricing',
      icon: 'bi bi-coin',
      color: 'color: #00b4d8; margin-right: 10px',
      url: '/dashboard/pricing'
    },
    {
      title: 'app.menu.payment',
      icon: 'bi bi-wallet-fill',
      color: 'color: #00b4d8; margin-right: 10px',
      url: '/dashboard/payment'
    },
    {
      title: 'app.menu.help',
      icon: 'bi bi-question-circle-fill',
      color: 'color: #00b4d8; margin-right: 10px',
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
