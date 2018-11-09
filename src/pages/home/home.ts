import { Component } from '@angular/core';
import {AlertController, NavController,ActionSheetController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController,
    public actionSheet: ActionSheetController,
    public navCtrl: NavController) {

  }

  showAction(){
    const actionSheet = this.actionSheet.create({
      title: 'Test Action',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
  showAlert(){
    const alert = this.alertCtrl.create({
    title:'Confirm Answer',
    subTitle:'arsi Binkasem',
    buttons: ['OK']  
  });
  alert.present();
}
}
