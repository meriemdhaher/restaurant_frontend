import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { HeroComponent } from './page/hero/hero.component';
import { AboutComponent } from './page/about/about.component';
import { MenuComponent } from './page/menu/menu.component';
import { SpecialsComponent } from './page/specials/specials.component';
import { EventsComponent } from './page/events/events.component';
import { BookTableComponent } from './page/book-table/book-table.component';
import { TestimonialsComponent } from './page/testimonials/testimonials.component';
import { GalleryComponent } from './page/gallery/gallery.component';
import { ChefsComponent } from './page/chefs/chefs.component';
import { ContactComponent } from './page/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TopbarComponent,
    HeroComponent,
    AboutComponent,
    MenuComponent,
    SpecialsComponent,
    EventsComponent,
    BookTableComponent,
    TestimonialsComponent,
    GalleryComponent,
    ChefsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
