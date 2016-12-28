import { Component, OnInit } from '@angular/core';

import { FeedServiceService } from './services/feed-service.service';

import { FeedEntry } from './model/feed-entry';

import {MdCoreModule} from '@angular2-material/core';

import {MdCard} from '@angular2-material/card';

import {MdButton} from '@angular2-material/button';

import {MdIcon} from '@angular2-material/icon'

import {MdToolbar} from '@angular2-material/toolbar'

// Add the RxJS Observable operators we need in this app.

import '../../node_modules/rxjs/operator';





@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css'],

  providers: [FeedServiceService]

})

export class AppComponent implements OnInit {



  private feedUrl: string = 'https%3A%2F%2Fwww.becompany.ch%2Fen%2Fblog%2Ffeed.xml';

  private feeds: Array<FeedEntry> = [];



  constructor (

    private feedService: FeedServiceService

  ) {}



  ngOnInit() {

    this.refreshFeed();

  }



  private refreshFeed() {

    this.feeds.length = 0;

    // Adds 1s of delay to provide user's feedback.

    this.feedService.getFeedCont(this.feedUrl).delay(1000)

      .subscribe(

        feed => this.feeds = feed.items,

        error => console.log(error));

  }



}
