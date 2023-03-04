import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoComponent } from '../../shared/components/modal-info/modal-info.component';

interface DataInfo {
  title?: string;
  subtitle?: string;
  text: string;
  price?: string;
}

export enum DataEnum {
  NormalInfo = 'normal',
  PaymentInfo = 'payment',
}

@Injectable({
  providedIn: 'root'
})
export class InfoService {

  public info: DataInfo[] = [
    { title: 'app.websites.template', text: 'app.websites.template_info', price: 'app.pricing.p_first'},
    { title: 'app.websites.database', text: 'app.websites.database_info', price: 'app.pricing.p_second'},
    { title: 'app.websites.big_projects', text: 'app.websites.big_projects_info', price: 'app.pricing.p_third'}
  ];

  public paymentInfo: DataInfo[] = [
    { title: 'app.payment.BTC', subtitle: 'app.payment.cypto_info', text: 'app.payment.BTC_address'},
    { title: 'app.payment.ETH', subtitle: 'app.payment.cypto_info', text: 'app.payment.ETH_address'},
    { title: 'app.payment.TRC20', subtitle: 'app.payment.cypto_info', text: 'app.payment.TRC20_address'},
    { title: 'app.payment.cash', subtitle: 'app.payment.presence', text: 'app.payment.presence_info'},
    { title: 'app.payment.credit_card', text: 'app.payment.credit_card_info'},
    { title: 'app.payment.paypal', subtitle: 'app.payment.cypto_info', text: 'app.payment.paypal_address', price: 'app.payment.my_email'},
  ]

  constructor( private dialog: MatDialog) { }
  
  public openInfoModalOnService( number: number, method: DataEnum ) {

    // Mat Dialog solution
    let dialogRef = this.dialog.open( ModalInfoComponent, {
      width: '300px',
      height: '400px',
      autoFocus: false,
      data: ( method === DataEnum.NormalInfo ) ? this.info[number] : this.paymentInfo[number]
    } );

    dialogRef.updatePosition({ top: '100px' });
    // dialogRef.afterClosed().subscribe( resp => {
    //   if ( resp ) { 
        
    //   }
    // })
  }
}
