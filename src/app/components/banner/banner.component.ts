import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Banner } from 'src/app/model/banner';
import { BannerService } from 'src/app/service/banner.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
 banner: Banner= null;
 constructor(private banners: BannerService, private tokenService: TokenService){}

 isLogged= false;

 ngOnInit(): void{
this.cargarBanner();
if(this.tokenService.getToken()){
  this.isLogged = true;
} else {
  this.isLogged = false;
}
 }

 cargarBanner():void{
  this.banners.detail(1).subscribe(data => {this.banner= data})

 }
}