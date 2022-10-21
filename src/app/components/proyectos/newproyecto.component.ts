import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string = '';
  descripcionP: string = '';
  img: string = '';
  url: string = '';

  constructor(private sProyecto: ProyectoService, 
              private router: Router,
              public imageServiceLogoP: ImageService,
              private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  }

  onCreate(): void {
    this.img = this.imageServiceLogoP.url;
    const proy = new Proyecto(this.nombreP, this.descripcionP, this.img,this.url);
    this.sProyecto.save(proy).subscribe(
      data => {
        alert("Proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("Falló");
        this.router.navigate(['']);
      }
    )
    this.imageServiceLogoP.clearUrl();

  }

  uploadImage($event:any) {

    const carpeta = "imagenProy"
    this.imageServiceLogoP.uploadImage($event, carpeta);

  }

  cancel(): void {

    this.imageServiceLogoP.clearUrl();
    this.router.navigate(['']);

  }

}