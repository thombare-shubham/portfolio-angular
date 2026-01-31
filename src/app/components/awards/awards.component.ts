import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.scss'
})
export class AwardsComponent implements AfterViewInit {
  @ViewChild('awardsTrack') awardsTrack!: ElementRef;
  @ViewChild('carouselWrapper') carouselWrapper!: ElementRef;
  
  shouldAnimate = false;

  awards = [
    {
      id: 1,
      title: 'Rise Insta Award',
      issuer: 'Infosys limited',
      date: 'December 2023',
      description: 'Awarded recognition for identifying and resolving a long-standing issue within the clients billing module, significantly enhancing system functionality and overall client satisfaction.'
    }
  ];

  ngAfterViewInit() {
    this.checkIfScrollNeeded();
    window.addEventListener('resize', () => this.checkIfScrollNeeded());
  }

  checkIfScrollNeeded() {
    if (this.awardsTrack && this.carouselWrapper) {
      const trackWidth = this.awardsTrack.nativeElement.scrollWidth;
      const wrapperWidth = this.carouselWrapper.nativeElement.clientWidth;
      this.shouldAnimate = trackWidth > wrapperWidth;
    }
  }
}
