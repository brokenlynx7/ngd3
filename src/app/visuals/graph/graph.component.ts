
	// path : visuals/graph/graph.component.ts
	import { Component, Input, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, OnInit } from "@angular/core";
	import { D3Service, ForceDirectedGraph, Node } from "../../d3";

	@Component({
		selector: "graph",
		template: `graph.component.html`,
		styleUrls: ["./graph.component.css"]
	})
	export class GraphComponent implements AfterViewInit, OnInit {
		@Input("nodes") nodes;
		@Input("links") links;
		private _options: { width, height } = { width: 800, height: 600 };

		graph: ForceDirectedGraph;

		constructor(private d3Service: D3Service) { }

		ngOnInit() {
			/** Receiving an initialized simulated graph from our custom d3 service */
			this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
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
