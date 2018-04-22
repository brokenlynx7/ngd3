import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { AppComponent } from "./app.component";
import { LineExampleComponent } from "./components/line-example/line-example.component";
import { GraphComponent } from "./visuals/graph/graph.component";
import { NodeVisualComponent } from "./visuals/node-visual/node-visual.component";
import { LinkVisualComponent } from "./visuals/link-visual/link-visual.component";
import { ZoomableDirective } from "./d3/directives/zoomable.directive";
import { DraggableDirective } from "./d3/directives/draggable.directive";
import { D3Service } from "./d3";


@NgModule({
	declarations: [
		AppComponent,
		LineExampleComponent,
		GraphComponent,
		NodeVisualComponent,
		LinkVisualComponent,
		ZoomableDirective,
		DraggableDirective
	],
	imports: [
		BrowserModule
	],
	providers: [D3Service],
	bootstrap: [AppComponent]
})
export class AppModule { }
