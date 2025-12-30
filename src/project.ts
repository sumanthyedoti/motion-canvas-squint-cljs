import { makeProject } from "@motion-canvas/core";

// import example from "./scenes/example?scene";
import test from "./gen/scenes/test?scene";
import presentation from "./gen/scenes/presentation?scene";

export default makeProject({
  // scenes: [example],
  scenes: [test, presentation],
});
