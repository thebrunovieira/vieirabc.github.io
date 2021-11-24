import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from 'src/app/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu:boolean = false;
  btn:string = "menu";

  top = '-100%';

  constructor( private _scrollService: ScrollService ) { }

  @HostListener("window:resize", []) onWindowScroll() {
    if (window.innerWidth > 720) {
      this.top = '0';
    } else {
      this.top = "-100%"
      this.btn = "menu"
      this.menu = false;  
    }
  }

  ngOnInit(): void {
  }

  open() {
    this.menu = !this.menu;

    this.btn = this.menu ? "close" : "menu";
    this.top = this.menu ? '0' : '-100%';
  }

  scrollTo(element: string) {
    this._scrollService.movingTo(element);
  }

}
