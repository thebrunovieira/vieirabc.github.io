import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor() { }

  smooth(endY: number, duration: number) {
    const startY = window.scrollY || window.pageYOffset;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== 'undefined' ? duration : 400;

    // Easing function
    const easeInOutQuart = (time: number, from: number, distance: number, duration: number) => {
      if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
      return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
    };

    const timer = setInterval(() => {
      const time = new Date().getTime() - startTime;
      const newY = easeInOutQuart(time, startY, distanceY, duration);
      if (time >= duration) {
        clearInterval(timer);
      }
      window.scroll(0, newY);
    }, 1000 / 60); // 60 fps
  }

  elementHeight(element:string): number {
    const height = document.querySelector(`#${element}`)?.clientHeight;

    if (typeof height == 'number') {
      return height
    } else {
      return 0;
    }
  }

  movingTo(element: string) {
    let about = this.elementHeight('home');
    let portfolio = this.elementHeight('about');
    let contact = this.elementHeight('portfolio');

    if (element == 'home') {
      this.smooth(0, 1000);
    } else if (element == 'about') {
      this.smooth(about, 1000);
    } else if (element == 'portfolio') {
      this.smooth(about + portfolio, 1000)
    } else if (element == 'contact') {
      this.smooth(about + portfolio + contact, 1000);
    }
  }
}
