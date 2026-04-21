import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomAttribute]',
})
export class CustomAttribute {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() color: string = "yellow";

  @HostListener('mouseenter')
  mouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'color');
  }
}
