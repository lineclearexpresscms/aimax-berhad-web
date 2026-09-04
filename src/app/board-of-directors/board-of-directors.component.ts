import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface DirectorCard { slug: string; name: string; title: string; photo: string; }

@Component({
  selector: 'app-board-of-directors',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './board-of-directors.component.html',
  styleUrl: './board-of-directors.component.css'
})
export class BoardOfDirectorsComponent {
  directors: DirectorCard[] = [
    { slug: 'ng-keok-chai', name: 'Ng Keok Chai', title: 'Independent Non-Executive Chairman', photo: 'assets/images/BOD AIMAX-13.png' },
    { slug: 'yacob-mustafa', name: 'Datuk Dr. Yacob Bin Mustafa', title: 'Chairman Independent Non-Executive Director', photo: 'assets/images/BOD AIMAX-14.png' },
    { slug: 'lester-chin', name: 'Lester Chin Kent Lake', title: 'Executive Director', photo: 'assets/images/BOD AIMAX-15.png' },
    { slug: 'wong-weng-yew', name: 'Wong Weng Yew', title: 'Executive Director', photo: 'assets/images/BOD AIMAX-16.png' },
    { slug: 'yap-kien-ming', name: 'Yap Kien Ming', title: 'Independent Non-Executive Director', photo: 'assets/images/BOD AIMAX-17.png' },
    { slug: 'leong-kam-soon', name: 'Leong Kam Soon', title: 'Independent Non-Executive Director', photo: 'assets/images/BOD AIMAX-18.png' },
    { slug: 'kang-chez-chiang', name: "Dato' Kang Chez Chiang", title: 'Independent Non-Executive Director', photo: 'assets/images/BOD AIMAX-19.png' },
    { slug: 'lim-poh-leng', name: 'Lim Poh Leng', title: 'Independent Non-Executive Director', photo: 'assets/images/BOD AIMAX-20.png' }
  ];
}
