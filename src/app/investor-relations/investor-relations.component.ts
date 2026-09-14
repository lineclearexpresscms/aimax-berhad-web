import { Component } from '@angular/core';

@Component({
  selector: 'app-investor-relations',
  standalone: true,
  templateUrl: './investor-relations.component.html',
  styleUrl: './investor-relations.component.css'
})
export class InvestorRelationsComponent {
  shortcuts = [
    { title: 'Additional Listing Announcement / Subdivision of Shares', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=AL,ALCO' },
    { title: 'Annual Audited Account', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=AA,AACO' },
    { title: 'Annual Report', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=AR,ARCO' },
    { title: 'Change of Corporate Information', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=CI,CICO' },
    { title: 'Change in Shareholdings', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=SH,CHSH' },
    { title: 'Circular/Notice to Shareholders', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=CS,CSCO' },
    { title: 'Delisting of Securities', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=DLCO' },
    { title: 'Entitlements', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=EA,ENCO' },
    { title: 'Expiry / Maturity / Termination of Securities', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=ES,EMCO' },
    { title: 'Financial Results', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=FA,FRCO' },
    { title: 'General Announcement', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=GA,GACO' },
    { title: 'General Meetings', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=GM,MECO' },
    { title: 'Important Relevant Dates for Renounceable Rights', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=TR' },
    { title: 'Investor Alerts', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=IA,IACO' },
    { title: 'Listing Circulars', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=LC,LCCO' },
    { title: 'Listing Information and Profile', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=IP,LICO' },
    { title: 'Reply to Query', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=RQ,RQCO' },
    { title: 'Shares Buy Back', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=SB,SBBA' },
    { title: 'Take-over Offer', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=TOCO' },
    { title: 'Transfer of Listing', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=TL,TRFL' },
    { title: 'Unusual Market Activity', url: 'https://www.bursamalaysia.com/market_information/announcements/company_announcement?company=0041&cat=UMA,UMCO' }
  ];

  annualReports = [
    { label: 'Annual Report 2025 Part 1', file: 'Annual-Report-2025-part1.pdf' },
    { label: 'Annual Report 2025 Part 2', file: 'Annual-Report-2025-part2.pdf' },
    { label: 'Annual Report 2024 Part A', file: 'Annual-Report-2024-partA.pdf' },
    { label: 'Annual Report 2024 Part B', file: 'Annual-Report-2024-partB.pdf' },
    { label: 'Annual Report 2022', file: 'HongSeng-Annual-Report-FYE-2022.pdf' },
    { label: 'Annual Report 2021', file: 'hongseng-2021-annual-report.pdf' },
    { label: 'Annual Report 2020', file: 'annual-report-2020.pdf' },
  ];

  agmSummary = [
    { label: 'Summary of Key Matters Discussed at 23rd AGM', file: 'Summary-of-Key-Matters-Discussed-at-23rd-AGM.pdf' },
    { label: 'Summary of Key Matters Discussed at 22nd AGM', file: 'Summary-of-Key-Matters-Discussed-at-22nd-AGM.pdf' },
    { label: 'Summary of Key Matters Discussed at 21st AGM', file: 'Summary-of-Key-Matters-Discussed-at-21st-AGM.pdf' },
  ];

  rrptCircular = [
    { label: 'RRPT Circular for 24th EGM', file: 'RRPT-Circular-for-24th-EGM.pdf' },
    { label: 'RRPT Circular for 23rd AGM', file: 'RRPT-Circular-for-23rd-AGM.pdf' },
    { label: 'RRPT Circular for 22nd AGM', file: 'HongSeng-RRPT-Circular-30-01-2023.pdf' },
    { label: 'RRPT Circular for 21st AGM', file: 'circular-for-21st-agm.pdf' },
    { label: 'RRPT Circular for 20th AGM', file: 'circular-for-20th.agm.pdf' },
  ];

  corporateGovernance = [
    { label: 'Corporate Governance Report 2025', file: 'HSCB-CG-Report-2025.pdf' },
    { label: 'Corporate Governance Report 2022', file: 'HongSeng-CG-Report-2022.pdf' },
    { label: 'Corporate Governance Report 2020', file: 'corporate-governance-2020.pdf' },
  ];

  agmNotices = [
    { label: 'Notice of 24th EGM', file: 'HongSeng-Notice-of-24th-EGM.pdf' },
    { label: 'Notice of 22nd AGM', file: 'HongSeng-Notice-of-22nd-AGM.pdf' },
  ];

  boardCharter = [
    { label: 'Board Charter', file: 'board-charter.pdf' },
  ];

  codeOfConduct = [
    { label: 'Code of Conduct and Ethics', file: 'code-of-conduct-and-ethics.pdf' },
  ];

  termsOfReference = [
    { label: 'Audit Committee Terms of Reference', file: 'terms-of-reference-ac.pdf' },
    { label: 'Nominating Committee Terms of Reference', file: 'terms-of-reference-nc.pdf' },
  ];

  policies = [
    { label: 'Anti-bribery and Corruption Policy', file: 'aml-policy-2020.pdf' },
    { label: 'Whistleblowing Policy and Procedures', file: 'whistleblowing-policy-and-procedures-2021.pdf' },
    { label: 'Fit and Proper Policy', file: 'HSCB_-_Fit_and_Proper_Policy.pdf' },
  ];
}
