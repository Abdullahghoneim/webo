import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-connectus',
  templateUrl: './connectus.component.html',
  styleUrls: ['./connectus.component.css']
})
export class ConnectusComponent {

  name: String
  email
  phone
  message: String
  constructor(private _flashMessagesService: FlashMessagesService) { }

  onSubmit(formValue) {
    console.log(formValue)
    this._flashMessagesService.show('Massage  Sent Successfuly , Thanks For Connecting With Us .  !', { cssClass: 'alert-success', timeout: 5000 });

  }

}
