import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Iuser } from '../../Interfaces/iuser';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  
  imgsrc="./assets/logo.jpg"
  user=new BehaviorSubject(null)
  ngOnInit(): void {
    
    const userJson = localStorage.getItem('user');
    this.user = userJson !== null ? JSON.parse(userJson) : null;
    
     
     
      
    
  }

  logout(){
    localStorage.removeItem("user");
    this.user.next(null)
  }
}
