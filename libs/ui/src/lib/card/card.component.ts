import { Component, Input } from '@angular/core';

@Component({
  selector: 'f1-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() year: string = '';
  @Input() name: string = '';
  @Input() isChampion: boolean = false;
  
}
