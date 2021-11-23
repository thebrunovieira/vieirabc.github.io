import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  code = {
    text: '',
    next: '</>'
  }

  constructor() { }

  ngOnInit(): void {
    this.write();
    setInterval(()=>{ this.write() }, 2000);
  }

  write() {
    let aux = this.code.next.split('');

    aux.forEach((letter, i)=>{
      setTimeout(()=>{
        this.code.text += letter;
      }, 100*i + 100);
    })

    setTimeout(()=>{
      this.code.text = '';
    }, 1500)
  }

}
