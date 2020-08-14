import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { Blog } from "../_models/blog";
import { Observable } from "rxjs";
import { BlogsService } from "./blogs.service";

@Injectable({
  providedIn: "root",
})
export class BlogResolverService implements Resolve<Blog> {
  constructor(private blogService: BlogsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Blog | Observable<Blog> | Promise<Blog> {
    return this.blogService.getBlogById(route.paramMap.get("id"));
  }
}
