import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AppService, private router: Router) {}

  login() {
    if (this.authService.login(this.email, this.password)) {
      this.router.navigate(['/card']);
    }
  }
}
