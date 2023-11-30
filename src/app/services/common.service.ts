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
  constructor() { 
    const data:any= (localStorage.getItem('customer-Data'));
    this.customers =localStorage.getItem('customer-Data')?JSON.parse(data):[]
  }
  addCustomer(customer: any) {
    customer.id = crypto.randomUUID(); // Generate a unique ID using crypto
    this.customers.push(customer);
    localStorage.setItem('customer-Data',JSON.stringify(this.customers));
  }

  updateCustomer(customer: any) {
   
    const index = this.customers.findIndex((c) => c.id === customer.id);
    if (index !== -1) {
      this.customers[index] = customer;
    }
    localStorage.setItem('customer-Data',JSON.stringify(this.customers));
  }

  deleteCustomer(id: string) {
    const index = this.customers.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.customers.splice(index, 1);
    }
    localStorage.setItem('customer-Data',JSON.stringify(this.customers));
  }

  getCustomers() {
    return this.customers;
  }
}
