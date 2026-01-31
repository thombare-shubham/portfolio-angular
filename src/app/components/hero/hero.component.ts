import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  leafIndices = Array.from({ length: 10 }, (_, i) => i + 1);
  profileImage = 'assets/images/1DSC_5950.jpg';
}
