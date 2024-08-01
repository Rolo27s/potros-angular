import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  YOUR_SERVICE_ID:string = "service_0953697";
  YOUR_TEMPLATE_ID:string = "template_czvosdk";
  YOUR_PUBLIC_KEY:string = "iS5SsWqJeiu-TshLq";

  form: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4), Validators.pattern('^[a-zA-Z\\s]+$')]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(255)]]
    });
  }

  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }
  get message() { return this.form.get('message'); }

  handleFormSubmission(): void {
    if (this.form.valid) {
      console.log('Form is valid');
      const formData = this.form.value;

      const templateParams:Record<string, any> = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      this.sendEmail(templateParams);
      
    } else {
      console.log('Form is invalid');
      this.printFormErrors();
    }
  }

  private printFormErrors(): void {
    Object.keys(this.form.controls).forEach(controlName => {
      const control = this.form.get(controlName);
      if (control && control.invalid && control.touched) {
        console.log(`${controlName} is invalid. Errors: ${JSON.stringify(control.errors)}`);
      }
    });
  }

  private sendEmail(templateParams: Record<string, any>): void {
    emailjs.send(this.YOUR_SERVICE_ID, this.YOUR_TEMPLATE_ID, templateParams, this.YOUR_PUBLIC_KEY)
      .then((result: EmailJSResponseStatus) => {
        console.log('Email sent successfully', result.text);
        this.formSubmitted = true;
        setTimeout(() => {
          this.form.reset();
          this.formSubmitted = false;
          this.router.navigate(['/']); // Redirect to the index page
        }, 1000);
      }, (error) => {
        console.error('Email sending failed', error.text || error);
      });
  }
}
