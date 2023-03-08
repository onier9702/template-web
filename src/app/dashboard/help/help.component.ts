import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
  }

}
