import { Component, inject } from '@angular/core';
import { AppNameComponent } from '../app-name/app-name.component';
import { ButtonComponent } from '../button/button.component';
import { Router, RouterEvent } from '@angular/router';

@Component({
    selector: 'art-header',
    imports: [AppNameComponent, ButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
  router = inject(Router);

  redirectToLogin() {
    this.router.navigateByUrl('login');
  }

  redirectToHome() {
    this.router.navigateByUrl('home');
  }
}
