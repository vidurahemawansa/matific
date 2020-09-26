import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ModalService } from '../../../services/modal.service';
import { SafePipe } from '../../../pipes/safe.pipe';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  $unsubscribe = new Subject();
  url:any;
  urlSafe:SafeResourceUrl;

  constructor(public activeModal: NgbActiveModal, private modalService:ModalService, private safePipe:SafePipe) {}

  ngOnInit(): void {
    this.getModalData();
  }

  getModalData(){
    this.modalService.getModalPath()
    .pipe(takeUntil(this.$unsubscribe))
    .subscribe(data => {
      this.urlSafe = this.safePipe.transform(data);
    });    
  }

}
