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
  public logged = signal(false); // saber si esta logeado o no.
  public username = signal(''); // nombre del usuario
  public newImage = signal(''); // Guardar lo que el usuario escriba en el input

  private readonly IMG_PATH: string = 'img/'; // ruta de las imagenes
  private imgIndex = signal(0); // en que posición del array está la imagen


  // ATRIBUTO ARRAY
  public imgFiles = signal<string[]>([]);

  // CONSTRUCTOR (cuando se carga la aplicación, recuperamos las imágenes guardadas en localStorage)
  constructor() {
    this.restoreImages();
  }

  // GETTERS
  get selectedImage(): string {
    // Si no hay imágenes en el array, devuelve una cadena vacía.
    if(this.imgFiles().length === 0) return '';
    // Si hay imágenes, devuelve la ruta completa de la imagen seleccionada.
    return this.IMG_PATH + this.imgFiles()[this.imgIndex()];
  }

  // MÉTODOS
  public changeRandomImage(): void {
    // Evitar que elija una imagen aleatoria cuando no hay.
    if(this.imgFiles().length === 0) return;
    this.imgIndex.set(Math.floor(Math.random() * this.imgFiles().length));
  }

  public selectImage(index: number): void {
    this.imgIndex.set(index);
  }

  // 3. Método para iniciar sesión, 
  public login(): void {
    // Evitar que se inicie sesión si no hay nada introducido.
    if (this.username().trim() === '') return;
    this.logged.set(true);
  }

  // 4. Agregar una nueva imagen al array
  public addImage(): void{
    const newImageName = this.newImage().trim(); // suelo poner Trim para evitar espacios al principio o al final.

    // Evitar agregar imagene si el nombre está vacio o si ya existe en el array.
    if(newImageName === '' || this.imgFiles().includes(newImageName)) return;

    // Agregar la nueva imagen al array.
    this.imgFiles.update(current => [...current, newImageName]);

    // Seleccionamos la nueva imagen, que será la última del array.
    this.imgIndex.set(this.imgFiles().length - 1);

    // Limpiar el input después de agregar la imagen.
    this.newImage.set('');

    // guardar en localStorage (llamar a la función más tarde)
    this.saveImages();
  }

  // 5. Método para guardar en localStorage
  public saveImages(): void{
    // Guardar en localStorage las imagenes en un formato String
    localStorage.setItem('IMG_FILES', JSON.stringify(this.imgFiles()));
  }

  // 6. Recuperar las imágenes de localStorage.
  public restoreImages(): boolean{
    // variables
    const savedImages = localStorage.getItem('IMG_FILES');

    // Si no hay nada vacío
    if(savedImages != null){
      // las recuperamos y las convertimos de nuevo a un array.
      this.imgFiles.set(JSON.parse(savedImages));
      // Evitamos acceder a una posición que no existe cuando cargarmos localStorage
      this.imgIndex.set(0);
      // devolvemos que se ha podido encontrar las imágenes.
      return true;
    }
    // si no entra en el if significa que está vacío, por lo que devolvemos false.
    return false;
  }
}
