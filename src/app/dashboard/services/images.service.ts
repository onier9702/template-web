import { Injectable, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalImageComponent } from '../../shared/components/modal-image/modal-image.component';

export interface Image {
  path: string;
  fullPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  public images1: Image[] = [
    {
      fullPath: '../../../assets/imgs/websites/template-1_5.png', 
      path: 'imgs/websites/template-1_5.png' 
    },
    // {
    //   fullPath: '../../../assets/imgs/websites/template-2_1.png', 
    //   path: 'imgs/websites/template-2_1.png'
    // },
    // {
    //   fullPath: '../../../assets/imgs/websites/template-2_2.png', 
    //   path: 'imgs/websites/template-2_2.png'
    // },
    {
      fullPath: '../../../assets/imgs/websites/template-2_3.png', 
      path: 'imgs/websites/template-2_3.png'
    },
    {
      fullPath: '../../../assets/imgs/websites/template-2_4.png', 
      path: 'imgs/websites/template-2_4.png'
    },
  ];

  public images2: Image[] = [
    {
      fullPath : '../../../assets/imgs/kind-DB/Database-DB-3.png',
      path: 'imgs/kind-DB/Database-DB-3.png'
    },
    {
      fullPath : '../../../assets/imgs/kind-DB/Database-DB-7.png',
      path: 'imgs/kind-DB/Database-DB-7.png'
    },
    {
      fullPath : '../../../assets/imgs/kind-DB/Database-DB-6.png',
      path: 'imgs/kind-DB/Database-DB-6.png'
    },
    {
      fullPath : '../../../assets/imgs/kind-DB/Database-DB-4.png',
      path: 'imgs/kind-DB/Database-DB-4.png'
    },
    {
      fullPath : '../../../assets/imgs/kind-DB/Database-DB-5.png',
      path: 'imgs/kind-DB/Database-DB-5.png'
    },
  ]

  constructor( private dialog: MatDialog) { }
  
  public openImageModalOnService( path: string, 
      div_close: boolean = true,
      width: string = '380px', 
      maxWidth: string = '500px', 
      minHeight: string = '400px', 
      // height: string = '400px' 
    ) {

    // Mat Dialog solution
    let dialogRef = this.dialog.open( ModalImageComponent, {
      width,
      maxWidth,
      minHeight,
      // height,
      autoFocus: false,
      data: {
        path,
        div_close
      }
    } );

    dialogRef.updatePosition({ top: '100px' });
    // dialogRef.afterClosed().subscribe( resp => {
    //   if ( resp ) { 
        
    //   }
    // })
  }



}
