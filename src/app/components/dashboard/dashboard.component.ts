import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { VideoComponent } from '../modals/video/video.component';
import { ModalService } from '../../services/modal.service';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private modalService: NgbModal, private videoModalService:ModalService, private langService: LangService) { }

  $unsubscribe = new Subject();
  rtl: boolean = false;
  contents: any;

  ngOnInit(): void {

    this.langService.getLanguage()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(data => {
        this.rtl = data;
        this.langService.getContent()
          .pipe(takeUntil(this.$unsubscribe))
          .subscribe(data => {
            this.contents=data;
          });
      });

  }
  openModal(path:string) {
    this.videoModalService.setModalPath(path);
    const modalRef = this.modalService.open(VideoComponent);
  }

  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }

}
