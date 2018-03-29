import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LineExampleComponent } from './components/line-example/line-example.component';
import { GraphComponent } from './visuals/graph/graph/graph.component';
import { NodeVisualComponent } from './visuals/node-visual/node-visual.component';
import { LinkVisualComponent } from './visuals/link-visual/link-visual.component';
import { ZoomableDirective } from './d3/directives/zoomable.directive';
import { DraggableDirective } from './d3/directives/draggable.directive';


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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
