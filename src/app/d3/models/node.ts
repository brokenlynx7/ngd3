// Implementing SimulationNodeDatum interface into our custom Node class
export class Node implements d3.SimulationNodeDatum {
	// Optional - defining optional implementation properties - required for relevant typing assistance
	public index?: number;
	public x?: number;
	public y?: number;
	public vx?: number;
	public vy?: number;
	public fx?: number | null;
	public fy?: number | null;

	public linkCount: number = 0;

	id: string;

	constructor(id: any) {
		this.id = id;
	}
}
