import { Component, OnInit } from '@angular/core';
// import { MenuService } from '../../shared/services/menu.service';
import { ImagesService } from '../services/images.service';

interface MyData {
  title: string;
  link: string;
  icon?: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public data: MyData[] = [
    { title: 'app.contact.email', link: 'onier0217@gmail.com', icon: 'bi bi-envelope-at-fill' },
    { title: 'app.contact.phone', link: '+506 89635520', icon: 'bi bi-telephone-outbound-fill' },
  ]

  constructor(
    public imagesService: ImagesService
  ) {
    // this.menuService.isContactPage = true;
  }

  ngOnInit(): void {
  }

  openImageModal(path: string) {
    this.imagesService.openImageModalOnService(path);
  }

  openCV() {
    this.imagesService.openImageModalOnService( 'imgs/person/my_CV.png', false );
  }

}
