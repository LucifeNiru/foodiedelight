import { Component, Injector, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonSharedService } from '../common/common-shared.service';
import { CardData } from '../models/carddata-model';
import { AddUpdatePopupComponent } from '../popups/add-update-popup/add-update-popup.component';
import { DeleteConfirmationPopupComponent } from '../popups/delete-confirmation-popup/delete-confirmation-popup.component';
import { DeleteRestaurantDataService } from '../services/delete-restraunt-data.service';
import { GetRestaurantDataService } from '../services/get-restaurant-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  _getRestaurantDataService: any;

  _deleteRestaurantDataService: any;

  _commonSharedService: any;

  cardDataList: CardData[] = [] as CardData[]

  constructor(private injector: Injector, public dialog: MatDialog) { }

  ngOnInit(): void {
    this._getRestaurantDataService = this.injector.get(GetRestaurantDataService)
    this._deleteRestaurantDataService = this.injector.get(DeleteRestaurantDataService)

    this._commonSharedService = this.injector.get(CommonSharedService)

    this.getRestrauntData()

  }

  getRestrauntData(){
    this._getRestaurantDataService.getRestaurantData()
    .subscribe({
      next: (res: CardData[]) => {
        this.cardDataList = res;
        console.log(res)
      }, error: (err: any) => {

      }
    })
  }

  openPopUp(type: string){
    this._commonSharedService.type.next(type);
    if(this._commonSharedService.type.getValue()){
      
      const dialogRef = this.dialog.open(AddUpdatePopupComponent, {
        height: '70vh',
        width: '50vw',
        hasBackdrop: true,
        backdropClass: 'backdropBackground',
        data: {
          title: 'Add',
          cardData: {},
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        if (result) {
          console.log(result)
          this.getRestrauntData()
        }
      });

    }
  }

  editRestraunt(data: CardData){
    const dialogRef = this.dialog.open(AddUpdatePopupComponent, {
      height: '70vh',
      width: '50vw',
      hasBackdrop: true,
      backdropClass: 'backdropBackground',
      data: {
        title: 'Update',
        cardData: data,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getRestrauntData()
      }
    });
  }

  deleteRestraunt(data: CardData){
    const dialogRef = this.dialog.open(DeleteConfirmationPopupComponent, {
      height: 'auto',
      width: 'auto',
      hasBackdrop: true,
      backdropClass: 'backdropBackground',
    
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result == 'S') {
        this._deleteRestaurantDataService.deleteRestaurantData(data)
        .subscribe({
          next: (res: any) => {
            this.getRestrauntData()
          }, error: (err: any) => {

          }
        })
      }
    });
  }

}
