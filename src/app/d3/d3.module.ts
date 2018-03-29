import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { D3Service } from "./d3.service";
import * as d3App from "./models";
import { ForceDirectedGraph, Link, Node } from "./models";


@NgModule({
	imports: [
		CommonModule,
		ForceDirectedGraph,
		Link,
		Node
	],
	declarations: []
})
export class D3Module { }
