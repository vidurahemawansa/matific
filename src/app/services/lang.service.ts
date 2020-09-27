import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LangService {

  rtl = new BehaviorSubject(false);

  constructor() { }

  setLanguage(status:boolean){
    this.rtl.next(status);
  }
  getLanguage(){
    return this.rtl.asObservable();
  }
}
