import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualityComponent } from './actuality/actuality.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PresentationComponent } from './presentation/presentation.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './presentation/navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FormationComponent } from './presentation/formation/formation.component';
import { CompetenceComponent } from './presentation/competence/competence.component';
import { ExperienceComponent } from './presentation/experience/experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ActualityComponent,
    PortfolioComponent,
    PageNotFoundComponent,
    PresentationComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    FormationComponent,
    CompetenceComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
