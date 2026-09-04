import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

interface GloveSpec {
  product: 'nitrile' | 'natural' | 'chlorinated';
  heroClass: string;
  eyebrow: string;
  title: string;
  badge: string;
  heroImg: string;
  heroAccent: string;
  specs: Array<{ label: string; value: string }>;
  sizes: Array<{ label: string; width: string }>;
  applications: Array<{ name: string; icon: string }>;
  dimensions: Array<{ length: string; rows: Array<{ weight: string; cuff: string; palm: string; finger: string }> }>;
  properties: Array<{ label: string; value: string }>;
  colors: Array<{ name: string; swatch: string }>;
}

const PRODUCTS: Record<string, GloveSpec> = {
  nitrile: {
    product: 'nitrile',
    heroClass: 'hero',
    eyebrow: 'Powder Free',
    title: 'Nitrile Examination Glove',
    badge: '100% Synthetic Nitrile Latex',
    heroImg: 'assets/images/NITRILE GLOVES-08.png',
    heroAccent: 'purple',
    specs: [
      { label: 'Dimension', value: 'Nitrile Examination Glove' },
      { label: 'Material', value: '100% Synthetic Nitrile Butadiene Rubber' },
      { label: 'Type', value: 'Powder Free, Non-Sterile' },
      { label: 'Weight Range', value: '3.5g (Available for customization)' },
      { label: 'Design Features', value: 'Ambidextrous, finger or palm textured, beaded cuff' },
      { label: 'Finishing', value: 'Online single chlorinated or offline double chlorinated' },
      { label: 'Packaging', value: '100 Gloves/Dispenser, 10 Dispenser/Case, 1000 Gloves/Case' }
    ],
    sizes: [
      { label: 'XS', width: '75 ± 5mm' },
      { label: 'S', width: '85 ± 5mm' },
      { label: 'M', width: '95 ± 5mm' },
      { label: 'L', width: '105 ± 5mm' },
      { label: 'XL', width: '115 ± 5mm' }
    ],
    colors: [
      { name: 'Regular Blue', swatch: '#2A6BD9' },
      { name: 'Violet Blue', swatch: '#7B3FE4' },
      { name: 'Black', swatch: '#0A0A0A' },
      { name: 'White', swatch: '#FFFFFF' },
      { name: 'Green', swatch: '#1FB6B0' }
    ],
    applications: [
      { name: 'Medical & Healthcare', icon: 'assets/images/Healthcare Icon.png' },
      { name: 'Laboratory', icon: 'assets/images/Laboratory Icon.png' },
      { name: 'Food Handling', icon: 'assets/images/F&B Icon.png' },
      { name: 'First Aid & Emergency Response', icon: 'assets/images/First Aid.png' },
      { name: 'Dental', icon: 'assets/images/Dentist Icon.png' },
      { name: 'Janitorial & Cleaning', icon: 'assets/images/Cleaning Icon.png' },
      { name: 'Automotive Industry', icon: 'assets/images/Automotive Icon.png' },
      { name: 'Salon & Beauty', icon: 'assets/images/Saloon_barber Icon.png' }
    ],
    dimensions: [
      { length: 'Length: min 240mm', rows: [
        { weight: '3.5g', cuff: '0.05', palm: '0.06', finger: '0.09' },
        { weight: '4.5g', cuff: '0.06', palm: '0.08', finger: '0.12' },
        { weight: '5.0g', cuff: '0.06', palm: '0.08', finger: '0.12' },
        { weight: '6.8g', cuff: '0.10', palm: '0.12', finger: '0.14' }
      ] },
      { length: 'Length: min 290mm', rows: [
        { weight: '5.5g', cuff: '0.08', palm: '0.09', finger: '0.12' }
      ] }
    ],
    properties: [
      { label: 'Force Break', value: 'Min 6.0 N' },
      { label: 'Elongation at Break', value: 'Min 500% (before aged)' },
      { label: 'Tensile Strength', value: 'Min 14MPa (before aged)' }
    ]
  },
  natural: {
    product: 'natural',
    heroClass: 'hero hero--teal',
    eyebrow: 'Powder Free',
    title: 'Natural Rubber Polymer Latex',
    badge: 'Examination Gloves',
    heroImg: 'assets/images/NITRILE GLOVES-09.png',
    heroAccent: 'teal',
    specs: [
      { label: 'Dimension', value: 'Natural Latex Examination Glove' },
      { label: 'Material', value: 'Natural High Grade Rubber Latex' },
      { label: 'Type', value: 'Powder Free, Non-Sterile' },
      { label: 'Weight Range', value: '3.5g (Available for customization)' },
      { label: 'Design Features', value: 'Ambidextrous, finger or palm textured, beaded cuff' },
      { label: 'Finishing', value: 'Online single polymer coated / offline double polymer coated' },
      { label: 'Packaging', value: '100 Gloves/Dispenser, 10 Dispenser/Case, 1000 Gloves/Case' }
    ],
    sizes: [
      { label: 'XS', width: '75 ± 5mm' },
      { label: 'S', width: '85 ± 5mm' },
      { label: 'M', width: '95 ± 5mm' },
      { label: 'L', width: '105 ± 5mm' },
      { label: 'XL', width: '115 ± 5mm' }
    ],
    colors: [
      { name: 'Natural / Off-White', swatch: '#F5EFE0' }
    ],
    applications: [
      { name: 'Healthcare', icon: 'assets/images/Healthcare 2 Icon.png' },
      { name: 'Laboratory', icon: 'assets/images/Lab Icon.png' },
      { name: 'Food Industry', icon: 'assets/images/F&B 2 Icon.png' },
      { name: 'Dental', icon: 'assets/images/Dentist 2 Icon.png' },
      { name: 'General Use', icon: 'assets/images/General Use Icon.png' },
      { name: 'Cleaning & Maintenance', icon: 'assets/images/Cleaning Icon.png' }
    ],
    dimensions: [
      { length: 'Length: min 240mm', rows: [
        { weight: '5.0g', cuff: '0.07', palm: '0.09', finger: '0.10' },
        { weight: '5.5g', cuff: '0.08', palm: '0.09', finger: '0.10' },
        { weight: '6.0g', cuff: '0.08', palm: '0.11', finger: '0.12' },
        { weight: '6.5g', cuff: '0.08', palm: '0.11', finger: '0.12' }
      ] },
      { length: 'Length: min 290mm', rows: [
        { weight: '8.0g', cuff: '0.08', palm: '0.11', finger: '0.13' },
        { weight: '8.5g', cuff: '0.08', palm: '0.11', finger: '0.13' }
      ] }
    ],
    properties: [
      { label: 'Force Break', value: 'Min 6.0 N' },
      { label: 'Elongation at Break', value: 'Min 650% (before aged)' },
      { label: 'Tensile Strength', value: 'Min 18MPa (before aged)' }
    ]
  },
  chlorinated: {
    product: 'chlorinated',
    heroClass: 'hero hero--teal',
    eyebrow: 'Powder Free',
    title: 'Natural Rubber Chlorinated Latex',
    badge: 'Examination Gloves',
    heroImg: 'assets/images/Chlorinated Latex Glove.png',
    heroAccent: 'teal',
    specs: [
      { label: 'Dimension', value: 'Natural Latex Examination Glove' },
      { label: 'Material', value: 'Natural High Grade Rubber Latex' },
      { label: 'Type', value: 'Powder Free, Non-Sterile' },
      { label: 'Weight Range', value: '3.5g (Available for customization)' },
      { label: 'Design Features', value: 'Ambidextrous, finger or palm textured, beaded cuff' },
      { label: 'Finishing', value: 'Online single chlorinated' },
      { label: 'Packaging', value: '100 Gloves/Dispenser, 10 Dispenser/Case, 1000 Gloves/Case' }
    ],
    sizes: [
      { label: 'XS', width: '75 ± 5mm' },
      { label: 'S', width: '85 ± 5mm' },
      { label: 'M', width: '95 ± 5mm' },
      { label: 'L', width: '105 ± 5mm' },
      { label: 'XL', width: '115 ± 5mm' }
    ],
    colors: [
      { name: 'Natural / Off-White', swatch: '#F5EFE0' }
    ],
    applications: [
      { name: 'Healthcare', icon: 'assets/images/Healthcare 2 Icon.png' },
      { name: 'Laboratory', icon: 'assets/images/Lab Icon.png' },
      { name: 'Food Industry', icon: 'assets/images/F&B 2 Icon.png' },
      { name: 'Dental', icon: 'assets/images/Dentist 2 Icon.png' },
      { name: 'General Use', icon: 'assets/images/General Use 2 Icon.png' },
      { name: 'Cleaning & Maintenance', icon: 'assets/images/Cleaning Icon.png' }
    ],
    dimensions: [
      { length: 'Length: min 240mm', rows: [
        { weight: '5.0g', cuff: '0.07', palm: '0.09', finger: '0.10' },
        { weight: '5.5g', cuff: '0.08', palm: '0.09', finger: '0.10' },
        { weight: '6.0g', cuff: '0.08', palm: '0.11', finger: '0.12' },
        { weight: '6.5g', cuff: '0.08', palm: '0.11', finger: '0.12' }
      ] }
    ],
    properties: [
      { label: 'Force Break', value: 'Min 6.0 N' },
      { label: 'Elongation at Break', value: 'Min 650% (before aged)' },
      { label: 'Tensile Strength', value: 'Min 18MPa (before aged)' }
    ]
  }
};

@Component({
  selector: 'app-glove-product',
  standalone: true,
  templateUrl: './glove-product.component.html',
  styleUrl: './glove-product.component.css'
})
export class GloveProductComponent {
  private route = inject(ActivatedRoute);
  private data = toSignal(this.route.data, { initialValue: { product: 'nitrile' } as Record<string, string> });
  product = computed<GloveSpec>(() => PRODUCTS[this.data()['product']] ?? PRODUCTS['nitrile']);
}
