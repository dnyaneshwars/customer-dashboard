import { Component } from '@angular/core';
import { AddEditCustomerComponent } from '../add-edit-customer/add-edit-customer.component';
import { Dialog } from '@angular/cdk/dialog';
import { MatDialog } from '@angular/material/dialog';
import { CommonService, user } from '../../services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  customer:user[]=[];
  constructor(private dialog:MatDialog,private customerService:CommonService,private router:Router) {
    this.customer=this.customerService.getCustomers();
  }
  openDialog(){
    let dialogRef:any = this.dialog.open(AddEditCustomerComponent, {
      height: '100vh',
      width: '600px',
      position:{right:'0px', top: '0px'},
      data:{
        edit:false,
        data:[]
      }  
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
    
    
  }
  deleteCustomer(cst:user){
    this.customerService.deleteCustomer(cst.id);
  }
  editCustomer(cst:user){
    let dialogRef:any = this.dialog.open(AddEditCustomerComponent, {
      height: '100vh',
      width: '600px',
      position:{right:'0px', top: '0px'},
      data:{
        edit:true,
        data:cst
      } 
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }
  logout() {
    // Perform logout logic (clear authentication state, navigate to login, etc.)
    // For example, you can clear a token from local storage
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('customer-Data');
    this.router.navigate(['']);
  }
}
