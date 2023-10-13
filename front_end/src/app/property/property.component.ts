import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PropertyDialogComponent } from '../property-dialog/property-dialog.component';
import { Property } from '../models/product';
import { ApiService } from '../service/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.scss'],
})
export class PropertyComponent implements OnInit {
  isFormVisible: boolean = false;

  constructor(public dialog: MatDialog,private service:ApiService,private _snakbar:MatSnackBar) {}
  ngOnInit() {
    this.getProperty();
  }

  public prop() {
    console.log('event clicked');
  }
  // showForm() {
  //   this.isFormVisible = true;
  // }
  public gridData:Property[]=[];
  user: Property;
  users: Property[] = [];
  //my code cards
  addUserForm = new FormGroup({
    propertyName: new FormControl(''),
    propertyType: new FormControl(''),
    status: new FormControl(''),
    rentPerMonth: new FormControl(''),
    streetName: new FormControl(''),
    city: new FormControl(''),
    state: new FormControl(''),
    zipCode: new FormControl(''),
    description: new FormControl(''),
    maintenanceHistory: new FormControl(''),
  });
  public submit(){
    if(this.addUserForm.valid){
      console.log("valid");
    }
  return this.addUserForm.value;
  }
  showForm() {
    const totalData={...this.submit()};
    const data={
      "propertyName": totalData.propertyName,
      "propertyType":totalData.propertyType,
      "status": totalData.status,
      "rentPerMonth": totalData.rentPerMonth,
      "streetName": totalData.streetName,
      "city": totalData.city,
      "state": totalData.state,
      "zipCode": totalData.zipCode,
      "description": totalData.description,
      "maintenanceHistory": totalData.maintenanceHistory,
    }
    this.service.postProperties(data).subscribe((res:any)=>{
      if(res){
        this.openSnackBar("Successful");

      }
      else{
        this.openSnackBar("error");
      }
    })
    //   .saveUserTyped(this.user)
    //   .subscribe((response: UserInfo) => {
    //     console.log(response);

    //     this.users.push({ name: response.name, job: response.job });
    //     this.usersTyped.push({
    //       propertyname: response.propertyname,
    //       address: response.address,
    //       currentstatus: response.currentstatus,
    //       rent: response.rent,
    //       leasedate: response.leasedate,

    //     });
    //   });
    }
  //my code cards
public openSnackBar(message:string){
this._snakbar.open(message,"",{duration:5000});
}



  openDialog() {
    this.dialog.open(PropertyDialogComponent, {
      width: '25%',
      height: '100%',
      position: { right: '0' },
      data: {
        animal: 'panda',
      },
    });
  }
  public streetName:string;
  public getProperty(){
    this.service.getProperties().subscribe((value:any)=>{
      console.log(value)
      this.gridData=value;
      // this.streetName=value.streetName;
      console.log(this.gridData);
    });
  }

  public deletePropertyDetails(id:number){
  this.service.deleteProperty(id).subscribe((val)=>{
    console.log("delete",val);
    this.openSnackBar("Property deleted successfully");
    this.getProperty();

  })
  } 
}
