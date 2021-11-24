import { FormService } from './form.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  emailLoginFormControl = new FormControl('', [Validators.required, Validators.email]);
  emailLogonFormControl = new FormControl('', [Validators.required, Validators.email]);
  matcher = new MyErrorStateMatcher();

  passwordLoginFormControl = new FormControl('', [Validators.required]);
  passwordLogonFormControl = new FormControl('', [Validators.required]);
  
  hideLogin = true;
  hideLogon = true;

  constructor( private _formService: FormService ) { }

  ngOnInit(): void {
    setTimeout(()=>{ this._formService.defineAppearence(); }, 1);
  }

  readjustAppearance() {
    this._formService.defineAppearence();
    setTimeout(()=>{ this._formService.defineAppearence(); }, 500);
    setTimeout(()=>{ this._formService.defineAppearence(); }, 530);
  }
}