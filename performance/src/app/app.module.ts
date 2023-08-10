import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OnPushComponent,
    LifeCycleComponent,
    UserListComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ScrollingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
