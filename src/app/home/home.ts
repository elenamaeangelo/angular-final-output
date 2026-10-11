import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly petService = inject(PetService);
  protected readonly searchText = signal('');
  protected readonly activeFilter = signal<'All' | 'Dog' | 'Cat'>('All');
  protected readonly filteredPets = computed(() => {
    const query = this.searchText().trim().toLowerCase();
    const filter = this.activeFilter();

    return this.petService.pets().filter(
      (pet) =>
        !pet.adopted &&
        (filter === 'All' || pet.type === filter) &&
        (!query ||
          `${pet.name} ${pet.breed} ${pet.location}`
            .toLowerCase()
            .includes(query)),
    );
  });

  protected setFilter(filter: 'All' | 'Dog' | 'Cat'): void {
    this.activeFilter.set(filter);
  }

  protected updateSearch(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.searchText.set(event.target.value);
    }
  }
}
