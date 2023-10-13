import { Component, Inject } from '@angular/core';
import { DialogData } from '../property/property.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-property-dialog',
  templateUrl: './property-dialog.component.html',
  styleUrls: ['./property-dialog.component.scss'],
})
export class PropertyDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
