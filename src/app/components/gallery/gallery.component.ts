import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { from, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from '../../services/api.service';
import { CarouselModule } from 'primeng/carousel';
import { ModalService } from '../../services/modal.service';
import { VideoComponent } from '../modals/video/video.component';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit, OnDestroy {
  $unsubscribe = new Subject();
  showSpinner: Boolean;
  rtl: boolean = false;
  contents: any;
  galleries: any;
  responsiveOptions;

  constructor(private api: ApiService, private modalService: NgbModal, private videoModalService: ModalService, private langService: LangService) {

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
    this.showSpinner=true;
    this.api.getGallery()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(data => {
        this.galleries = data;
        this.langService.getLanguage()
          .pipe(takeUntil(this.$unsubscribe))
          .subscribe(data => {
            this.rtl = data;
            this.langService.getContent()
              .pipe(takeUntil(this.$unsubscribe))
              .subscribe(data => {
                this.showSpinner=false;
                this.contents = data;
              });
          });

      });
  }
  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
  openModal(path: string) {
    this.videoModalService.setModalPath(path);
    const modalRef = this.modalService.open(VideoComponent);
  }

}
