
// path : visuals/graph/graph.component.ts
import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnInit } from "@angular/core";
import { D3Service, ForceDirectedGraph } from "../../d3";

@Component({
	selector: "graph",
	templateUrl: `./graph.component.html`,
	styleUrls: ["./graph.component.css"]
})
export class GraphComponent implements AfterViewInit, OnInit {
	@Input("nodes") nodes;
	@Input("links") links;
	private _options: { width, height } = { width: 800, height: 600 };

	graph: ForceDirectedGraph;

	constructor(private d3Service: D3Service, private ref: ChangeDetectorRef) { }

	ngOnInit() {
		/** Receiving an initialized simulated graph from our custom d3 service */
		this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);

		/** Binding change detection check on each tick
		 * This along with an onPush change detection strategy should enforce checking only when relevant!
		 * This improves scripting computation duration in a couple of tests I've made, consistently.
		 * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
		 */
		this.graph.ticker.subscribe((d) => {
			this.ref.markForCheck();
		});
	}

	ngAfterViewInit() {
		this.graph.initSimulation(this.options);
	}

	get options() {
		return this._options = {
			width: window.innerWidth,
			height: window.innerHeight
		};
	}
}
