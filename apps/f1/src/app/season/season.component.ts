import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'f1-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.scss'],
})
export class SeasonComponent {
  seasons: any;
  winner: string = '';
  season: string = '';
  constructor(private service: SharedService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //Extrating year and winner details from url params
    this.season = this.activatedRoute.snapshot.paramMap.get('year') ?? "";
    this.winner = this.activatedRoute.snapshot.paramMap.get('winner') ?? "";

    //Fetching the list of races from a season
    this.service.getRaces(this.season).subscribe((data: string) => {
      this.seasons = JSON.parse(data).MRData.RaceTable.Races;
    })
  }
}
