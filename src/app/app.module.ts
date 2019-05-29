import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TestEditorComponent} from './test-editor/test-editor.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponentComponent } from './card-component/card-component.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HeaderComponent } from './header/header.component';
import { StudentListComponent } from './student-list/student-list.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    CarouselComponent,
    HeaderComponent,
    StudentListComponent,
    FooterComponent,
    TestEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2CarouselamosModule,  
    HttpClientModule
  ],  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
