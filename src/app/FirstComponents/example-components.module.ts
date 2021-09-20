import { NgModule } from "@angular/core";
import { ExampleParentComponent } from "./example-parent.component";
import { FormsModule } from "@angular/forms";
import { ExampleChildComponent } from "./example-child.component";


@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [ExampleParentComponent, ExampleChildComponent],
  exports: [ExampleParentComponent, ExampleChildComponent],
  providers: [],

})
export class ExampleComponentsModule {}
