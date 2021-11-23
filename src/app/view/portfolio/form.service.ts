import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor() { }

  defineAppearence() {
    document.querySelectorAll('.mat-tab-label-content').forEach((item) => {
      item.setAttribute(
        'style',
        "color: #0f468c;" +
        "font-family: 'Courier New', Courier, monospace;" +
        "font-size: 1rem;" +
        "font-weight: 700"
      );
    });
    document.querySelectorAll('.mat-form-field-appearance-outline .mat-form-field-outline-thick').forEach((item) => {
      item.setAttribute('style', "color: #0f468c");
    });
    document.querySelectorAll('.mat-form-field-label').forEach((item) => {
      item.setAttribute(
        'style',
        "font-family: 'Courier New', Courier, monospace;"
      );
    });
    document.querySelectorAll('mat-label').forEach((item) => {
      item.setAttribute(
        'style',
        "font-family: 'Courier New', Courier, monospace;" +
        "color: #0f468c"
      );
    });
    document.querySelectorAll('input').forEach((item) => {
      item.setAttribute(
        'style',
        "font-family: 'Courier New', Courier, monospace;" +
        "color: #0f468c"
      );
    });
    document.querySelectorAll('.mat-tab-body-wrapper').forEach((item) => {
      item.setAttribute('style', "width: 100%; height: 100%; display: flex; justify-content: center; align-itens: center");
    });
    document.querySelectorAll('.mat-tab-body-content').forEach((item) => {
      item.setAttribute('style', "height: 100%; display: flex; justify-content: center; align-itens: center")
    });
    document.querySelectorAll('.mat-tab-header-pagination-after').forEach((item) => {
      item.setAttribute('style', "display: none")
    });
    document.querySelectorAll('.mat-error').forEach((item) => {
      item.setAttribute('style', "color: #bb0b0b")
    });
  }
}
