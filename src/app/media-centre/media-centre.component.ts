import { Component, inject, signal, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

type MediaTab = 'release' | 'events';

@Component({
  selector: 'app-media-centre',
  standalone: true,
  templateUrl: './media-centre.component.html',
  styleUrl: './media-centre.component.css'
})
export class MediaCentreComponent implements OnInit, OnDestroy {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private paramSub?: any;

  tab = signal<MediaTab>('release');

  ngOnInit() {
    this.paramSub = this.route.paramMap.subscribe(params => {
      const urlTab = params.get('tab');
      if (urlTab && this.isValidTab(urlTab)) {
        this.tab.set(urlTab as MediaTab);
      } else if (urlTab) {
        this.router.navigateByUrl('/media-centre/release', { replaceUrl: true });
      } else {
        this.tab.set('release');
      }
    });
  }

  ngOnDestroy() {
    this.paramSub?.unsubscribe();
  }

  private isValidTab(t: string): t is MediaTab {
    return ['release', 'events'].includes(t);
  }

  release = [
    { date: 'June 2, 2026',   headline: 'AIMAX Berhad Annual General Meeting Highlights',   source: 'The Edge Malaysia',    img: 'assets/images/MEDIA.png' },
    { date: 'May 18, 2026',   headline: 'AIMAX Healthcare Expands Distribution Across ASEAN', source: 'New Straits Times', img: 'assets/images/HEALTHCARE.png' },
    { date: 'April 22, 2026', headline: 'AIMAX Q1 FY2026 Results Briefing',               source: 'The Star',           img: 'assets/images/FINANCIAL.png' },
    { date: 'March 10, 2026', headline: 'AIMAX Named Top Glove Exporter of the Year',      source: 'mStar',             img: 'assets/images/Nitrile Glove.png' },
    { date: 'February 14, 2026', headline: 'AIMAX Coverage in The Edge: Turnaround Story', source: 'The Edge',         img: 'assets/images/INVESTOR.png' },
    { date: 'January 8, 2026',  headline: 'AIMAX Coverage in NST: Healthcare Push',         source: 'New Straits Times', img: 'assets/images/HEALTHCARE.png' }
  ];

  events = [
    { date: 'August 12, 2026',  headline: 'AIMAX Bursa Malaysia Investor Briefing',    source: 'Bursa Malaysia',    img: 'assets/images/HOMEPAGE-02.png' },
    { date: 'July 5, 2026',     headline: 'AIMAX Sustainability & ESG Forum 2026',    source: 'AIMAX Events',     img: 'assets/images/HOMEPAGE-03.png' },
    { date: 'September 1, 2026', headline: 'AIMAX Corporate Video 2026',              source: 'AIMAX',            img: 'assets/images/HOMEPAGE BANNER.png' },
    { date: 'June 20, 2026',    headline: 'AIMAX Healthcare Manufacturing Tour',      source: 'AIMAX',            img: 'assets/images/HOMEPAGE-01.png' }
  ];

  setTab(t: MediaTab) {
    this.tab.set(t);
    this.router.navigateByUrl(`/media-centre/${t}`);
  }
}
