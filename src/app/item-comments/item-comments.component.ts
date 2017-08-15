import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HackerNewsAPIService } from '../hackernews-api.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-item-comments',
  templateUrl: './item-comments.component.html',
  styleUrls: ['./item-comments.component.scss']
})
export class ItemCommentsComponent implements OnInit {
  sub: any;
  item;

  constructor(
    private _hackerNewsAPIService: HackerNewsAPIService,
    private route: ActivatedRoute,
    private _location: Location
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const itemID = +params['id'];
      this._hackerNewsAPIService.fetchComments(itemID).subscribe(data => {
        this.item = data;
      }, error => console.log('Could not load item' + itemID));
    });
  }

  goBack() {
    this._location.back();
  }
}
