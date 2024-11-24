import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FoodOrderService } from './services/food-order.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Import for animations
import { FoodReportComponent } from './components/food-report/food-report.component';

// PrimeNG Modules  
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { MessageModule } from 'primeng/message';

@NgModule({
  declarations: [
    AppComponent,
    FoodReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    CardModule,
    ToastModule,
    MessageModule,
    BrowserAnimationsModule
  ],
  providers: [FoodOrderService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
