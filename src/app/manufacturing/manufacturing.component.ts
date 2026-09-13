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
      { weight: '3.5g', cuff: 85, palm: 95, finger: 13 },
      { weight: '4.0g', cuff: 90, palm: 100, finger: 14 },
      { weight: '4.5g', cuff: 95, palm: 105, finger: 14 },
    ],
    length290: [
      { weight: '3.5g', cuff: 85, palm: 95, finger: 13 },
      { weight: '4.0g', cuff: 90, palm: 100, finger: 14 },
      { weight: '4.5g', cuff: 95, palm: 105, finger: 14 },
    ],
    applications: [
      { label: 'Medical Examination', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Laboratory', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Industrial', img: 'assets/images/Automotive Icon.png' },
      { label: 'Food Handling', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Cleanroom', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Dental', img: 'assets/images/Laboratory Icon.png' },
    ]
  };

  natural = {
    length240: [
      { weight: '3.5g', cuff: 85, palm: 95, finger: 13 },
      { weight: '4.0g', cuff: 90, palm: 100, finger: 14 },
      { weight: '4.5g', cuff: 95, palm: 105, finger: 14 },
    ],
    length290: [
      { weight: '3.5g', cuff: 85, palm: 95, finger: 13 },
      { weight: '4.0g', cuff: 90, palm: 100, finger: 14 },
      { weight: '4.5g', cuff: 95, palm: 105, finger: 14 },
    ],
    applications: [
      { label: 'Medical Examination', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Laboratory', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Industrial', img: 'assets/images/Automotive Icon.png' },
      { label: 'Food Handling', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Cleanroom', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Dental', img: 'assets/images/Laboratory Icon.png' },
    ]
  };

  chlorinated = {
    length240: [
      { weight: '3.5g', cuff: 85, palm: 95, finger: 13 },
      { weight: '4.0g', cuff: 90, palm: 100, finger: 14 },
      { weight: '4.5g', cuff: 95, palm: 105, finger: 14 },
    ],
    length290: [
      { weight: '3.5g', cuff: 85, palm: 95, finger: 13 },
      { weight: '4.0g', cuff: 90, palm: 100, finger: 14 },
      { weight: '4.5g', cuff: 95, palm: 105, finger: 14 },
    ],
    applications: [
      { label: 'Medical Examination', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Laboratory', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Industrial', img: 'assets/images/Automotive Icon.png' },
      { label: 'Food Handling', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Cleanroom', img: 'assets/images/Laboratory Icon.png' },
      { label: 'Dental', img: 'assets/images/Laboratory Icon.png' },
    ]
  };
}
