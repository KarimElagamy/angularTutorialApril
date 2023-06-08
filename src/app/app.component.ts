import { Component } from '@angular/core';
import { AccountService } from './Core/Services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AntraHRM SPA';

  constructor(private accountService:AccountService) {}

  ngOnInit(){
    if (localStorage.getItem('token') != null){
      this.accountService.ValidateJWTToken();
    }
  }
}
