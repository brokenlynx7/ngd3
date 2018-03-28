
// path : visuals/graph/graph.component.ts
import { Component, Input } from '@angular/core';
import { D3Service, ForceDirectedGraph, Node } from '../../d3';

@Component({
  selector: 'graph',
  template: `graph.component.html`,
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  @Input('nodes') nodes;
  @Input('links') links;

  graph: ForceDirectedGraph;

  constructor(private d3Service: D3Service) { }

  ngOnInit() {
    /** Receiving an initialized simulated graph from our custom d3 service */
    this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
  }

  ngAfterViewInit() {
    this.graph.initSimulation(this.options);
  }

  private _options: { width, height } = { width: 800, height: 600 };

  get options() {
    return this._options = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
}