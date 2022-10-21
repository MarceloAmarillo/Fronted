import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { ImageService } from 'src/app/service/image.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-editbanner',
  templateUrl: './editbanner.component.html',
  styleUrls: ['./editbanner.component.css']
})
export class EditbannerComponent implements OnInit {

  banner: Banner = null;
  
  constructor(private sBanner: BannerService, 
              private activatedRoute: ActivatedRoute, 
              private router: Router,
              public imageService: ImageService,
              private tokenService: TokenService) { }
              
  isLogged = false;

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.sBanner.detail(id).subscribe(
      data => {
        this.banner = data;
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void {
    const id = this.activatedRoute.snapshot.params['id'];
    if(this.imageService.url != "") {
      this.banner.img = this.imageService.url;
    }
    this.sBanner.update(id, this.banner).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
    this.imageService.clearUrl();
  }

  uploadImage($event:any) {

    const carpeta = "banner";
    this.imageService.uploadImage($event, carpeta);

  }

  cancel(): void {

    this.imageService.clearUrl();
    this.router.navigate(['']);

  }

}


