import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LanguageService } from '../../services/language.service';

export interface DataFlags {
  msg: string;
  flags: string[];
}

@Component({
  selector: 'app-modal-list',
  templateUrl: './modal-list.component.html',
  styleUrls: ['./modal-list.component.scss']
})
export class ModalListComponent implements OnInit {

  public data!: DataFlags;

  constructor( 
    private languageService: LanguageService,
    public dialogRef: MatDialogRef<ModalListComponent>,
    @Inject(MAT_DIALOG_DATA) public dataPassed: DataFlags,

  ) {
    this.data = dataPassed;
  }

  ngOnInit(): void {
  }

  closePopUp( res?: string ) {
    this.dialogRef.close(res); // this close dialog and emit the value was clicked
  }

  changeFlag( flag: string ) {
    this.languageService.selectLang(flag);
    this.closePopUp(flag);
  }

}
