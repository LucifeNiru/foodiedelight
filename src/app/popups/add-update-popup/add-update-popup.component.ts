import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CardData } from 'src/app/models/carddata-model';
import { AddRestaurantDataService } from 'src/app/services/add-restraunt-data.service';
import { UpdateRestaurantDataService } from 'src/app/services/update-restraunt-data.service';

@Component({
  selector: 'app-add-update-popup',
  templateUrl: './add-update-popup.component.html',
  styleUrls: ['./add-update-popup.component.scss']
})
export class AddUpdatePopupComponent implements OnInit {

  title: string = '';

  detsForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.pattern('[0-9]+'))
  })

  cardInfo: CardData = {} as CardData

  _addRestaurantDataService: any;
  _updateRestaurantDataService: any;

  constructor(public dialogRef: MatDialogRef<AddUpdatePopupComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog,
              public injector: Injector) { }

  ngOnInit(): void {

    this._addRestaurantDataService = this.injector.get(AddRestaurantDataService)
    this._updateRestaurantDataService = this.injector.get(UpdateRestaurantDataService)

    this.title = this.data.title
    if(this.title == 'Update'){
      this.cardInfo = this.data.cardData
      this.detsForm.setValue({
        id: this.cardInfo.id,
        name: this.cardInfo.name,
        description: this.cardInfo.description,
        location: this.cardInfo.location,
        email: this.cardInfo.email,
        phone: this.cardInfo.phone
      })
    }
  }

  addUpdateData(){

    if(this.detsForm.valid){
      if(this.title == 'Add'){
        var addpayload = {
          "name": this.detsForm.value.name,
          "description": this.detsForm.value.description,
          "location": this.detsForm.value.location,
          "email": this.detsForm.value.email,
          "phone": this.detsForm.value.phone,
        }
  
        this._addRestaurantDataService.addRestaurantData(addpayload)
        .subscribe({
          next: (res: any) => {
            console.log(res)
            this.dialogRef.close(res)
          }, error: (err: any) => {
  
          }
        })
      }
      else{
        var payload = {
          "id": this.detsForm.value.id,
          "name": this.detsForm.value.name,
          "description": this.detsForm.value.description,
          "location": this.detsForm.value.location,
          "email": this.detsForm.value.email,
          "phone": this.detsForm.value.phone,
        }
  
        this._updateRestaurantDataService.updateRestaurantData(payload)
        .subscribe({
          next: (res: any) => {
            console.log(res)
            this.dialogRef.close(res)
          }, error: (err: any) => {
  
          }
        })
      }
    }

  }

}
