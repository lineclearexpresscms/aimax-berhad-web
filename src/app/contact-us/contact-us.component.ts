import { Component, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  error = signal('');

  constructor(private http: HttpClient) {}

  update<K extends keyof ReturnType<typeof this.model>>(key: K, value: string) {
    this.model.update(m => ({ ...m, [key]: value }));
  }

  submit(event: Event) {
    event.preventDefault();
    if (!this.isValid()) return;

    const apiUrl = 'http://localhost:8000/api/contact';
    this.http.post(apiUrl, this.model()).subscribe({
      next: () => this.submitted.set(true),
      error: () => this.error.set('Failed to send message. Please try again.')
    });
  }

  isValid() {
    const m = this.model();
    return m.relationship && m.subject && m.area && m.email && m.phone && m.comments;
  }
}
