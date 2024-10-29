import { Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  @ViewChild('contactFormElement')
  contactFormElement!: ElementRef<HTMLFormElement>;

  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const serviceID = 'multimagem_service';
      const templateID = 'multimagem_id';
      const userID = 'KmHI89VU0HsDFXXU1';

      const templateParams = {
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        message: this.contactForm.value.message,
      };

      emailjs.send(serviceID, templateID, templateParams, userID).then(
        (response: EmailJSResponseStatus) => {
          console.log('SUCCESS!', response.status, response.text);
          alert('Email enviado com sucesso!');
        },
        (err) => {
          console.log('FAILED...', err);
          alert('Falha ao enviar o email!');
        }
      );
    }
  }
}
