import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-web';

  supportLanguages = ['en', 'es'];

  constructor( private translateService: TranslateService ) {

    // Languages Settings
    this.translateService.addLangs( this.supportLanguages );
    const lang = localStorage.getItem('my_web_language') || 'en';
    this.translateService.setDefaultLang(lang);

  }

}
