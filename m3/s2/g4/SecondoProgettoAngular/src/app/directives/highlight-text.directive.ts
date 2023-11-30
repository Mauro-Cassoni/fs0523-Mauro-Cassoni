import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightText]'
})
export class HighlightTextDirective {

  constructor(
    private element:ElementRef
  ) { }

  @Input() colore:string = 'yellow';

ngOnInit(){
  this.element.nativeElement.style.backgroundColor = this.colore;
}
}
