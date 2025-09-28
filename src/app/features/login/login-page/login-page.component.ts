import { Component, input } from '@angular/core';
import { InputComponent } from '../../../shared/components/input/input.component';
import { ButtonComponent } from '../../../shared/components/button/button.component';

@Component({
    selector: 'art-login-page',
    templateUrl: './login-page.component.html',
    styleUrl: './login-page.component.scss',
    imports: [InputComponent, ButtonComponent]
})
export class LoginPageComponent {}
