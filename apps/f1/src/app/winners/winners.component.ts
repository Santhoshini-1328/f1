import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'f1-winners',
  templateUrl: './winners.component.html',
  styleUrls: ['./winners.component.scss'],
})
export class WinnersComponent {
  winners: any;

  constructor(private service: SharedService, private router: Router) { }

  ngOnInit(): void {
    //Fetching winners list fron service
    this.service.getWinnersList().subscribe((data: string) => {
      this.winners = JSON.parse(data).MRData.StandingsTable.StandingsLists;
    }, (error: Error) => {
      alert("Error while fetching data" + error)
    })
  }

  //navigating to the races list of a perticular season and 
  // passing season and  winner name as params
  goToSeason(event: any) {
    this.router.navigate(['seasons', event.season, event.DriverStandings[0].Driver.givenName])
  }
}
