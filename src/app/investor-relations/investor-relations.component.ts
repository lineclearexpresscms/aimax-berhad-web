import { Component } from '@angular/core';

@Component({
  selector: 'app-investor-relations',
  standalone: true,
  templateUrl: './investor-relations.component.html',
  styleUrl: './investor-relations.component.css'
})
export class InvestorRelationsComponent {
  shortcuts = [
    'Additional Listing Announcement / Subdivision of Shares',
    'Annual Audited Account', 'Annual Report', 'Change of Corporate Information',
    'Change in Shareholdings', 'Circular/Notice to Shareholders', 'Delisting of Securities',
    'Entitlements', 'Expiry / Maturity / Termination of Securities',
    'Financial Results', 'General Announcement', 'General Meetings',
    'Important Relevant Dates for Renounceable Rights', 'Investor Alerts',
    'Listing Circulars', 'Listing Information and Profile',
    'Reply to Query', 'Shares Buy Back', 'Take-over Offer',
    'Transfer of Listing', 'Unusual Market Activity'
  ];
  reports = [
    { label: 'Annual Report 2025', file: 'AIMAX-Annual-Report-2025.pdf' },
    { label: 'Annual Report 2024', file: 'AIMAX-Annual-Report-2024.pdf' },
    { label: 'Annual Report 2023', file: 'AIMAX-Annual-Report-2023.pdf' },
    { label: 'Annual Report 2022', file: 'AIMAX-Annual-Report-2022.pdf' },
    { label: 'Annual Report 2021', file: 'AIMAX-Annual-Report-2021.pdf' }
  ];
  agm = [
    { label: '23rd AGM', file: '23rd-AGM.pdf' },
    { label: '22nd AGM', file: '22nd-AGM.pdf' },
    { label: '21st AGM', file: '21st-AGM.pdf' },
    { label: '20th AGM', file: '20th-AGM.pdf' },
    { label: '19th AGM', file: '19th-AGM.pdf' }
  ];
}
