import { Component, Input } from "@angular/core";
import { OAuth } from "oauthio-web";
@Component({
  selector: "oauth",
  templateUrl: "./oauth.component.html",
  styleUrls: ["./oauth.component.css"]
})
export class OauthComponent {
  @Input() provider: string;
  constructor() {
    OAuth.initialize("Fcdn9FAU7dhM0TzQ7umztVA28NM");
  }

  Auth() {
    OAuth.popup(this.provider)
      .done(res => {
        console.log(res.access_token);
      })
      .fail(err => {
        //todo when the OAuth flow failed
      });
  }
}
