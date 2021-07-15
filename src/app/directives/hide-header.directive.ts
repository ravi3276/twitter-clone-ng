import { DomController, isPlatform } from '@ionic/angular';
import { AfterViewInit, Directive, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective implements AfterViewInit {
    @Input('appHideHeader') header: any;
    private headerHeight=isPlatform('ios') ?44:56;
    private children: any;
  constructor(private renderer: Renderer2,private domCtrl: DomController) { }

  ngAfterViewInit(): void {
      this.header=this.header.el;
      this.children=this.header.children;

      // console.log(this.header);
      // console.log(this.children);
  }

  @HostListener('ionScroll', ['$event']) onContentScroll($event: any){
    // console.log(event)
      const scrollTop = $event.detail.scrollTop;
    // console.log(scrollTop)

      let newPosition = -scrollTop;
    // console.log(newPosition)

      if(newPosition < -this.headerHeight){
        newPosition = -this.headerHeight;
      }

      let newOpacity = 1-(newPosition / -this.headerHeight);
        // console.log(newOpacity)
      this.domCtrl.write(()=>{
          this.renderer.setStyle(this.header,'top',newPosition+'px');
          for(let c of this.children){
            console.log(c)
            this.renderer.setStyle(c,'opacity',newOpacity);
          }
      })
  }
}
