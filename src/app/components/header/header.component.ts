import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@HostListener("window:scroll", ['$event'])
export class HeaderComponent implements OnInit {
  activeHeader:boolean = false;

  constructor() { }

  ngOnInit(): void {
    
  }
  onWindowScroll($event) {
    var verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if(verticalOffset > 50){
      this.activeHeader = true;
    }else{
      this.activeHeader = false;
    }
  }
}
