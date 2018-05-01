
// path : visuals/shared/node-visual.component.ts
import { Component, Input } from "@angular/core";
import { Node } from "../../d3";

@Component({
	selector: "[nodeVisual]",
	templateUrl: `node-visual.component.html`,
	styleUrls: [`./node-visual.style.scss`]
})
export class NodeVisualComponent {
	@Input("nodeVisual") node: Node;o

}
