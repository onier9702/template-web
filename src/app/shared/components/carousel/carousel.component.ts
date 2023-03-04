import { Component, Input, OnInit } from '@angular/core';

interface DataCarousel {
  path: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() data!: DataCarousel[];
  @Input() widthMainDiv!: string;

  public dataImages: DataCarousel[] = [];
  public arrChecks: number[] = [];
  public arrValidClass: string[] = [ 'w-0', 'w-1', 'w-2', 'w-3', 'w-4', 'w-5' ];
  public lastClass: string = 'w-0';
  public lastBgClass: string = 'circle_0';
  public numberImages!: number;

  constructor() {}

  ngOnInit(): void {
    // console.log('Data OnInit: ', this.data);
    for (let i = 0; i < this.data.length; i ++) {
      this.dataImages.push({ path: '../../../../assets/' + this.data[i].path });
      this.arrChecks.push(i);
    }
  
  }

  moveSlider(item: number) {
    const classToAdd = this.arrValidClass.find( c => c.includes(item.toString()) ) || 'w-0';
    const firstElemRef = document.getElementById('0');
    // first delete class from last orange circle
    const bgElemRefLast = document.getElementById(this.lastBgClass);
    bgElemRefLast?.classList.remove('bg');
    // then add orange class circle
    const bgElemRef = document.getElementById(`circle_${item.toString()}`);
    
    // img
    firstElemRef?.classList.remove( this.lastClass );
    firstElemRef?.classList.add( classToAdd );
    // check
    bgElemRef?.classList.add('bg');
    this.lastClass = classToAdd;
    this.lastBgClass = `circle_${item.toString()}`;
  }

}
