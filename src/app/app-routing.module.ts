import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';

const routes: Routes = [
  {path: "", component: AllProductsComponent},
  {path: "product-details/:id", component: ProductDetailsComponent},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "shopping-basket", component: ShoppingBasketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
