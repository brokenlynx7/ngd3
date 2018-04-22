
// path : visuals/shared/link-visual.component.ts
import { Component, Input } from "@angular/core";
import { Link } from "../../d3";

@Component({
	selector: "[linkVisual]",
	template: `link-visual.component.html`
})
export class LinkVisualComponent {
	@Input("linkVisual") link: Link;
}
