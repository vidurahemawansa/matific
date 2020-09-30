import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import {LangService} from './services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'matific-test';

  constructor(private langService:LangService, private http: HttpClient) { }
  rtl:boolean=false;
  contents:any;
  $unsubscribe = new Subject();

  ngOnInit(): void {
    this.langService.setLanguage(this.rtl);
    this.getLanguage();    
    this.getContent();
  }

  getLanguage(){
    this.langService.getLanguage()
    .subscribe(data => {
      this.rtl=data;
    });
  }

  getContent(){
    this.http.get('./assets/content-en.json')
        .subscribe(data => {
          this.contents = data;
        });
  }
  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

}

