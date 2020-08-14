import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Blog } from "src/app/_models/blog";
@Component({
  selector: "app-blog-details",
  templateUrl: "./blog-details.component.html",
  styleUrls: ["./blog-details.component.css"],
})
export class BlogDetailsComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}
  blog: Blog;

  ngOnInit() {
    this.blog = this.activeRoute.snapshot.data["resolvedBlog"].blog;
    console.log(this.blog);
  }
}
