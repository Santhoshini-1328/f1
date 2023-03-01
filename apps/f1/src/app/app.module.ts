import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { UiModule } from '@f1/ui';
import { HttpClientModule } from '@angular/common/http';
import { SeasonComponent } from './season/season.component';
import { WinnersComponent } from './winners/winners.component';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    SeasonComponent,
    WinnersComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UiModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
