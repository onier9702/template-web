import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material/dialog';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LargeNavbarComponent } from './components/large-navbar/large-navbar.component';
import { DropdownOptionsComponent } from './components/dropdown-options/dropdown-options.component';
import { ModalListComponent } from './components/modal-list/modal-list.component';
import { TranslateModule } from '@ngx-translate/core';
import { FooterComponent } from './components/footer/footer.component';
import { ModalImageComponent } from './components/modal-image/modal-image.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ModalInfoComponent } from './components/modal-info/modal-info.component';



@NgModule({
  declarations: [
    NavbarComponent,
    LargeNavbarComponent,
    DropdownOptionsComponent,
    ModalListComponent,
    FooterComponent,
    ModalImageComponent,
    CarouselComponent,
    ModalInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ], 
  exports: [
    MatDialogModule,
    NavbarComponent,
    LargeNavbarComponent,
    DropdownOptionsComponent,
    ModalListComponent,
    FooterComponent,
    ModalImageComponent,
    CarouselComponent
  ]
})
export class SharedModule { }
