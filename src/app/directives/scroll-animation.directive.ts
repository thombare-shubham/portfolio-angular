import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appScrollAnimation]',
  standalone: true
})
export class ScrollAnimationDirective implements OnInit {
  @Input() appScrollAnimation: string = 'fadeInUp';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.el.nativeElement.classList.add('animate-' + this.appScrollAnimation);
          observer.unobserve(this.el.nativeElement);
        }
      });
    }, {
      threshold: 0.1
    });

    observer.observe(this.el.nativeElement);
  }
}
