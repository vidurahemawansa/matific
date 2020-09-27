import { Component, HostListener, OnInit } from '@angular/core';
import { LangService } from '../../services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@HostListener("window:scroll", ['$event'])
export class HeaderComponent implements OnInit {
  activeHeader:boolean = false;
  rtl:boolean=false;
  showMobileMenu:boolean=false;

  constructor(private langService:LangService) { }

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

  changeLan(lang:string){
    if(lang == "en"){
      this.rtl=true;
    }else{
      this.rtl=false;
    }
  }

  openMenu(){
    this.showMobileMenu=true;
  }
  closeMenu(){
    this.showMobileMenu=false;
  }
}
