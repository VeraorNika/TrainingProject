import { NgModule } from "@angular/core";
import { ExampleParentComponent } from "./example-parent.component";
import { FormsModule } from "@angular/forms";
import { ExampleChildComponent } from "./example-child.component";
import { CommonModule } from "@angular/common";


@NgModule({
    imports: [
        FormsModule,
        CommonModule
    ],
  declarations: [ExampleParentComponent, ExampleChildComponent],
  exports: [ExampleParentComponent, ExampleChildComponent],
  providers: [],

})
export class ExampleComponentsModule {}
