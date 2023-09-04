import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestListComponent } from './components/test-list/test-list.component';
import { StudentsService } from './services/students.service';
import { FilterPipe } from './pipes/filter.pipe';
import { SocketService } from './services/socket.service';

@NgModule({
  declarations: [
    AppComponent,
    TestListComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [StudentsService, SocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
