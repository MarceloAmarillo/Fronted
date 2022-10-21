import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = "";

  constructor(private storage: Storage) { }

  public uploadImage($event: any, carpeta:string) {

    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `imagen/${carpeta}/${file.name}`);
    const name = file.name;
    uploadBytes(imgRef, file)
    .then(response => {this.getImages(name, carpeta)})
    .catch(error => console.log(error));

  }

  getImages(name:string, carpeta:string) {

    const imagesRef = ref(this.storage, `imagen/${carpeta}/`);
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        if (item.name == name) {
          this.url = await getDownloadURL(item);
          console.log("la url es: " + this.url);
        }
      }
    })
    .catch(error => console.log(error));

  }

  clearUrl() {

    this.url = "";

  }

}