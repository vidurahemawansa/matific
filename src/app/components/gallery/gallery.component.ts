import { Component, OnInit, OnDestroy } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { CarouselModule } from 'primeng/carousel';
import { ModalService } from '../../services/modal.service';
import { VideoComponent } from '../modals/video/video.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  $unsubscribe = new Subject();
  showSpinner: Boolean;

  galleries: any;
  responsiveOptions;

  constructor(private api: ApiService, private modalService: NgbModal, private videoModalService:ModalService) {

    this.responsiveOptions = [
      {
        breakpoint: '1200px',
        numVisible: 4,
        numScroll: 4
      },
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

  }

  ngOnInit(): void {
    this.api.getGallery()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(data => {
        this.galleries = data;
      });
  }
  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
  openModal(path:string) {
    this.videoModalService.setModalPath(path);
    const modalRef = this.modalService.open(VideoComponent);
  }

}
