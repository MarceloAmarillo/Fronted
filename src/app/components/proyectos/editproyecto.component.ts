import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit {
  proy: Proyecto = null;

  constructor(private sProyecto: ProyectoService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              public imageServiceLogoP: ImageService,
              private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {

    const id = this.activatedRoute.snapshot.params['id'];

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.sProyecto.detail(id).subscribe(
      data => {
        this.proy = data;
      }, err => {
        alert("Error al modificar proyecto");
        this.router.navigate(['']);
      }
    )

  }

  onUpdate(): void {

    const id = this.activatedRoute.snapshot.params['id'];
    if(this.imageServiceLogoP.url != "") {
      this.proy.img = this.imageServiceLogoP.url;
    }
    this.sProyecto.update(id, this.proy).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
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
