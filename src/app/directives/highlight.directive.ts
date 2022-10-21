import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elm: ElementRef) {
  }

  ngOnInit() {
    this.elm.nativeElement.classList.add('font-bold', 'text-2xl', 'text-dark')
  }
}

