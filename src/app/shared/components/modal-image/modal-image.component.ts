import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DataDialog {
  path: string;
  div_open: boolean;
}

@Component({
  selector: 'app-modal-image',
  templateUrl: './modal-image.component.html',
  styleUrls: ['./modal-image.component.scss']
})
export class ModalImageComponent implements OnInit {

  public data!: string;
  // public showBtnClose!: boolean;

  constructor(
    public dialogRef: MatDialogRef<ModalImageComponent>,
    @Inject(MAT_DIALOG_DATA) public dataPassed: DataDialog
    ) {
      // this.showBtnClose = dataPassed.div_open;
      this.data = `../../../../assets/${dataPassed.path}`;
      
    }

  ngOnInit(): void {
  }

  closePopUp() {
    this.dialogRef.close();
  }

}
