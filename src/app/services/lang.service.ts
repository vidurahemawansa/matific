import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private http: HttpClient) { }
  rtl = new BehaviorSubject(false);
  contents: any;
  contentSharable = new BehaviorSubject({});

  setLanguage(status: boolean) {
    this.rtl.next(status);
    this.setContent(status);
  }
  getLanguage() {
    return this.rtl.asObservable();
  }

  setContent(isRtl: boolean) {
    if (isRtl != true) {
      this.http.get('./assets/content-en.json')
        .subscribe(data => {
          this.contents = data;
          this.contentSharable.next(this.contents);
        });
    } else {
      this.http.get('./assets/content-he.json')
        .subscribe(data => {
          this.contents = data;
          this.contentSharable.next(this.contents);
        });
    }

  }

  getContent() {
    return this.contentSharable.asObservable();
  }

}
