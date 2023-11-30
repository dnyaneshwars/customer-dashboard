import { Injectable } from '@angular/core';
export interface user {
id: string;
name: string;
phoneNumber:Number,
email:string

}
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  customers :user[] =[];
  constructor() { }
  addCustomer(customer: any) {
    customer.id = crypto.randomUUID(); // Generate a unique ID using crypto
    this.customers.push(customer);
  }

  updateCustomer(customer: any) {
    console.log(customer);
    const index = this.customers.findIndex((c) => c.id === customer.id);
    if (index !== -1) {
      this.customers[index] = customer;
    }
  }

  deleteCustomer(id: string) {
    const index = this.customers.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
  }

  getCustomers() {
    return this.customers;
  }
}
