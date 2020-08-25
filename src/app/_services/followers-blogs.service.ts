import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Blog } from "../_models/blog";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class FollowersBlogsService {
  constructor(private httpService: HttpClient) {}

  getFollowingBlogs(): Observable<Blog[]> {
    return this.httpService.get<Blog[]>(
      `${environment.backendBaseUrl}/user/followed/blogs`
    );
  }
}
