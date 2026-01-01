import { makeProject } from "@motion-canvas/core";

// import example from "./scenes/example?scene";
import test from "./scenes/test?scene";
import presentation from "./scenes/presentation?scene";

export default makeProject({
  // scenes: [example],
  scenes: [test, presentation],
});
