import { Component, OnInit } from '@angular/core';
import {  NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { VideoComponent } from '../modals/video/video.component';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private modalService: NgbModal, private videoModalService:ModalService) { }

  ngOnInit(): void {
  }
  openModal(path:string) {
    this.videoModalService.setModalPath(path);
    const modalRef = this.modalService.open(VideoComponent);
  }

}
