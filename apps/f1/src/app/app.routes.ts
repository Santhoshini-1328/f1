import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { SeasonComponent } from './season/season.component';
import { WinnersComponent } from './winners/winners.component';


//Adding routes of winners and seasons, passing params to seasons, redirecting to winners by default
export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/winners', pathMatch: 'full' 
    },
    {
        path: 'winners',
        component: WinnersComponent
    },
    {
        path: 'seasons/:year/:winner',
        component: SeasonComponent
    }
];
