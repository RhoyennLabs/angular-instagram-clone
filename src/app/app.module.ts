import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavComponent } from './pages/nav/nav.component';
import { FeedComponent } from './pages/home/feed/feed.component';
import { StoriesComponent } from './pages/home/stories/stories.component';
import { UsuariosRecomendadosComponent } from './pages/home/usuarios-recomendados/usuarios-recomendados.component';
import { ReelsComponent } from './pages/reels/reels.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    FeedComponent,
    StoriesComponent,
    UsuariosRecomendadosComponent,
    ReelsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
