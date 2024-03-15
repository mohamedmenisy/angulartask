import { HomeComponent } from './Components/home/home.component';
import { Routes } from '@angular/router';
import { ProductsComponent } from './Components/products/products.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { CartComponent } from './Components/cart/cart.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginComponent } from './Components/login/login.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { DetailsComponent } from './Components/details/details.component';
import { NewproductwithapiComponent } from './Components/newproductwithapi/newproductwithapi.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddcomponentComponent } from './Components/addcomponent/addcomponent.component';
import { UpdateproductComponent } from './Components/updateproduct/updateproduct.component';
import { DeleteproductComponent } from './Components/deleteproduct/deleteproduct.component';
import { authGuard } from './Guards/auth.guard';

export const routes: Routes = [
{path:'' ,component:ProductsComponent,title:"home",canActivate:[authGuard]},
{path:'Home' ,component:HomeComponent,title:"home",canActivate:[authGuard]},
{path:'products' ,component:ProductsComponent,title:"Products",canActivate:[authGuard]},
{path:'cart' ,component:CartComponent,title:"cart",canActivate:[authGuard]},
{path:'about' ,component:AboutComponent,title:"about",canActivate:[authGuard]},
{path:'login' ,component:LoginComponent,title:"login"},
{path:'register' ,component:RegisterComponent,title:"register"},
{path:'contact' ,component:ContactComponent,title:"contact",canActivate:[authGuard]},
{path:'apiproduct' ,component:NewproductwithapiComponent,title:"apiproducts",canActivate:[authGuard]},
{path:'profile' ,component:ProfileComponent,title:"profile",canActivate:[authGuard]},
{path:'addproduct' ,component:AddcomponentComponent,title:"addproduct",canActivate:[authGuard]},
{path:'updateproduct' ,component:UpdateproductComponent,title:"updateproduct",canActivate:[authGuard]},
{path:'deleteproduct' ,component:DeleteproductComponent,title:"deleteproduct",canActivate:[authGuard]},
{path:'details/:id' ,component:DetailsComponent,title:"details",canActivate:[authGuard]},

{path:'**' ,component:NotfoundComponent,title:"notfound"},
];
