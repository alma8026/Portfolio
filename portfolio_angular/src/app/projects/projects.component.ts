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
    currentImage: 'assets/images/CineAdvisor1.png', // Imagen inicial
    name: 'cine-advisor',
    images: [
      'assets/images/CineAdvisor1.png',
      'assets/images/CineAdvisor2.png',
      'assets/images/CineAdvisor3.png',
      'assets/images/CineAdvisor4.png',
      'assets/images/CineAdvisor5.png',
      'assets/images/CineAdvisor6.png'
    ],
    currentIndex: 0, // Índice de la imagen actual
    isExpanded: false
  };

  project2 = {
    currentImage: 'assets/images/Click_and_Go1.png', // Imagen inicial
    name: 'click-and-go',
    images: [
      'assets/images/Click_and_Go1.png',
      'assets/images/Click_and_Go2.png',
      'assets/images/Click_and_Go3.png',
      'assets/images/Click_and_Go4.png',
      'assets/images/Click_and_Go5.png',
      'assets/images/Click_and_Go6.png'
    ],
    currentIndex: 0, // Índice de la imagen actual
    isExpanded: false
  };

  project3 = {
    currentImage: 'assets/images/Hackathon1.png', // Imagen inicial
    name: 'hackathon',
    images: [
      'assets/images/Hackathon1.png',
      'assets/images/Hackathon2.png',
      'assets/images/Hackathon3.png'
    ],
    currentIndex: 0, // Índice de la imagen actual
    isExpanded: false
  };

  project4 = {
    currentImage: 'assets/images/aura_page1.png', // Imagen inicial
    name: 'aura-page',
    images: [
      'assets/images/aura_page1.png',
      'assets/images/aura_page2.png',
      'assets/images/aura_page3.png',
      'assets/images/aura_page4.png'
    ],
    currentIndex: 0, // Índice de la imagen actual
    isExpanded: false
  };

  project5 = {
    currentImage: 'assets/images/PokemonCards1.PNG', // Imagen inicial
    name: 'pokemon-cards',
    images: [
      'assets/images/PokemonCards1.PNG',
      'assets/images/PokemonCards2.PNG',
      'assets/images/PokemonCards3.PNG',
      'assets/images/PokemonCards4.PNG',
      'assets/images/PokemonCards5.PNG',
      'assets/images/PokemonCards6.PNG'
    ],
    currentIndex: 0, // Índice de la imagen actual
    isExpanded: false
  };

  // Función para cambiar a la imagen anterior
prevImage(project: any) {
  project.currentIndex = (project.currentIndex - 1 + project.images.length) % project.images.length;
  this.updateCarousel(project);
}
  
// Función para cambiar a la siguiente imagen
nextImage(project: any) {
  project.currentIndex = (project.currentIndex + 1) % project.images.length;
  this.updateCarousel(project);
}

// Actualiza el carrusel con el desplazamiento adecuado
updateCarousel(project: any) {
  const carouselInner = document.querySelector('.carousel-inner-' + project.name) as HTMLElement;
  // Ajusta el desplazamiento (translateX) basado en el índice de la imagen
  carouselInner.style.transform = `translateX(-${project.currentIndex * 100}%)`;
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
