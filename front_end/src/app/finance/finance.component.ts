import { Component, NgModule } from '@angular/core';
import { ApiService } from '../service/api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss'],
})
export class FinanceComponent {
  // my table finance code
  displayedColumns: any[] = ['dateCreated', 'name', 'transactionId', 'creditDebit'];
  constructor(
    private service:ApiService
  ) { }
  ngOnInit(){
    this.getFinance();
  }
  public gridData:Product[]=[];
  public getFinance(){
    this.service.getProduct().subscribe((value:any)=>{
      console.log(value)
      this.gridData=value;
      console.log(this.gridData);
    });
  }
}

// export interface PeriodicElement {
//   name: string | number;
//   position: number | string;
//   weight: number | string;
//   symbol: string | number;
// }
