import { Component } from '@angular/core';
import { DummyApiService } from '../../services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css'],
})
export class DummyApiComponent {
  constructor(private dummyApiService: DummyApiService) {}
  allPost: any[] = [];

  ngOnInit() {
    this.getApiPosts;
  }
  getApiPosts() {
    this.dummyApiService.getApiPosts().subscribe(
      (response: any) => {
        console.log(response);
        this.allPost = response.posts;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }
}
