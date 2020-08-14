import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { BlogDetailsComponent } from "./blog-details/blog-details.component";
import { BlogResolverService } from "../_services/blog-resolver.service";
import { FollowersBlogsComponent } from "./followers-blogs/followers-blogs.component";

@NgModule({
  declarations: [BlogDetailsComponent, FollowersBlogsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "followers-blogs",
        component: FollowersBlogsComponent,
      },
      {
        path: ":id",
        component: BlogDetailsComponent,
        resolve: { resolvedBlog: BlogResolverService },
      },
    ]),
  ],
})
export class FeaturesModule {}
