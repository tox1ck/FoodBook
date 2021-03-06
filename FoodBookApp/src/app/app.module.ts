import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './ui/home/home.component';
import { SearchComponent } from './ui/search/search.component';
/* import { CoreComponent } from './core/core.component'; */
import { RecipeComponent } from './recipe/recipe.component';
import { FridgeComponent } from './fridge/fridge.component';
import { TopNavComponent } from './ui/top-nav/top-nav.component';
import { FooterNavComponent } from './ui/footer-nav/footer-nav.component';
import { SignupComponent } from './ui/signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PrivatePageComponent } from './private-page/private-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    RecipeComponent,
    FridgeComponent,
    TopNavComponent,
    FooterNavComponent,
    SignupComponent,
    LoginComponent,
    RegisterComponent,
    PrivatePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule // added for animation purposes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
