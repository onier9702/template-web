import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  supportLanguages = ['en', 'es'];

  constructor(private translateService: TranslateService) {
    // Languages
    this.translateService.addLangs( this.supportLanguages );
  }

  // To Change Language
  public selectLang( flag: string ): void {
    let lang: string;
    lang = (flag.includes('fi-us')) ? 'en' : 'es';
    this.translateService.use( lang );
  }

  public saveLanguageOnLocalStorage(resp: string): void {
    const cutArr = resp.split('-');
    const lang: string = ( cutArr[1] === 'us' ) ? 'en' : 'es';        
    localStorage.setItem('my_web_language', lang);
  }
}
