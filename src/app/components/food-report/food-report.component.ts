import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { FoodOrderService } from 'src/app/services/food-order.service';

@Component({
  selector: 'app-food-report',
  templateUrl: './food-report.component.html',
  styleUrls: ['./food-report.component.css']
})
export class FoodReportComponent {
  foodOrders: any[] = [];
  employeeDetails: any;
  totalFine: number = 0;

  constructor(
    private foodOrderService: FoodOrderService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.foodOrderService.getFoodOrderData(11).subscribe((data) => {
      console.log("food data", data)
      this.employeeDetails = data.user;
      this.foodOrders = data.reports;
      this.calculateFine();
    });
  }

  calculateFine() {
    let fine = 0;
    this.foodOrders.forEach((order) => {
      if (order.opt_ins) {
        ['breakfast', 'lunch', 'dinner'].forEach((meal) => {
          if (order.opt_ins[meal] === 'Pending') {
            fine += 100;
          }
        });
      }
    });
    this.totalFine = fine;


    this.messageService.add({
      severity: 'success',
      summary: 'Fine Calculation',
      detail: `Total Fine for the month: ₹${this.totalFine}`,
    });
  }
}
