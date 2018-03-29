import { D3Service } from "./d3.service";
import * as d3App from "./models";
import { ForceDirectedGraph, Link, Node } from "./models";

export const APP_VIEWS = [
	Link,
	ForceDirectedGraph,
	Node
];

export const SERVICES = [
	D3Service
];
