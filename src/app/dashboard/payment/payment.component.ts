import { Component, OnInit } from '@angular/core';
import { DataEnum, InfoService } from '../services/info.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {

  constructor(private infoSevice: InfoService) { }

  ngOnInit(): void {
  }

  openInfoPayment(i: number) {
    this.infoSevice.openInfoModalOnService(i, DataEnum.PaymentInfo);
  }

}
