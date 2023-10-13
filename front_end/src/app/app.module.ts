import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenantsComponent } from './tenants/tenants.component';
import { FinanceComponent } from './finance/finance.component';
import { PropertyComponent } from './property/property.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { PropertyDialogComponent } from './property-dialog/property-dialog.component';
import { NgIf } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';




@NgModule({
  declarations: [
    AppComponent,
    TenantsComponent,
    FinanceComponent,
    PropertyComponent,
    MaintenanceComponent,
    DashboardComponent,
    AddPropertyComponent,
    PropertyDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatDialogModule,
    NgIf,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
