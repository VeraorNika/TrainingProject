import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { UsePipeComponent } from "./use-pipe.component";
import { NumberPipe} from "./number-pipe";
import { KebabPipe } from "./kebab-pipe";
import { CommonModule } from "@angular/common";
import { TaxPipe } from "./tax-pipe";
import { JoinPipe } from "./join-pipe";
import { JoinImpurePipe } from "./join-impure-pipe";

@NgModule({
  imports: [
    FormsModule,
    CommonModule
  ],
  declarations: [UsePipeComponent, NumberPipe, KebabPipe, TaxPipe, JoinPipe, JoinImpurePipe],
  exports: [UsePipeComponent, NumberPipe, KebabPipe, TaxPipe, JoinPipe, JoinImpurePipe],
})
export class PipesModule {}
