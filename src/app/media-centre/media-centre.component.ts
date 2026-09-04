import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-media-centre',
  standalone: true,
  templateUrl: './media-centre.component.html',
  styleUrl: './media-centre.component.css'
})
export class MediaCentreComponent {
  tab = signal<'release' | 'events'>('release');

  release = [
    { date: 'June 2, 2026', headline: 'AIMAX Berhad Annual General Meeting Highlights', source: 'The Edge Malaysia', img: 'assets/images/MEDIA.png' },
    { date: 'May 18, 2026', headline: 'AIMAX Healthcare Expands Distribution Across ASEAN', source: 'New Straits Times', img: 'assets/images/HEALTHCARE.png' },
    { date: 'April 22, 2026', headline: 'AIMAX Q1 FY2026 Results Briefing', source: 'The Star', img: 'assets/images/FINANCIAL.png' },
    { date: 'March 10, 2026', headline: 'AIMAX Named Top Glove Exporter of the Year', source: 'mStar', img: 'assets/images/Nitrile Glove.png' }
  ];

  events = [
    { date: 'August 12, 2026', headline: 'AIMAX Bursa Malaysia Investor Briefing', source: 'Bursa Malaysia', img: 'assets/images/HOMEPAGE-02.png' },
    { date: 'July 5, 2026', headline: 'AIMAX Sustainability & ESG Forum 2026', source: 'AIMAX Events', img: 'assets/images/HOMEPAGE-03.png' }
  ];

  setTab(t: 'release' | 'events') { this.tab.set(t); }
}
