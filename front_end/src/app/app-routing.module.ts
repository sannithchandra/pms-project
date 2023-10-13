import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TenantsComponent } from './tenants/tenants.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PropertyComponent } from './property/property.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { FinanceComponent } from './finance/finance.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'propertymanagement', component: PropertyComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'tenants', component: TenantsComponent },
  { path: 'maintanence', component: MaintenanceComponent },
  { path: 'financial', component: FinanceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
