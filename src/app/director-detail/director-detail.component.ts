import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

interface Director { slug: string; name: string; title: string; photo: string; bioHtml: string; }

const DIRECTORS: Director[] = [
  { slug: 'ng-keok-chai', name: 'Ng Keok Chai', title: 'Independent Non-Executive Chairman',
    photo: 'assets/images/BOD AIMAX-13.png',
    bioHtml: `<p>Mr. Ng Keok Chai began his career as a Police Inspector with the Royal Malaysia Police (PDRM) in 1982, serving in Sarawak for 20 years and rising to the rank of Assistant Superintendent of Police, with experience in CID, General Duty, and Police Field Force.</p>
<p>In 2003 he transferred to the Commercial Crime Investigation Department in West Malaysia, was promoted to Assistant Commissioner of Police in 2016, and retired in 2019 as Principal Assistant Director in the Forensic Accounting Investigation Division (CCID) at Bukit Aman.</p>
<p>His 36-year police career spans legal expertise, specialisation in commercial and general crime, forensic accounting, and special operations experience.</p>` },
  { slug: 'yacob-mustafa', name: 'Datuk Dr. Yacob Bin Mustafa', title: 'Chairman Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-14.png',
    bioHtml: `<p><strong>Datuk Dr. Yacob Bin Mustafa</strong> ("Datuk Dr. Yacob"), C.A(M), FCPA (AUST), CPFA (UK).</p>
<p>Datuk Dr. Yacob had a distinguished career in Malaysia's public finance sector, culminating in his appointment as Accountant General of Malaysia, a position he held until his retirement in August 2023.</p>
<p>He began his career in 1987 and progressively rose through senior roles, including Director of the Central Operation & Agency Services Division, Deputy Accountant General (Operation), and Accountant General from October 2019 to August 2023 — a period during which he spearheaded significant enhancements to the nation's financial management systems.</p>
<p>He also serves on the Audit Committee of Perbadanan Insurans & Deposit Malaysia (PIDM) since 2019, the Finance & Investment Committee of MAIWP since 2022, and the Audit Committee of Razak School of Government since 2023. He was recognised by the Global Accounting Hall of Fame in 2018.</p>` },
  { slug: 'lester-chin', name: 'Lester Chin Kent Lake', title: 'Executive Director',
    photo: 'assets/images/BOD AIMAX-15.png',
    bioHtml: `<p><strong>Mr. Lester Chin Kent Lake</strong> holds a Bachelor of Science in Business from Southern New Hampshire University (2008).</p>
<p>He began his career at RHB Investment Bank as a Management Associate and was subsequently promoted to Assistant Manager. In 2011 he moved to RHB Research Institute as an Equity and Technical Research Analyst, and from 2013 to 2017 served as Head of Retail Research / Senior Analyst at UOB Kay Hian.</p>
<p>From 2017 to 2020 he was Associate Director of Equity Capital Markets at UOB Kay Hian, after which he established his own business following 12+ years in finance.</p>` },
  { slug: 'wong-weng-yew', name: 'Wong Weng Yew', title: 'Executive Director',
    photo: 'assets/images/BOD AIMAX-16.png',
    bioHtml: `<p><strong>Mr. Wong Weng Yew</strong> has more than 10 years of experience in financial audit, internal audit, and information systems audit. He spent a significant part of his career at PricewaterhouseCoopers LLP in Singapore.</p>
<p>He is a Chartered Accountant in both Malaysia and Singapore, a Fellow of the Association of Chartered Certified Accountants (ACCA), and holds the Certified Internal Auditor (CIA) certification. He currently serves as CEO of HKL Dynamics Sdn. Bhd. (formerly Hong Seng Gloves Sdn. Bhd.).</p>` },
  { slug: 'yap-kien-ming', name: 'Yap Kien Ming', title: 'Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-17.png',
    bioHtml: `<p><strong>Mr. Yap Kien Ming</strong> holds a Bachelor of Arts in Economics and Marketing from the University of Brock, Canada.</p>
<p>His career history includes Strategic Management Executive at Kein Hing Industries, Regional Product Manager at Polychem, and Regional Sales Manager for Garryson / ATA Tools. He has extensive industry expertise across oil & gas, aerospace, and shipping.</p>
<p>He currently sits on the boards of Takaso Trading Sdn. Bhd. and Vortex Consolidated Bhd.</p>` },
  { slug: 'leong-kam-soon', name: 'Leong Kam Soon', title: 'Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-18.png',
    bioHtml: `<p>Mr. Leong Kam Soon was appointed to the Board on 26 August 2021 as Independent Non-Executive Director and Chairman of the Audit Committee.</p>
<p>He is a Fellow of the Association of Chartered Certified Accountants and the Chartered Institute of Management Accountants, and a member of the Malaysian Institute of Accountants.</p>
<p>He served as Deputy Director of Finance at Stamford College Berhad from 2001, then as CFO from October 2007 to September 2014. Earlier in his career he was Finance Manager at a multi-national packaging company in the People's Republic of China.</p>` },
  { slug: 'kang-chez-chiang', name: "Dato' Kang Chez Chiang", title: 'Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-19.png',
    bioHtml: `<p>Dato' Kang obtained his Diploma in Police Science from Universiti Kebangsaan Malaysia in 2001.</p>
<p>He is a retired Deputy Commissioner of Police of the Royal Malaysia Police, where he served for 39 years and 6 months. He joined the Royal Malaysia Police in 1979 under the General Operation Force, and also served as Head of the Intelligence Section, Head of the Narcotics Crime Investigation Department (NCID) of the Kuala Lumpur Police Contingent, Principal Assistant Director of Intelligence and Operations, and Deputy Director of Intelligence and Operations.</p>
<p>His experience in intelligence investigation, human management, and operational skills in the NCID field enables him to act at an advisory level on drug matters to Police Directors. He currently sits on the boards of Advanced Information Marketing Berhad and Caely Holdings Berhad as Independent Non-Executive Director.</p>` },
  { slug: 'lim-poh-leng', name: 'Lim Poh Leng', title: 'Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-20.png',
    bioHtml: `<p>Ms. Lim Poh Leng began her career at PricewaterhouseCoopers in 1997 in external audit.</p>
<p>She subsequently moved into internal audit at Proton, serving as Senior Manager and then Head of Internal Audit from 2012. In 2016 she joined DRB-HICOM Berhad, in 2018 became Chief Operating Officer at Delcol Industries, and currently serves as CFO at MMAG Holdings Berhad.</p>` }
];

@Component({
  selector: 'app-director-detail',
  standalone: true,
  templateUrl: './director-detail.component.html',
  styleUrl: './director-detail.component.css'
})
export class DirectorDetailComponent {
  private route = inject(ActivatedRoute);
  private params = toSignal(this.route.params, { initialValue: {} as Record<string, string> });
  director = computed(() => {
    const slug = this.params()['slug'];
    return DIRECTORS.find(d => d.slug === slug) ?? DIRECTORS[0];
  });
}
