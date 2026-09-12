import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MediaTabService {
  /** Set this from the header to pre-select a tab when navigating to /media-centre */
  requested = signal<'release' | 'coverage' | 'events' | 'video' | null>(null);

  set(tab: 'release' | 'coverage' | 'events' | 'video' | null) {
    this.requested.set(tab);
  }
}
