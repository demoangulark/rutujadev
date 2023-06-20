import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { HttpClientModule } from '@angular/common/http';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { FlexLayoutModule } from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NzTableModule } from 'ng-zorro-antd/table';
import { SearchComponent } from './search/search.component';
import { SearchDataComponent } from './search-data/search-data.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BookmarkComponent } from './bookmark/bookmark.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { FormControl, FormGroup } from '@angular/forms';


registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchComponent,
    SearchDataComponent,
    BookmarkComponent,
    DashboardComponent,
    RegisterComponent,
    ProfileComponent,
    SidenavBarComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzButtonModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatFormFieldModule,
    MatIconModule,
    NzAvatarModule,
    MatCardModule,
    MatButtonModule,
    NgxChartsModule,
    NzTableModule,
    NzInputModule,
    NzDropDownModule,
    FormControl,
    FormGroup
    
    //FlexLayoutModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
