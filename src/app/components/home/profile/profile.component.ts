import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { io } from 'socket.io-client'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  ngOnInit():void{
    
  }
}
