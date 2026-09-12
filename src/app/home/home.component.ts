import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  divisions = [
    { slug: 'gloves', title: 'Gloves & NBL Manufacturing', tagline: 'Becoming one of the notable glove makers in the nation', img: 'assets/images/HOMEPAGE-01.png', link: '/businesses/gloves/nitrile' },
    { slug: 'healthcare', title: 'Healthcare', tagline: 'End-to-end integrated healthcare supply chain specialist', img: 'assets/images/HOMEPAGE-02.png', link: '/businesses/healthcare' },
    {slug:'finance',title:'Financial Services',tagline:'Delivering Capable & Reliable Business Financing Solutions',img:'assets/images/HOMEPAGE-03.png',link:'/businesses/financial-services'}
  ];
}
