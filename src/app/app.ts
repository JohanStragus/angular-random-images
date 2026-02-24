import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Header } from './layout/header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // ATRIBUTOS
  protected readonly title = signal('random_images');
  public logged: boolean = false; // saber si esta logeado o no.
  public username: string = ''; // nombre del usuario
  private readonly IMG_PATH: string = 'img/'; // ruta de las imagenes
  private imgIndex: number = 0; // en que posición del array está la imagen


  // ATRIBUTO ARRAY
  public imgFiles: string[] = [
    'goku.webp',
    'vegeta.webp',
    'piccolo.webp'
  ];

  // GETTERS
  get selectedImage(): string {
    return this.IMG_PATH + this.imgFiles[this.imgIndex];
  }

  // MÉTODOS
  public changeRandomImage(): void {
    this.imgIndex = Math.floor(Math.random() * this.imgFiles.length);
  }

  public selectImage(index: number): void {
    this.imgIndex = index;
  }

  // 3. Método para iniciar sesión, 
  public login(): void {
    if (this.username.trim() === '') return;
    this.logged = true;
  }
}
