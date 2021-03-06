import { Component, OnInit } from '@angular/core';

// Services
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
      private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

}
