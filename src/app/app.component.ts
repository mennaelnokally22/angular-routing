import { Component } from "@angular/core";
import {
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  Router,
  Event,
} from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "blogging-app-mean";
  isLoading: boolean = true;
  constructor(routerService: Router) {
    routerService.events.subscribe((routerEvent: Event) => {
      if (routerEvent instanceof NavigationStart) this.isLoading = true;
      else if (
        routerEvent instanceof NavigationCancel ||
        routerEvent instanceof NavigationEnd ||
        routerEvent instanceof NavigationError
      )
        this.isLoading = false;
    });
  }
}
