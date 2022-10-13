import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { ImageService } from 'src/app/service/image.service';


@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.css']
})
export class EditbannerComponent implements OnInit {

  constructor(private activatedRouter: ActivatedRoute, private BannerService: BannerService,
    private router: Router, public imageService: ImageService) { }
 banner: Banner= null;
  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.BannerService.detail(id).subscribe(
      data =>{
        this.banner = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.banner.img = this.imageService.url
    this.BannerService.update(id, this.banner).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la imagen");
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event: any){
    const id= this.activatedRouter.snapshot.params['id'];
    const name= "banner_" + id;
    this.imageService.uploadImage($event, name);

  }
}

