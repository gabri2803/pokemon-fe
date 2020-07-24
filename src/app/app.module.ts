import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './componenti/card/card.component';
import { ListComponent } from './componenti/list/list.component';
import { MainComponent } from './componenti/main/main.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './componenti/modal/modal.component';
import { NavbarComponent } from './componenti/navbar/navbar.component';
import { PokemonService } from './servizi/pokemon.service';
import { SidebarComponent } from './componenti/sidebar/sidebar.component';
import { TypeComponent } from './componenti/type/type.component';
import { ListByTypeComponent } from './componenti/list-by-type/list-by-type.component';
import { ButtonComponent } from './componenti/button/button.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    MainComponent,
    ModalComponent,
    NavbarComponent,
    SidebarComponent,
    TypeComponent,
    ListByTypeComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
