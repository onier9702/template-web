import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  // public isContactPage: boolean = false;
 
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




  // emit() {
  //   this.clickEmmiter.next(!this.condition);
  //   this.condition = !this.condition;
  // }

}
