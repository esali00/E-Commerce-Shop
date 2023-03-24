import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms'
import { MatGridListModule } from '@angular/material/grid-list';

import { DataService } from './data.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { BasketService } from './basket.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    AllProductsComponent,
    LoginComponent,
    RegisterComponent,
    ShoppingBasketComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatGridListModule
  ],
  providers: [DataService, BasketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
