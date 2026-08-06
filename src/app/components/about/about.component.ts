import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/docs/ShubhamThombareResume.pdf';
    link.download = 'ShubhamThombareResume.pdf';
    link.click();
  }

  openResume() {
    window.open('assets/docs/ShubhamThombareResume.pdf', '_blank');
  }
  aboutData = {
    title: 'About',
    subtitle: 'Me',
    profession: 'Research-Oriented Software Engineer @ TIFR | AI for Finance',
    description: `Project Scientific Officer at TIFR architecting high-performance systems with Java/Spring Boot and Microservices for low-latency scientific research, handling 10K+ concurrent requests. Deep expertise in high-scale systems, deep learning in finance, and behavioural economics. Specializing in scalable infrastructure, intelligent decision systems, and human-centred AI for financial applications. Focused on building responsible AI tools that connect economics, behaviour, and real-world finance. Seeking high-impact opportunities in applied AI, fintech, and research-driven financial systems.`,
    corePillars: [
      { name: 'High-Scale Systems', description: 'Architecting robust, scalable, and high-performance systems for real-world impact.' },
      { name: 'Deep Learning in Finance', description: 'Exploring AI-driven approaches for financial intelligence and decision support.' },
      { name: 'Behavioural Economics & Decision Science', description: 'Understanding behaviour and cognition to design more human-centred intelligent systems.' }
    ],
    researchInterests: [
      'Deep Learning for Finance',
      'Behavioural Economics',
      'Human-Centred AI',
      'Decision Intelligence',
      'Responsible AI in Financial Systems'
    ],
    targetOpportunities: [
      'Applied AI & Machine Learning',
      'Fintech Product Engineering',
      'Behavioural Finance',
      'Financial AI Platforms',
      'Decision Systems for Finance'
    ],
    skillCategories: [
      { label: 'Backend:', value: 'Java (21), Spring Boot, Spring AI, Hibernate, Microservices, REST APIs, OAuth2, JWT', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>' },
      { label: 'AI & Fintech Stack:', value: 'Machine Learning Pipelines, Financial Platforms, Rate-Limiting, Secure APIs', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>' },
      { label: 'Frontend:', value: 'Angular, TypeScript, JavaScript (ES6+), HTML, CSS, Bootstrap', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>' },
      { label: 'Databases:', value: 'Oracle, PostgreSQL, Redis', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>' },
      { label: 'DevOps & Tools:', value: 'Docker, Jenkins, Git, GitHub/GitLab, Maven, IBM MQ, JasperReports', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>' },
      { label: 'Cloud:', value: 'Microsoft Azure (AZ-900 certified)', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>' },
      { label: 'Other:', value: 'GraphQL, Shell Scripting, DSA, JUnit Testing, Log4j2, Maven, Jasper Report, Putty, MobaXterm, WinSCP, Shell Script, IBM MQ, Canva', icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>' },
    ],
    certifications: [
      { name: 'AZ-900: Azure Fundamentals', issuer: 'Microsoft', year: '2023' }
    ],
    imageUrl: 'assets/images/1DSC_5950.jpg'
  };
}
