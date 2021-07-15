import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  tweets=[];
  segment='home';

  opts={
    slidesPerView:4.5,
    spaceBetween:10,
    slidesOffsetBefore: 0
  };

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://devdactic.fra1.digitaloceanspaces.com/twitter-ui/tweets.json')
    .subscribe((data: any)=>{
        // console.log(data.tweets[1]);
      this.tweets=data.tweets;
    });
  }

}
