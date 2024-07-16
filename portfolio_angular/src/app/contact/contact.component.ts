import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
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

  constructor(private http: HttpClient) {}

  enviarCorreo() {
    const correo = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    };

    this.http.post<any>('http://localhost:3000/enviar-correo', correo)
      .subscribe({
        next: response => {
          console.log('Correo enviado con éxito', response);
          this.enviadoExitosamente = true;
        },
        error: error => {
          console.error('Error al enviar el correo', error);
          this.enviadoErroneo = true;
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
