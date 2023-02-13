import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private translate: TranslateService,
    private router:Router) {
    translate.setDefaultLang('en');
    translate.use('en');
  }
  title = 'sample project';
  useLanguage(language: string): void {
    this.translate.use(language);
}

navigateToCricket() {
  this.router.navigate(['cricket'])
}
navigateToFootball() {
  this.router.navigateByUrl('/football')
}
navigateToTest() {
  this.router.navigateByUrl('/test')
}

}
