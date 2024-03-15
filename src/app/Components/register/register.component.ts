import { Component } from '@angular/core';
import { Iuser } from '../../Interfaces/iuser';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor(private _auth:AuthService){}
  user:Iuser={email : "", password:""}

onsubmit(signup:any){

  this._auth.signup(signup.value).subscribe(data=>{
  alert("register done")
    console.log(data);
    
  })
}
}
