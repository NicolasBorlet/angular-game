import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CardService } from 'src/modules/card-module/card.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: CardService, private router: Router) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/card']);
    }
  }
}
