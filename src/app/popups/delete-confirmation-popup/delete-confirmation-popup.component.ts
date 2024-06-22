import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-popup',
  templateUrl: './delete-confirmation-popup.component.html',
  styleUrls: ['./delete-confirmation-popup.component.scss']
})
export class DeleteConfirmationPopupComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialog: MatDialog, public dialogRef: MatDialogRef<DeleteConfirmationPopupComponent>) { }

  ngOnInit(): void {
    
  }

  submit(flag: string){
    if(flag == 'S'){
      this.dialogRef.close('S')
    }
    else if(flag == 'E'){
      this.dialogRef.close('E')
    }
  }

}
