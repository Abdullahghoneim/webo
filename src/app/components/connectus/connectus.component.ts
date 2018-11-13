import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-connectus',
  templateUrl: './connectus.component.html',
  styleUrls: ['./connectus.component.css']
})
export class ConnectusComponent {

  name: String
  email
  phone
  message : String
  constructor() { }

  onSubmit(formValue) {
    console.log(formValue)
  }

}
