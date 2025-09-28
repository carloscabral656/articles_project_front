import { Component, inject } from '@angular/core';
import { ButtonComponent } from '../../../shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
    selector: 'art-home-page',
    imports: [ButtonComponent],
    templateUrl: './home-page.component.html',
    styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  router = inject(Router);

  redirectToLogin() {
    this.router.navigateByUrl('login');
  }
}
