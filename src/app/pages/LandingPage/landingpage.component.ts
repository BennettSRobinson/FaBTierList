import { CommonModule } from "@angular/common";
import { Component, ViewEncapsulation } from "@angular/core";
import { MaterialModule } from "src/app/material.module";

@Component({
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './landingpage.component.html',
  encapsulation: ViewEncapsulation.None
})
export class LandingPageComponent {

  constructor(){}
}
