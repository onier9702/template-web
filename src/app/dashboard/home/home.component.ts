import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../services/images.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    public imagesService: ImagesService
  ) { }

  ngOnInit(): void {
  }

  public openImageModal( path: string ) {
    console.log('passing test: ', path);
    this.imagesService.openImageModalOnService( path );
  }

}
