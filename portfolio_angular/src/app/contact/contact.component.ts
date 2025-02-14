import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';  // Para *ngIf, ngClass, etc.
import { FormsModule } from '@angular/forms';  // Para ngModel

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],  // Importa los módulos necesarios
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  enviadoExitosamente: boolean = false; 
  enviadoErroneo: boolean = false; 
  isLoading: boolean = false;

  constructor(private http: HttpClient) {}

  enviarCorreo() {
    this.isLoading = true;
    const correo = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    this.http.post<any>('https://backend-portfolio-lrhu.onrender.com/enviar-correo', correo)
      .subscribe({
        next: response => {
          console.log('Correo enviado con éxito', response);
          this.enviadoExitosamente = true;
          this.isLoading = false;
          this.name = '';
          this.email = '';
          this.subject = '';
          this.message = '';
        },
        error: error => {
          console.error('Error al enviar el correo', error);
          this.enviadoErroneo = true;
          this.isLoading = false;
        }
      });
  }

  cerrarMensaje() {
    this.enviadoExitosamente = false; // Ocultar mensaje de éxito
  }

  cerrarMensaje2() {
    this.enviadoErroneo = false; // Ocultar mensaje de error
  }

}
