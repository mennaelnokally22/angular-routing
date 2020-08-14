import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { LoginComponent } from "./core/login/login.component";

const routes: Routes = [
  { path: "log-in", component: LoginComponent },
  {
    path: "blog",
    loadChildren: () =>
      import("./features/features.module").then((m) => m.FeaturesModule),
  },
  { path: "", component: HomeComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
