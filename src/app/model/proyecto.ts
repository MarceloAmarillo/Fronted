export class Proyecto {
    id? : number;
    nombreP : string;
    descripcionP : string;
    img: string;
    url:string;

    constructor(nombreP: string, descripcionP: string, img: string, url:string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.img = img;
        this.url = url;
    }
}
