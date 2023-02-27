import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }


  ngOnInit(){
    this.loadExternalScript('https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"') 
    this.loadExternalScript("assets/js/bootstrap.js") 
    this.loadExternalScript("assets/js/jquery.smartmenus.js")  
    this.loadExternalScript("assets/js/jquery.smartmenus.bootstrap.js")     
    this.loadExternalScript("assets/js/sequence.js")
    this.loadExternalScript("assets/js/sequence-theme.modern-slide-in.js")     
    this.loadExternalScript("assets/js/jquery.simpleGallery.js")
    this.loadExternalScript("assets/js/jquery.simpleLens.js")
    this.loadExternalScript("assets/js/slick.js")
    this.loadExternalScript("assets/js/nouislider.js")
    this.loadExternalScript("assets/js/custom.js") 

  }
 public loadExternalScript(url: string) {
   const body = <HTMLDivElement>document.body;
   const script = document.createElement('script');
   script.innerHTML = '';
   script.src = url;
   script.async = true;
   script.defer = true;
   body.appendChild(script);
 }

}
