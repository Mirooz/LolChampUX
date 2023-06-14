import { trigger, transition, style, query, animateChild, group, animate } from "@angular/animations";

export const slideInAnimation = trigger('slideInAnimation', [
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('1s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('1s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);