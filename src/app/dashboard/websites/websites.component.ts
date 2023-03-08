import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';
import { MenuService } from '../../shared/services/menu.service';



@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})

export class WebsitesComponent implements OnInit {

  constructor( 
    public imagesService: ImagesService,
    public menuService: MenuService
  ) { }

  ngOnInit(): void {
  }

  public openImageModal( path: string ) {
    this.imagesService.openImageModalOnService( path );
  }

}
