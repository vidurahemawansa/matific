import { Injectable } from '@angular/core';
import { Observable, throwError, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalDetails = new BehaviorSubject({})// to store data which is using another component

  constructor() { }

  setModalPath(path:string){
    this.modalDetails.next(path);
  }
  getModalPath(){
    return this.modalDetails.asObservable();
  }
}
