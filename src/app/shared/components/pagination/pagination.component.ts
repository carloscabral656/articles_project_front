import { Component, input, output } from '@angular/core';
import { ChevronRight, LucideAngularModule } from 'lucide-angular';
import { ChevronLeft } from 'lucide-angular/src/icons';

@Component({
    selector: 'art-pagination',
    templateUrl: './pagination.component.html',
    styleUrl: './pagination.component.scss',
    imports: [LucideAngularModule]
})
export class PaginationComponent {
  page = input<number>(1);
  total = input<number>(0);
  pageSize = input<number>(10);
  pageChange = output<number>();

  readonly ChevronRight = ChevronRight;
  readonly ChevronLeft = ChevronLeft;

  get totalPages(): number {
    return Math.ceil(this.total() / this.pageSize());
  }

  get hasPrevious(): boolean {
    return this.page() > 1;
  }

  get hasNext(): boolean {
    return this.page() < this.totalPages;
  }

  previous(): void {
    if (this.hasPrevious) {
      this.pageChange.emit(this.page() - 1);
    }
  }

  next(): void {
    if (this.hasNext) {
      this.pageChange.emit(this.page() + 1);
    }
  }

  goTo(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page);
    }
  }
}
