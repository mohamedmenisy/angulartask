import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { Iuser } from '../../Interfaces/iuser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _auth:AuthService){}
  user:Iuser={email : "", password:""}
  
  onsubmit(signin:any){
  
    this._auth.signin(signin.value).subscribe(data=>{
      if (data==false) {
        alert("email or password invalid")
      }else{
        alert("login successful")
        localStorage.setItem("user",JSON.stringify(data))
      }
      
    })
  }
}
