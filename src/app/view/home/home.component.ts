import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  subtitle = {
    text: '',
    next: 'Ilustrador e Desenvolvedor Front-End.'
  }

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>{this.write()}, 2000)
  }

  write() {
    let aux = this.subtitle.next.split('');
    this.subtitle.text = '';

    aux.forEach((letter, i)=>{
      setTimeout(()=>{
        this.subtitle.text += letter;
      }, 75 * i);
    })
  }

}
