import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  constructor() {}
  
  formData: any = {}

  submitForm() {}

  // Definición de proyectos con sus datos
  project1 = {
    currentImage: 'assets/images/aura_page1.png', // Imagen inicial
    images: [
      'assets/images/aura_page1.png',
      'assets/images/aura_page2.png',
      'assets/images/aura_page3.png'
    ],
    currentIndex: 0, // Índice de la imagen actual
    isExpanded: false
  };

  project2 = {
    currentImage: 'assets/images/PokemonCards1.PNG', // Imagen inicial
    images: [
      'assets/images/PokemonCards1.PNG',
      'assets/images/PokemonCards2.PNG',
      'assets/images/PokemonCards3.PNG'
    ],
    currentIndex: 0, // Índice de la imagen actual
    isExpanded: false
  };

  project3 = {
    currentImage: 'assets/images/E-learn1.PNG', // Imagen inicial
    images: [
      'assets/images/E-learn1.PNG',
      'assets/images/E-learn2.PNG',
      'assets/images/E-learn3.PNG'
    ],
    currentIndex: 0, // Índice de la imagen actual
    isExpanded: false
  };

  // Función para cambiar a la imagen anterior
  prevImage(project: any) {
    project.currentIndex = (project.currentIndex - 1 + project.images.length) % project.images.length;
    project.currentImage = project.images[project.currentIndex];
  }

  // Función para cambiar a la siguiente imagen
  nextImage(project: any) {
    project.currentIndex = (project.currentIndex + 1) % project.images.length;
    project.currentImage = project.images[project.currentIndex];
  }

  expandImage(project: any) {
    project.isExpanded = true;
    document.body.classList.add('overflow-hidden'); // Ocultar el scroll del body
  }

  collapseImage(project: any) {
    project.isExpanded = false;
    document.body.classList.remove('overflow-hidden'); // Restaurar el scroll del body
  }
  
}
