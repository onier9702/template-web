import { Component, OnInit } from '@angular/core';
import { DataEnum, InfoService } from '../services/info.service';

interface Table {
  name: string;
  complexity: string;
  cost: string;
}

interface CarouselImg {
  path: string;
}

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit {

  public dataTable: Table[] = [
    { name: 'app.websites.template', complexity: 'app.pricing.low', cost: '200-400' },
    { name: 'app.websites.database', complexity: 'app.pricing.medium', cost: '400-1000' },
    { name: 'app.websites.big_projects', complexity: 'app.pricing.high', cost: '1000-?' },
  ]

  public arrCarouselImagesTemplate: CarouselImg[] = [
    { path: 'imgs/pricing/price_img_template.png'},
    { path: 'imgs/pricing/price_img_template1.png'},
    { path: 'imgs/pricing/price_img_template2.png'},
    { path: 'imgs/pricing/price_img_db.png'},
    { path: 'imgs/pricing/price_img_db1.png'}
  ]
  public widthVariable: string = `width: ${this.arrCarouselImagesTemplate.length * 100}vw`;

  constructor(private infoService: InfoService) { }

  ngOnInit(): void {
  }

  watchInfo( i: number ) {
    this.infoService.openInfoModalOnService(i, DataEnum.NormalInfo);
  }

  // goToRowNumber(i: number) {
  //   location.hash = `sec_${( i + 1 ).toString()}`;
  // }

}
