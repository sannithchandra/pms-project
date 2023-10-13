import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Property } from 'src/app/models/product';
import { ApiService } from 'src/app/service/api.service';

interface User {
  firstName: string;
  lastName: string;
}
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent {
  constructor(
    public dialog: MatDialog,
    private service:ApiService,
    private _snakbar:MatSnackBar) 
    {}

//




//

  public gridData:Property[]=[];

  // onSubmit(formValue:any) {
  //   console.log(formValue);
  // }


  //

  ngOnInit() {
    this.getProperty();
  }
  //



  //
  public openSnackBar(message:string){
    this._snakbar.open(message,"",{duration:5000});
    }
  //


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
    placesNearby: new FormControl(''),
  });
  public submit(){
    if(this.addUserForm.valid){
      console.log("valid");
    }
  return this.addUserForm.value;
  }
  onSubmit(formValue:any) {

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
      "placesNearby": totalData.placesNearby,
    }
    console.log(data);
    console.log(formValue);
    this.service.postProperties(formValue).subscribe((res:any)=>{
      // if(res){
        this.openSnackBar("Successful");
        this.getProperty();

      // }
      // else{
      //   this.openSnackBar("error");
      // }
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
  


  public streetName:string;
  public getProperty(){
    this.service.getProperties().subscribe((value:any)=>{
      console.log(value)
      this.gridData=value;
      // this.streetName=value.streetName;
      console.log(this.gridData);
    });
  }


}
