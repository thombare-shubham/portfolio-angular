import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactItems = [
    {
      title: 'Phone',
      value: '+91 9921471375',
    },
    {
      title: 'Email',
      value: 'shubhamrthombare2@gmail.com',
    },
    {
      title: 'LinkedIn',
      value: 'linkedin.com/in/shubham-thombare',
      link: 'https://www.linkedin.com/in/shubham-thombare-2ab7b81b6/'
    },
    {
      title: 'GitHub',
      value: 'github.com/thombare-shubham',
      link: 'https://github.com/thombare-shubham'
    }
  ];
}
