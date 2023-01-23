import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee-CRUD-web-api';
  constructor(private _toastr : ToastrService,){

  }
  ngOnInit(){
    this._toastr.success("Success", "User Master");
    this._toastr.info("Info Success", "User Master");
    this._toastr.warning("warning", "User Master");
    this._toastr.error("Error", "User Master");
  }
}
