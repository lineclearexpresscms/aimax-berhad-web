import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  model = signal({
    relationship: '', subject: '', area: '', location: '',
    email: '', phone: '', comments: ''
  });
  submitted = signal(false);

  update<K extends keyof ReturnType<typeof this.model>>(key: K, value: string) {
    this.model.update(m => ({ ...m, [key]: value }));
  }

  submit(event: Event) {
    event.preventDefault();
    if (this.isValid()) {
      this.submitted.set(true);
      // Place real submit endpoint here. Falls back to mailto:
    }
  }

  isValid() {
    const m = this.model();
    return m.relationship && m.subject && m.area && m.email && m.phone && m.comments;
  }
}
