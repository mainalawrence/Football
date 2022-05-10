import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ RouterModule} from '@angular/router'
import  {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerlistComponent } from './playerlist/playerlist.component';
import { AddPlayerComponent } from './add-player/add-player.component';
import { UpdatePlayerComponent } from './update-player/update-player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerlistComponent,
    AddPlayerComponent,
    UpdatePlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule
    ,
    RouterModule.forRoot([
      {path:'add',component:AddPlayerComponent},
      {path:'',component:PlayerlistComponent},
      {path:'update',component:UpdatePlayerComponent},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
