import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage} from '../pages/chat/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';


var config = {
    apiKey: "AIzaSyDa-mAf0dUVxY-B3DtDn8WD--YRTjdngiQ",
    authDomain: "realtimechat-c19aa.firebaseapp.com",
    databaseURL: "https://realtimechat-c19aa.firebaseio.com",
    projectId: "realtimechat-c19aa",
    storageBucket: "realtimechat-c19aa.appspot.com",
    messagingSenderId: "981520778328"
  };
  
@NgModule({
  declarations: [
    MyApp,
    HomePage,
	ChatPage,
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(config),
	AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
