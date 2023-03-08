import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MenuService } from '../../services/menu.service';
import { ModalListComponent } from '../modal-list/modal-list.component';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public menu!: any[];
  // public isActive: boolean = false;
  public currentFlag: string = 'fi fi-us';

  constructor( 
    public menuService: MenuService,
    public languageService: LanguageService,
    private dialog: MatDialog
    ) {
      const lang: string = localStorage.getItem('my_web_language') || 'en';
      this.currentFlag = ( lang === 'en' ) ? 'fi fi-us' : 'fi fi-ea';

      // listening change of navbar status on menuService
      menuService.newValue.subscribe( value => {
        console.log({value});
        (value) ? this.setExitClassMove('close') : this.setExitClassMove('open');
      })
      
    }

  ngOnInit(): void {
    this.menu = this.menuService.menu;
  }

  setExitClassMove( movement: string ): void {
    const elemRef = document.querySelector('#show');
    
    if ( movement === 'open' ) {
      elemRef?.classList.add('move');
    } else {
      elemRef?.classList.remove('move');
    }
  }

  openMenuNavbar() {
    this.menuService.openNavbarStatus();
  }

  // closeMenuNavbar() {
  //   this.setExitClassMove('close');
  // }

  changeLanguage() {

    // Mat Dialog solution
    let dialogRef = this.dialog.open( ModalListComponent, {
      width: '420px',
      height: '220px',
      autoFocus: false,
      data: {
        msg: 'app.menu.lang',
        flags: this.menuService.flags
      }
    } );

    dialogRef.updatePosition({ top: '100px' });
    dialogRef.afterClosed().subscribe( resp => {
      if ( resp ) { // user choose a language
        this.languageService.saveLanguageOnLocalStorage(resp);
        this.currentFlag = resp;
      }
    })

  }

}
