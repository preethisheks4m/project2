import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes=[
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'products',component:ProductsComponent},
    {path:'contacts',component:ContactsComponent},
    {path:'terms',component:TermsComponent},







];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  