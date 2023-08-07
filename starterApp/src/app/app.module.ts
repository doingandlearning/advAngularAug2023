import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { CalculatorService } from './services/calculator.service';
import environments from 'src/environment';
import { LoggerService } from './services/logger.service';
import { RatingComponent } from './rating/rating.component';

const environment = 'production';

// function loggingFactory(environment: string) {
//   if(environment === 'development') {
//     return new ConsoleLoggerService()
//   } else if (environment === 'staging') {
//     return new StagingApiLoggerService()
//   } else if (environment === 'production') {
//     return new ProductionApiLoggerService()
//   }
// }

@NgModule({
  declarations: [AppComponent, GreetingComponent, RatingComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [
    CalculatorService,
    {
      provide: 'Alternative',
      useClass: CalculatorService,
    },
    {
      provide: 'API_URL',
      useValue: environments[environment].API_KEY,
    },
    // {
    //   provide: 'ExtraLogging',
    //   useFactory: loggingFactory,
    //   deps: ['API_KEY'],
    // },
    LoggerService,
    {
      provide: 'OtherAlternate',
      useExisting: LoggerService,
    },
    // { provide: 'LOGGER_STRATEGY', useClass: ConsoleLogger, multi: true },
    // { provide: 'LOGGER_STRATEGY', useClass: AlertLogger, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// import { Component, Inject } from '@angular/core';

// @Component({
//   selector: 'app-logger',
//   template: `<button (click)="logMessage('Hello!')">Log Message</button>`
// })
// export class LoggerComponent {

//   constructor(@Inject('LOGGER_STRATEGY') private loggers: LoggerStrategy[]) {}

//   logMessage(message: string): void {
//     this.loggers.forEach(logger => logger.log(message));
//   }

// }
