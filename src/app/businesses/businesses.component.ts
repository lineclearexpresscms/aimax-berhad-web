import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-businesses',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './businesses.component.html',
  styleUrl: './businesses.component.css'
})
export class BusinessesComponent {
  divisions = [
    { slug: 'gloves', title: 'Gloves & NBL Manufacturing', tagline: 'Becoming one of the notable glove makers in the nation', img: 'assets/images/Nitrile Glove.png', link: '/businesses/gloves/nitrile' },
    { slug: 'healthcare', title: 'Healthcare', tagline: 'End-to-end integrated healthcare supply chain specialist', img: 'assets/images/HEALTHCARE.png', link: '/businesses/healthcare' },
    { slug: 'finance', title: 'Financial Services', tagline: 'Delivering capable & reliable business solutions', img: 'assets/images/FINANCIAL.png', link: '/businesses/financial-services' }
  ];
}
