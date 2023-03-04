import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DataInfo {
  title?: string;
  subtitle?: string;
  text: string;
  price?: string;
}

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss']
})
export class ModalInfoComponent implements OnInit {

  public data!: DataInfo;

  constructor( 
    public dialogRef: MatDialogRef<ModalInfoComponent>,
    @Inject(MAT_DIALOG_DATA) public dataPassed: DataInfo,

  ) {
    this.data = dataPassed;
  }

  ngOnInit(): void {
  }

  closePopUp( res?: string ) {
    this.dialogRef.close(res); // this close dialog and emit the value was clicked
  }

}
