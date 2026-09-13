import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manufacturing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manufacturing.component.html',
  styleUrl: './manufacturing.component.css'
})
export class ManufacturingComponent {
  activeTab = signal('nitrile');

  setTab(tab: string) { this.activeTab.set(tab); }

  nitrile = {
    length240: [
      { weight: '3.5g', cuff: 0.05, palm: 0.06, finger: 0.09 },
      { weight: '4.5g', cuff: 0.06, palm: 0.08, finger: 0.12 },
      { weight: '5.0g', cuff: 0.06, palm: 0.08, finger: 0.12 },
      { weight: '6.8g', cuff: 0.10, palm: 0.12, finger: 0.14 },
    ],
    length290: [
      { weight: '5.5g', cuff: 0.08, palm: 0.09, finger: 0.12 },
    ],
    applications: [
      { label: 'Medical & Healthcare', img: 'assets/images/Healthcare 2 Icon.png' },
      { label: 'Laboratory', img: 'assets/images/Lab Icon.png' },
      { label: 'Food Handling', img: 'assets/images/F&B Icon.png' },
      { label: 'First Aid and Emergency Response', img: 'assets/images/First Aid.png' },
      { label: 'Dental', img: 'assets/images/Dentist Icon.png' },
      { label: 'Janitorial & Cleaning Services', img: 'assets/images/General Use 2 Icon.png' },
      { label: 'Automotive Industry', img: 'assets/images/Automotive Icon.png' },
      { label: 'Saloon and Beauty Industry', img: 'assets/images/Saloon_barber Icon.png' },
    ]
  };

  natural = {
    length240: [
      { weight: '5.0g', cuff: 0.07, palm: 0.09, finger: '0.10' },
      { weight: '5.5g', cuff: 0.08, palm: 0.09, finger: '0.10'},
      { weight: '6.0g', cuff: 0.08, palm: 0.11, finger: '0.12' },
      { weight: '6.5g', cuff: 0.08, palm: 0.11, finger: '0.12' },
    ],
    length290: [
      { weight: '8.0g', cuff: 0.08, palm: 0.11, finger: 0.13 },
      { weight: '8.5g', cuff: 0.08, palm: 0.11, finger: 0.13 },
    ],
    applications: [
      { label: 'Healthcare', img: 'assets/images/Healthcare 2 Icon.png' },
      { label: 'Laboratory', img: 'assets/images/Lab Icon.png' },
      { label: 'Food Handling', img: 'assets/images/F&B Icon.png' },
      { label: 'Dental', img: 'assets/images/Dentist Icon.png' },
      { label: 'General Use', img: 'assets/images/General Use 2 Icon.png' },
      { label: 'Cleaning and Maintenance Purposes', img: 'assets/images/Cleaning 2 Icon.png' },
    ]
  };

  chlorinated = {
    length240: [
      { weight: '5.0g', cuff: 0.07, palm: 0.09, finger: '0.10' },
      { weight: '5.5g', cuff: 0.08, palm: 0.09, finger: '0.10' },
      { weight: '6.0g', cuff: 0.08, palm: 0.11, finger: '0.12' },
      { weight: '6.5g', cuff: 0.08, palm: 0.11, finger: '0.12' },
    ],
    length290: [
      { weight: '8.0g', cuff: 0.08, palm: 0.11, finger: 0.13 },
      { weight: '8.5g', cuff: 0.08, palm: 0.11, finger: 0.13 },
    ],
    applications: [
      { label: 'Healthcare', img: 'assets/images/Healthcare 2 Icon.png' },
      { label: 'Laboratory', img: 'assets/images/Lab Icon.png' },
      { label: 'Food Industry', img: 'assets/images/F&B Icon.png' },
      { label: 'Dental', img: 'assets/images/Dentist Icon.png' },
      { label: 'General Use', img: 'assets/images/General Use 2 Icon.png' },
      { label: 'Cleaning and Maintenance Purposes', img: 'assets/images/Cleaning 2 Icon.png' },
    ]
  };
}
