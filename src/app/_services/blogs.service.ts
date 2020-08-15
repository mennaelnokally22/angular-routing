import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { Blog } from "../_models/blog";
@Injectable({
  providedIn: "root",
})
export class BlogsService {
  constructor(private httpService: HttpClient) {}

  getPagedBlogs(pageNum: Number): Observable<{ blogs: Blog[]; count: number }> {
    return this.httpService.get<{ blogs: Blog[]; count: number }>(
      `${environment.backendBaseUrl}/blog/pages/${pageNum}`
    );
  }

  getBlogById(blogId: string): Observable<Blog> {
    return this.httpService.get<Blog>(
      `${environment.backendBaseUrl}/blog/${blogId}`
    );
  }
}
