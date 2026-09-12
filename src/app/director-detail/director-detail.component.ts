import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';

interface Director { slug: string; name: string; title: string; photo: string; bioHtml: string; }

const DIRECTORS: Director[] = [
  { slug: 'ng-keok-chai', name: 'Ng Keok Chai', title: 'Independent Non-Executive Chairman',
    photo: 'assets/images/BOD AIMAX-14.png',
    bioHtml: `<p><strong>Mr. Ng Keok Chai</strong> ("Mr. Ng") started his early career as a Police Inspector with PDRM in 1982 and was then posted to serve in Sarawak for 20 years until the rank of Assistant Superintendent of Police. During his tenure in Sarawak, his exposure included the Criminal Investigation Department ("CID"), General Duty and Police Field Force.</p><br/>
<p>In 2003, Mr. Ng was transferred to West Malaysia to serve in Commercial Crime Investigation Department until his retirement in 2019. Mr. Ng was promoted to Assistant Commissioner of Police in 2016 and his last held position was Principal Assistant Director in Forensic Accounting Investigation Division, CCID, Royal Malaysia Police, Bukit Aman.</p><br/>
<p>Throughout his 36 years of service in Royal Malaysia Police, he was very much involved in police investigations due to his legal background. He specialised in criminal investigation across various fields which include commercial crime, general crime and forensic accounting with ample management and special operations experience.</p>` },
  { slug: 'yacob-mustafa', name: 'Datuk Dr. Yacob Bin Mustafa', title: 'Chairman Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-15.png',
    bioHtml: `<p><strong>Datuk Dr. Yacob Bin Mustafa</strong> ("Datuk Dr. Yacob"), C.A(M), FCPA (AUST), CPFA (UK) has a distinguished career in Malaysia's public finance sector, culminating as the Accountant General of Malaysia until his retirement in August 2023.</p><br/>
<p>Starting his career in 1987, Datuk Dr. Yacob swiftly advanced to key positions within the Malaysian government, including Director of the Central Operation & Agency Services Division and Deputy Accountant General (Operation). His tenure as Accountant General from October 2019 to August 2023 was marked by significant enhancements to the nation's financial management systems and policies.</p><br/>
<p>Datuk Dr. Yacob's adaptability and leadership were evident as he worked under multiple finance ministers, greatly influencing Malaysia's fiscal strategic and public sector financial governance.</p><br/>
<p>His influence extends to several board and committee roles, enhancing public finance and administration. He has been a member of the Audit Committee of Perbadanan Insurans & Deposit Malaysia (PIDM) since 2019, and the Finance & Investment Committee of Majlis Agama Islam Wilayah Persekutuan (MAIWP) since 2022. In 2023, he joined the Audit Committee of the Razak School of Government.</p><br/>
<p>Recognized by the Global Accounting Hall of Fame in 2018, Datuk Dr. Yacob's extensive experience and expertise make him a valuable candidate for senior advisory or directorial roles, contributing significantly to financial governance and policy development.</p>` },
  { slug: 'lester-chin', name: 'Lester Chin Kent Lake', title: 'Executive Director',
    photo: 'assets/images/BOD AIMAX-16.png',
    bioHtml: `<p><strong>Mr. Lester Chin Kent Lake</strong> graduated magna cum laude with Bachelor of Science in Business from Southern New Hampshire University in 2008.</p><br/>
<p>He started his career in the equity research and corporate finance industry as a Management Associate at RHB Investment Bank where he was promoted as an Assistant Manager within 2 years. During his stint as the Assistant Manager, he was responsible in ensuring timely preparation of all relevant documents and assist in reviewing documents to ensure high professional quality is maintained while providing support in IPOs, merger & acquisition, disposal and other corporate transactions and others.</p><br/>
<p>Then in 2011, he was appointed as an Equity and Technical Research Analyst at RHB Research Institute and has experience dealing with both institutional and retail clients. His coverage includes the rubber glove and healthcare companies as well as technical analysis.</p><br/>
<p>Subsequently, he joined UOB Kay Hian as the Head of Retail Research/Senior Analyst from 2013 until 2017. He was tasked to conduct detailed equity research, including analysing and forecasting industry trends and articulating recommendation on sectors and stocks in designated segments, oversee production and coordination of retail research reports and events, oversee educational seminars and presentations for retail investors, active monitoring of the micro and macro factors affecting the sectors and companies under coverage and etc.</p><br/>
<p>Lester had recently left UOB Kay Hian in October 2020 as the Associate Director of Equity Capital Markets, a position he has held since 2017 whereby he was responsible to oversee equity underwriting and placement activities of company, access requirements, examine strategies and propose solutions for the capital raising needs of corporate clientele, conduct roadshows and presentations to enhance and improve issuer's access to capital markets among others.</p><br/>
<p>With more than 12 years of experience in the finance industry, he is currently in the midst of establishing his own business.</p>` },
  { slug: 'wong-weng-yew', name: 'Wong Weng Yew', title: 'Executive Director',
    photo: 'assets/images/BOD AIMAX-17.png',
    bioHtml: `<p><strong>Mr. Wong Weng Yew</strong> overall has more than 10 years experience in financial audit, internal audit and information systems audit. During his tenure in PricewaterhouseCoopers LLP, Singapore, he manages and provides advisory for business processes, IT auditing and security review. His professional qualifications include Chartered Accountant accreditation in Malaysia and Singapore, a fellow member of Association of Chartered Certified Accountants (ACCA) and Certified Internal Auditor (CIA). He is currently the Chief Executive Officer of HKL Dynamics Sdn. Bhd. (formerly known as Hong Seng Gloves Sdn. Bhd.), a glove manufacturing company managing its overall operations.</p>` },
  { slug: 'yap-kien-ming', name: 'Yap Kien Ming', title: 'Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-18.png',
    bioHtml: `<p><strong>Mr. Yap Kien Ming</strong> graduated with a Bachelor Degree of Arts in Economics and Marketing from the University of Brock, Canada.</p><br/>
<p>He began his career as a Strategic Management Executive with Kein Hing Industries Sdn. Bhd. During his 5 years' tenure, he had started and headed the Purchasing Department. In addition, Mr Yap had also put in place a stock system besides heading the Purchasing Department. He was also responsible for an integrated stamping, machining and surface grinding line and Sales and Marketing with clients that included Sanden, Sharp, Nippondenso, Matsushita, Clipsal and PDL Switch Gear Manufacturers. He was also responsible for a Licensed Manufacturing Warehouse, a Joint Venture between 3 Japanese manufacturers, namely Tomen, Matsushita, Meiwa and Kein Hing Industries Sdn. Bhd.</p><br/>
<p>Subsequently, he joined Polychem Sdn. Bhd. as Regional Product Manager which is a manufacturers agent for hand tools, cutting tools and non-ferrous materials from United Kingdom, Europe and Australia, where he had served a wide range of industries from automotive, mould and die, oil and gas and electrical, electronics manufacturers.</p><br/>
<p>In the last decade, he was appointed as the Regional Sales Manager for Garryson (now under ATA Tools.), and responsible for the Sales and Marketing for China, Indonesia, Malaysia, Singapore and Thailand. During his tenure, he was involved in the Business Development, Sales and Distribution channels, Technical Training and support to the dealers around the region.</p><br/>
<p>Mr. Yap has vast experience in Technical Sales and Cross Cultural marketing in Asia and his primary focus was in the oil and gas, aerospace and shipping industry and is now the Director in Takaso Trading Sdn. Bhd.</p>
<p>Mr. Yap holds another Independent Directorship in Vortex Consolidated Bhd.</p>` },
  { slug: 'leong-kam-soon', name: 'Leong Kam Soon', title: 'Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-19.png',
    bioHtml: `<p>Mr. Leong Kam Soon was appointed as an Independent Non-Executive Director and Audit Committee Chairman of the Company on 26th August 2021.</p><br/>
<p>He is a Fellow of both the Association of Chartered Certified Accountants and Chartered Institute of Management Accountants. He is also a member of the Malaysian Institute of Accountants.</p><br/>
<p>Mr. Leong served as the Deputy Director of Finance of Stamford College Berhad from 2001 before being promoted to be the Chief Financial Officer in October 2007. He held the position till September 2014 having served in Stamford College Berhad for well over thirteen years before deciding to pursue a career as a freelance Financial Consultant. He has retired since 2020.</p><br/>
<p>Prior to joining Stamford College Berhad, he worked as Finance Manager for a multi-national company specialising in the manufacture of packaging material for beverage and was posted to the People's Republic of China ("PRC") for seven years. He returned to Malaysia in July 2001 and joined Stamford College Berhad on 20 August 2001 as Deputy Director of Finance. Prior to the PRC employment, he was the accountant for a subsidiary of a listed plantation group for three years.</p><br/>
<p>He has no family relationship with the other directors or major shareholders of the Company. He has not been convicted of any offences within the past 5 years. He does not have any conflict of interest with the Company.</p>` },
  { slug: 'kang-chez-chiang', name: "Dato' Kang Chez Chiang", title: 'Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-20.png',
    bioHtml: `<p>Dato' Kang Chez Chiang obtained his Diploma in Police Science from Universiti Kebangsaan Malaysia in 2001.</p>
<p>Dato' Kang is a retired Deputy Commissioner of Police of the Royal Malaysia Police where he had served in the Police Force for 39 years 6 months. He joined the Royal Malaysia Police in 1979 under General Operational Force. He had also served as Head of Intelligence Section, Head of Narcotics Crime Investigation Department ("NCID") Kuala Lumpur Police Contingent, Principal Assistant Director Intelligent and Operations, Deputy Director Intelligence and Operations.</p><br/>
<p>Dato' Kang's experience in intelligence investigation, human management and operational skills in the field NCID works has enabled him to act at an advisory level on drugs matter to Police Directors.</p><br/>
<p>Currently, Dato' Kang Chez Chiang sits on board of Advanced Information Marketing Berhad and Caely Holdings Berhad as its Independent Non-Executive Director.</p>` },
  { slug: 'lim-poh-leng', name: 'Lim Poh Leng', title: 'Independent Non-Executive Director',
    photo: 'assets/images/BOD AIMAX-21.png',
    bioHtml: `<p><strong>Ms. Lim Poh Leng ("Ms. Pauline Lim")</strong> began her career in external audit with PricewaterhouseCoopers in 1997, auditing various public listed and private limited companies.</p><br/>
<p>In 2005, she started her internal audit career with Proton as Senior Manager and resumed the position as Head of Internal Audit for Proton in 2012. With her extensive internal audit experience in manufacturing industry, she was asked to join DRB-HICOM Berhad internal audit in 2016 to oversee the internal audit team for manufacturing division.</p><br/>
<p>In 2018, she joined Delcol Industries (M) Sdn. Bhd. ("Delcol") as Chief Operating Officer to oversee financial and operations of Delcol. After 5 years being involved in the operations at Delcol, she was appointed as the Head of Internal Audit in a new company to prepare the company in getting listed in Nasdaq in USA.</p><br/>
<p>With her extensive audit knowledge and skills for more than 25 years in financial, compliance and operational areas within the manufacturing and service industries, Ms. Pauline Lim has a record of achievement in streamlining audit processes, identifying significant control weaknesses to increase the effectiveness and efficiency of the operations.</p><br/>
<p>Currently, Ms. Pauline Lim serves as the Chief Financial Officer of MMAG Holdings Berhad, where she is responsible for the overall financial strategy, risk management, and corporate governance. In this role, she focuses on driving financial performance, ensuring compliance with regulatory requirements, and implementing strategic initiatives to support the company's growth objectives.</p>` }
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
