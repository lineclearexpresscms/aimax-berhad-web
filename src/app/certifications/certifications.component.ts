import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css'
})
export class CertificationsComponent {
  facilityCerts = [
    { name: 'ISO 13485: 2016', desc: 'Medical Devices — Quality Management Systems', icon: 'assets/images/CERTIFICATIONS.png' },
    { name: 'SGS Certificate', desc: 'Certificate MY12/20098/12 — AIMAX Healthcare Sdn Bhd', icon: 'assets/images/PRODUCT_COMPLIANCE_01 ADD ON.png' }
  ];
  conformance = [
    { name: 'ASTM D3578 / D6319', desc: 'Standard Specification for Rubber Examination Gloves', icon: 'assets/images/PRODUCT_COMPLIANCE_SINGLE-17.png' },
    { name: 'EN 455 Parts 1 to 4', desc: 'CE Marking for Medical Gloves', icon: 'assets/images/PRODUCT_COMPLIANCE_SINGLE-18.png' },
    { name: 'PPE Regulation 2016/425 Cat III', desc: 'Protective Equipment Directive', icon: 'assets/images/PRODUCT_COMPLIANCE_SINGLE-19.png' },
    { name: 'Fentanyl Tested', desc: 'Permeation resistance', icon: 'assets/images/PRODUCT_COMPLIANCE_SINGLE-20.png' },
    { name: 'ASTM 6978 Chemo Drug Tested', desc: 'Chemotherapy drug permeation', icon: 'assets/images/PRODUCT_COMPLIANCE_SINGLE-21.png' },
    { name: 'Food Contact', desc: 'EU 1935/2004 compliant', icon: 'assets/images/PRODUCT_COMPLIANCE_SINGLE-22.png' },
    { name: 'Medical Device Authority', desc: 'MDA Malaysia registration', icon: 'assets/images/PRODUCT_COMPLIANCE_01 ADD ON.png' }
  ];
}
