import { makeProject } from "@motion-canvas/core";

// import example from "./scenes/example?scene";
import test from "./scenes/test?scene";
import macros from "./scenes/macros?scene";
import presentation from "./scenes/presentation?scene";
import macro_slides from "./scenes/macro-slides?scene";

export default makeProject({
  // scenes: [example],
  scenes: [test, macros, presentation, macro_slides],
});
