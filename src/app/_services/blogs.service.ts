import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class BlogsService {
  constructor(private httpService: HttpClient) {}

  getPagedBlogs(pageNum: Number): Observable<any> {
    return this.httpService.get(
      `${environment.backendBaseUrl}/blog/pages/${pageNum}`
    );
  }

  getBlogById(blogId: string): Observable<any> {
    return this.httpService.get(`${environment.backendBaseUrl}/blog/${blogId}`);
  }
}
