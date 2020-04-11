import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BooksComponent } from './books/books.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminAuthGuard } from './auth/admin-auth.guard';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksComponent, canActivate: [AuthGuard]},
  {path: 'register', component: RegisterComponent, canActivate: [AdminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
  providers: [AuthGuard, AdminAuthGuard]
})
export class AppRoutingModule { }
