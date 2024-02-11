import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'APPONE';

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  faqs = [
    { question: 'Pregunta 1', answer: 'Respuesta a la pregunta 1.' },
    { question: 'Pregunta 2', answer: 'Respuesta a la pregunta 2.' },
    { question: 'Pregunta 3', answer: 'Respuesta a la pregunta 3.' },
    { question: 'Pregunta 4', answer: 'Respuesta a la pregunta 4.' },
    { question: 'Pregunta 5', answer: 'Respuesta a la pregunta 5.' },
    { question: 'Pregunta 6', answer: 'Respuesta a la pregunta 6.' },
    // Agrega más preguntas y respuestas según sea necesario
  ];
}
