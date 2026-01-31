import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
  socialLinks = [
    {
      name: 'LinkedIn',
      url: 'http://www.linkedin.com/in/shubham-thombare-2ab7b81b6',
      alt: 'LinkedIn'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/thombare-shubham',
      alt: 'GitHub'
    },
    {
      name: 'Contact',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSeGN0RIGYGD8y94d_X04rSr6qxxotYcw8xeDV6OxX-GJPkwPw/viewform?usp=sf_link',
      alt: 'Contact Form'
    }
  ];
}
