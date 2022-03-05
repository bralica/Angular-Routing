import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './user/auth.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle = 'Acme Product Management';

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get userName(): string {
    if (this.authService.currentUser) {
      return this.authService.currentUser.userName;
    }
    return '';
  }

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  logOut(): void {
    // Do some processing
    this.authService.logout();
    // this.router.navigate(['/welcome']);
    // this.router.navigate('/welcome');
    this.router.navigateByUrl('/welcome');
    console.log('Log out');
  }
}
