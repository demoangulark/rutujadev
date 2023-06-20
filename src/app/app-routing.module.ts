import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent} from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
//import {AdminComponent} from './admin/admin.component';
const routes: Routes = [
  
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {path:'sidenav-bar', component:SidenavBarComponent, children:[
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent},
    { path: 'search', component: SearchComponent},
    { path: 'profile', component: ProfileComponent},
    { path:'bookmark', component: BookmarkComponent }
    /*{ path:'admin', component:AdminComponent}*/
  ]
  },
  
  
 
 





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
