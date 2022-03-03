import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective{

  @HostBinding('class.open') isOpen = false;


  // @HostListener('click') mouseclick(eventData: Event){
  //   this.isOpen = !this.isOpen;
  // }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event){
    this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    console.log("it works")
  }

  constructor(private elementRef: ElementRef) {
  }

}
