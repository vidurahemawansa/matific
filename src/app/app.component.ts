import { Component, OnInit, OnDestroy } from '@angular/core';
import {LangService} from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'matific-test';

  constructor(private langService:LangService) { }
  rtl:boolean=false;

  ngOnInit(): void {
    this.langService.getLanguage()
      .subscribe(data => {
        this.rtl=data;
        console.log(this.rtl);
      });
  }
}

