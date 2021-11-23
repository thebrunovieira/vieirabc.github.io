import { Component, OnInit } from '@angular/core';
import { ScrollService } from '../header/scroll.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor( private _scrollService: ScrollService ) { }

  ngOnInit(): void {
  }

  scrollTo(element: string) {
    this._scrollService.movingTo(element);
  }

}
