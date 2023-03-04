import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';



@Component({
  selector: 'app-websites',
  templateUrl: './websites.component.html',
  styleUrls: ['./websites.component.scss']
})

export class WebsitesComponent implements OnInit {

  constructor( 
    public imagesService: ImagesService
  ) { }

  ngOnInit(): void {
  }

  public openImageModal( path: string ) {
    this.imagesService.openImageModalOnService( path );
  }

}
