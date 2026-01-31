import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      company: 'Tata Institute of Fundamental Research (TIFR), Mumbai',
      role: 'Project Scientific Officer(C)',
      period: 'Jan 2024 - Present',
      subtitle: 'Java Full-Stack Developer',
      description: [
        'Built production-ready secrets management solution using Spring Boot and Hashicorp Vault, AppRole authentication with automated token lifecycle management, versioned secrets storage, role-based access policies.',
        'Worked as lead developer on migration of a portal for maintaining researchers data from JSP to Angular, Spring boot.',
        'Designed and implemented a ticketing system with Angular + Spring Boot, reducing resolution time by 25%. Integrated OAuth2 with JWT authentication & caching, improving security and retrieval speed by 20%',
        'Implemented Bucket4j rate-limiting for REST APIs, cutting unauthorized access by 35% in an existing web application used for managing the workflow of the institute.',
        'Automated templated email notifications, saving 10 hrs/week.',
        'Built financial module features (accounting, pension, payroll) and enhanced reporting using JasperReports.',
        'Developed a centralized access management system with role-based access across multiple centers.',
        'Implemented RSA encryption/decryption modules for secure data handling.'
      ],
      technologies: ['Angular', 'Java', 'Spring Boot', 'Oracle SQL', 'Docker', 'Jasper Reports'],
      image: '/img/avi-richards-Z3ownETsdNQ-unsplash.jpg',
      icon: '/icons/java.svg'
    },
    {
      id: 2,
      company: 'Infosys limited',
      role: 'Senior Systems Engineer',
      period: 'Sep 2021 - Jun 2024',
      subtitle: 'Java/SpringBoot Developer & Magento Developer',
      description: [
        'Resolved IBM MQ logging issues by optimizing WebLogic/JMS configs (accuracy +30%).',
        'Fixed telecom module mismatches, reducing order errors by 15%.',
        'Migrated Log4j1 → Log4j2, mitigating security vulnerabilities.',
        'Automated tasks via shell scripting, cutting manual interventions by 20%.',
        'Managed deployments during tech refresh, ensuring 100% uptime.',
        'Developed Azure-authenticated Redis cache components, reducing data retrieval time by 18%.',
        'Enhanced application functionality, boosting system responsiveness by 15%.',
        'Optimized Magento components for a US e-commerce client, increasing site engagement by 10%.'
      ],
      technologies: ['Java', 'Spring Boot', 'Microservices', 'Oracle SQL', 'Magento', 'PHP'],
      image: '/img/avi-richards-Z3ownETsdNQ-unsplash.jpg',
      icon: '/icons/angular.svg'
    },
    {
      id: 3,
      company: 'GitHub Projects',
      role: 'Open Source Contributor',
      period: 'Ongoing',
      subtitle: 'Web Development & Other Projects',
      description: [
        'Actively developing web applications using modern technologies.',
        'Contributing to open-source projects and sharing knowledge with the community.',
        'Exploring new frameworks and technologies to stay updated with industry standards.'
      ],
      technologies: ['TypeScript', 'React', 'Node.js', 'Python', 'GraphQL'],
      image: '/img/octavian-dan-b21Ty33CqVs-unsplash.jpg',
      link: 'https://github.com/thombare-shubham',
      icon: '/icons/github-icon.svg'
    }
  ];
}
