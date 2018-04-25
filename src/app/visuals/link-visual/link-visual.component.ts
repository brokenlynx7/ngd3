
// path : visuals/shared/link-visual.component.ts
import { Component, Input, OnInit } from "@angular/core";
import { Link } from "../../d3";

@Component({
	selector: "[linkVisual]",
	templateUrl: `link-visual.component.html`,
	styleUrls: ["./link-visual.style.scss"]
})
export class LinkVisualComponent implements OnInit {
	@Input("linkVisual") link: Link;

	ngOnInit() {
		// console.log("link: ", this.linkVisual);
	}
}
