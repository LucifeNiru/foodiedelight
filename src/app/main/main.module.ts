import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { MainComponent } from './main.component';
import { MaterialModule } from '../common/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AddUpdatePopupComponent } from '../popups/add-update-popup/add-update-popup.component';
import { BrowserModule } from '@angular/platform-browser';
import { DeleteConfirmationPopupComponent } from '../popups/delete-confirmation-popup/delete-confirmation-popup.component';

@NgModule({
  declarations: [MainComponent, HeaderBarComponent, AddUpdatePopupComponent, DeleteConfirmationPopupComponent],
  imports: [CommonModule, HttpClientModule, MainRoutingModule, MaterialModule],
})
export class MainModule {}
