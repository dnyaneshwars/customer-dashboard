import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-edit-customer',
  templateUrl: './add-edit-customer.component.html',
  styleUrls: ['./add-edit-customer.component.scss']
})
export class AddEditCustomerComponent {
  customerForm: FormGroup;
  customers: any[] = [];
  constructor(private fb: FormBuilder, private customerService: CommonService,@Inject(MAT_DIALOG_DATA) public data: any,) {
    if(data.edit){
      const customerData=this.data.data;
      this.customerForm = this.fb.group({
        name: [customerData.name, [Validators.required, Validators.minLength(2)]],
        email: [customerData.email, [Validators.required, Validators.email]],
        phoneNumber: [customerData.phoneNumber, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      });
    }else{
      this.customerForm = this.fb.group({
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      });
    }
    
    
  }
  addCustomer(){
    if (this.customerForm.valid) {
      const customer = this.customerForm.value;
     this.data.edit?this.customerService.updateCustomer({...customer,id:this.data.data.id}):this.customerService.addCustomer(customer);
    }
  }
}
