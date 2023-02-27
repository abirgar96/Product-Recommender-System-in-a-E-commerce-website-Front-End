import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2'
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {


  LoginForm: FormGroup;
  submitted = false;
  user: SocialUser;
  loggedIn: boolean;
  
  roles: any;
  constructor(private loginservice: LoginService, private ngZone: NgZone, private route: Router,
     private formBuilder: FormBuilder,private authService: SocialAuthService) { }

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
    
    this.LoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]],
    });
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log("user connected",this.user)
      // const data={firstname:"",lastname:"",password:"",email:""}
      // data.firstname=this.user.name
      // data.lastname=this.user.firstName
      // data.email=this.user.email
      // data.password=this.user.id

      // this.loginservice.register(data).subscribe(res=>{
            
      //   this.loginservice.login({email:data.email,password:data.password}).subscribe(res=>{

      //     this.route.navigate(['/home'])
      //     console.log("user connected",this.user)

      //   })

      // })
    
    }); 

    this.ngZone.runOutsideAngular(() => {
      // this will not trigger change detection
      setInterval(() => console.log('bonjour'), 2)
      localStorage.setItem("state", "0")
      localStorage.setItem("loginIn", 'true');
    });
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

 login() {
  this.submitted = true;
  if (this.LoginForm.invalid) { return;}
  this.loginservice.login(this.LoginForm.value).subscribe((success: any) => 
  {  

    if (success) {
      Swal.fire({
          icon: 'success',
             title: 'Authentification with Success ......',
             text: 'mail went wrong!',
             footer: '<a href>Why do I have this issue?</a>'
           })
        //  var decoded=jwt_decode(res['data'])  
         localStorage.setItem("state", "0")
         localStorage.setItem("loginIn", 'true');
         this.route.navigate(['/chat']);
    }
    else 
    {
      Swal.fire({
        icon: 'error',
           title: 'Authentification Failed ......',
           text: 'mail went wrong!',
           footer: '<a href>Why do I have this issue?</a>'
         })
    }
    
    // if (res.message =='Invalid email') {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'mail went wrong!',
    //     footer: '<a href>Why do I have this issue?</a>'
    //   })
    // }
    // else if (res.message == 'Invalid password!!!') {
    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'password went wrong!',
    //     footer: '<a href>Why do I have this issue?</a>'
    //   })
    // }
    // else if (res.message === 'user found!!!') {
    //   //this.router.navigate(['/home']);
    //    Swal.fire({
    //     icon: 'success',
    //     title: '...',
    //     text: 'Authentification Successufyl!',
    //     footer: '<a href>Why do I have this issue?</a>'
    //   })
    //   localStorage.setItem("state", "0")
    //   localStorage.setItem("loginIn", 'true');
    //   // localStorage.setItem("access_token", res['data'].token);
    //   // localStorage.setItem("refreshtoken", res['data'].refreshToken);
    //   // localStorage.setItem("user", JSON.stringify(res['data'].user));
    //    const tokens = {
    //     jwt:res['data'].token,
    //     refreshToken:res['data'].refreshToken
    //   }
      
    //   this.loginservice.storeTokens(tokens)
    //   this.route.navigate(['/home'])
    // }
    // else {

    //   Swal.fire({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'somthing went wrong!',
    //     footer: '<a href>Why do I have this issue?</a>'
    //   })

    // }
  }
  )
}


signInWithGoogle(): void {
  this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
}

signInWithFB(): void {
  this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
}

signOut(): void {
  this.authService.signOut();
}

refreshToken(): void {
  this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
}











}
