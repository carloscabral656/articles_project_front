import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { UserAcronimyFormatterPipe } from '../../../utils/pipes/user-acronimy-formatter.pipe';

@Component({
  selector: 'art-user-acronimy',
  standalone: true,
  templateUrl: './user-acronimy.component.html',
  styleUrl: './user-acronimy.component.scss',
  imports: [CommonModule, UserAcronimyFormatterPipe],
})
export class UserAcronimyComponent {
  userName = input.required<string>();
}
