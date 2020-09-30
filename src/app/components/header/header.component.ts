import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LangService } from '../../services/lang.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
@HostListener("window:scroll", ['$event'])
export class HeaderComponent implements OnInit {
  activeHeader: boolean = false;
  rtl: boolean = false;
  contents: any;
  menuItems: any;
  showMobileMenu: boolean = false;
  $unsubscribe = new Subject();
  showSpinner: Boolean;

  constructor(private langService: LangService, private api: ApiService) { }

  ngOnInit(): void {
    this.showSpinner=true;
    this.langService.getLanguage()
      .pipe(takeUntil(this.$unsubscribe))
      .subscribe(data => {
        this.rtl = data;
        this.langService.getContent()
          .pipe(takeUntil(this.$unsubscribe))
          .subscribe(data => {
            this.contents=data;
            this.menuItems=this.contents.menu;
            this.showSpinner=false;
          });

      });
  }
  onWindowScroll($event) {
    var verticalOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (verticalOffset > 50) {
      this.activeHeader = true;
    } else {
      this.activeHeader = false;
    }
  }

  changeLan(lang: string) {

    if (lang == "en") {
      this.rtl = true;
    } else {
      this.rtl = false;
    }
    this.langService.setLanguage(this.rtl);
  }

  openMenu() {
    this.showMobileMenu = true;
  }
  closeMenu() {
    this.showMobileMenu = false;
  }
  ngOnDestroy() {
    this.$unsubscribe.next();
    this.$unsubscribe.complete();
  }
}
