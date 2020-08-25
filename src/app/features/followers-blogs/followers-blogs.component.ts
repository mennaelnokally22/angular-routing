import { FollowersBlogsService } from "../../_services/followers-blogs.service";
import { Blog } from "../../_models/blog";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "app-followers-blogs",
  templateUrl: "./followers-blogs.component.html",
  styleUrls: ["./followers-blogs.component.css"],
})
export class FollowersBlogsComponent implements OnInit {
  constructor(private followedBlogService: FollowersBlogsService) {}
  blogsData: Blog[];
  isLoading: boolean = true;
  ngOnInit() {
    this.followedBlogService.getFollowingBlogs().subscribe(
      (blogs) => {
        this.blogsData = blogs;
        console.log(blogs);
      },
      (err) => {
        console.log(err);
      },
      () => (this.isLoading = false)
    );
  }
}
