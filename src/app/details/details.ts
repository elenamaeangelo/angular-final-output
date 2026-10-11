import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Pet } from '../pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-details',
  imports: [NgOptimizedImage, ReactiveFormsModule, RouterLink],
  templateUrl: './details.html',
  styleUrl: './details.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.escape)': 'closeDialogs()',
  },
})
export class Details {
  private readonly route = inject(ActivatedRoute);
  private readonly petService = inject(PetService);
  private readonly formBuilder = new FormBuilder().nonNullable;

  protected readonly pet: Pet | undefined = this.petService.getPetById(
    Number(this.route.snapshot.paramMap.get('id')),
  );
  protected readonly adoptionOpen = signal(false);
  protected readonly adoptionComplete = signal(false);

  protected readonly adoptionForm = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    home: ['', Validators.required],
    experience: [''],
  });

  protected startAdoption(): void {
    this.adoptionForm.reset();
    this.adoptionOpen.set(true);
  }

  protected closeDialogs(): void {
    this.adoptionOpen.set(false);
    this.adoptionComplete.set(false);
  }

  protected confirmAdoption(): void {
    if (this.adoptionForm.invalid) {
      this.adoptionForm.markAllAsTouched();
      return;
    }

    if (!this.pet) {
      return;
    }

    this.petService.markAdopted(this.pet.id);
    this.adoptionOpen.set(false);
    this.adoptionComplete.set(true);
  }
}
