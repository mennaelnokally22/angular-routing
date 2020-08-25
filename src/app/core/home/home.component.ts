import { Component, OnInit } from "@angular/core";
import { BlogsService } from "../../_services/blogs.service";
import { PageEvent } from "@angular/material/paginator";
import { AuthService } from "src/app/_services/auth.service";
import { Blog } from "src/app/_models/blog";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  isLoading: boolean = true;
  blogsData: Array<Blog>;
  pageCount: number = 1;
  pageEvent: PageEvent;
  user: Object = null;
  constructor(
    private blogsService: BlogsService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.currentUser;
    this.blogsService.getPagedBlogs(1).subscribe(
      ({ blogs, count }) => {
        console.log(blogs, count);
        this.blogsData = blogs;
        this.pageCount = count;
      },
      (err) => console.log(err),
      () => (this.isLoading = false)
    );
  }

  pageChanges(ev: PageEvent): void {
    console.log(ev);
    this.blogsService.getPagedBlogs(ev.pageIndex + 1).subscribe(
      ({ blogs }) => {
        console.log(blogs);
        this.blogsData = blogs;
      },
      (err) => console.log(err),
      () => console.log("completed")
    );
  }
}
