import { Injectable, signal } from '@angular/core';
import { Pet } from './pet';

@Injectable({ providedIn: 'root' })
export class PetService {
  private readonly petList = signal<Pet[]>([
    {
      id: 1,
      name: 'Milo',
      type: 'Dog',
      breed: 'Golden Retriever mix',
      age: '2 years',
      sex: 'Male',
      size: 'Medium',
      location: 'Brooklyn, NY',
      image:
        'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1000&q=85',
      description:
        'Milo is a sunshine kind of dog. He loves long walks, squeaky toys, and curling up beside his favorite people after a day of adventures.',
      traits: ['Great with kids', 'Loves walks', 'House-trained'],
      adopted: false,
    },
    {
      id: 2,
      name: 'Cleo',
      type: 'Cat',
      breed: 'Domestic shorthair',
      age: '1 year',
      sex: 'Female',
      size: 'Small',
      location: 'Queens, NY',
      image:
        'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1000&q=85',
      description:
        'Cleo is a curious little companion who greets every day with a soft purr. Her ideal home has a sunny window and a cozy lap to call her own.',
      traits: ['Loves cuddles', 'Indoor cat', 'Playful'],
      adopted: false,
    },
    {
      id: 3,
      name: 'Benny',
      type: 'Dog',
      breed: 'Beagle',
      age: '4 years',
      sex: 'Male',
      size: 'Medium',
      location: 'Jersey City, NJ',
      image:
        'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1000&q=85',
      description:
        'Benny is an easygoing explorer with a nose for new trails. He is happiest with a family who can share a little time outdoors every day.',
      traits: ['Easygoing', 'Knows commands', 'Loves outdoors'],
      adopted: false,
    },
    {
      id: 4,
      name: 'Luna',
      type: 'Cat',
      breed: 'Tabby',
      age: '8 months',
      sex: 'Female',
      size: 'Small',
      location: 'Brooklyn, NY',
      image:
        'https://images.unsplash.com/photo-1543852786-1cf6624b9987?auto=format&fit=crop&w=1000&q=85',
      description:
        'Luna is a bright, affectionate kitten who turns cardboard boxes into castles. She is ready to bring a little extra joy to her forever home.',
      traits: ['Very playful', 'Good with cats', 'Loves attention'],
      adopted: false,
    },
    {
      id: 5,
      name: 'Archie',
      type: 'Dog',
      breed: 'Corgi mix',
      age: '3 years',
      sex: 'Male',
      size: 'Small',
      location: 'Hoboken, NJ',
      image:
        'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=85',
      description:
        'Archie may have short legs, but he has a big heart. This cheerful fellow enjoys meeting new friends and making every walk an occasion.',
      traits: ['Friendly', 'Great on leash', 'Loves people'],
      adopted: false,
    },
    {
      id: 6,
      name: 'Poppy',
      type: 'Cat',
      breed: 'Calico',
      age: '2 years',
      sex: 'Female',
      size: 'Small',
      location: 'Queens, NY',
      image:
        'https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1000&q=85',
      description:
        'Poppy is a gentle soul who likes quiet afternoons, feather toys, and being near her people. She is ready for a calm place to settle in.',
      traits: ['Gentle', 'Quiet home', 'Lap cat'],
      adopted: false,
    },
    {
      id: 7,
      name: 'Daisy',
      type: 'Dog',
      breed: 'Labrador mix',
      age: '1 year',
      sex: 'Female',
      size: 'Medium',
      location: 'Brooklyn, NY',
      image:
        'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=85',
      description:
        'Daisy is a happy, affectionate pup who loves meeting new people. She is eager to learn and would love a family to explore the neighborhood with.',
      traits: ['Friendly', 'Eager to learn', 'Loves fetch'],
      adopted: false,
    },
    {
      id: 8,
      name: 'Oliver',
      type: 'Cat',
      breed: 'Domestic longhair',
      age: '3 years',
      sex: 'Male',
      size: 'Medium',
      location: 'Queens, NY',
      image:
        'https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1000&q=85',
      description:
        'Oliver is a mellow, fluffy companion who enjoys a peaceful home, gentle attention, and finding the coziest spot in the room.',
      traits: ['Calm nature', 'Affectionate', 'Indoor cat'],
      adopted: false,
    },
    {
      id: 9,
      name: 'Rosie',
      type: 'Dog',
      breed: 'Mixed breed',
      age: '5 years',
      sex: 'Female',
      size: 'Medium',
      location: 'Jersey City, NJ',
      image:
        'https://images.unsplash.com/photo-1551717743-49959800b1f6?auto=format&fit=crop&w=1000&q=85',
      description:
        'Rosie is a kind-hearted dog with a calm, steady nature. She enjoys a leisurely stroll and then relaxing close to her favorite people.',
      traits: ['Gentle', 'House-trained', 'Easygoing'],
      adopted: false,
    },
    {
      id: 10,
      name: 'Felix',
      type: 'Cat',
      breed: 'Domestic shorthair',
      age: '10 months',
      sex: 'Male',
      size: 'Small',
      location: 'Hoboken, NJ',
      image:
        'https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&w=1000&q=85',
      description:
        'Felix is a curious young cat who is always ready for a new toy or a sunny windowsill. He is looking for a loving home where he can grow.',
      traits: ['Curious', 'Playful', 'Loves sunny spots'],
      adopted: false,
    },
  ]);

  readonly pets = this.petList.asReadonly();

  getPetById(id: number): Pet | undefined {
    return this.petList().find((pet) => pet.id === id);
  }

  markAdopted(id: number): void {
    this.petList.update((pets) =>
      pets.map((pet) => (pet.id === id ? { ...pet, adopted: true } : pet)),
    );
  }
}
