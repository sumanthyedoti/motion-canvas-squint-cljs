import { makeProject } from "@motion-canvas/core";

// import example from "./scenes/example?scene";
import test from "./scenes/test?scene";
import macros from "./scenes/macros?scene";
import presentation from "./scenes/presentation?scene";
import macro_slides from "./scenes/macro-slides?scene";
import quickstart from "./scenes/docs/quickstart?scene";
import animation_flow from "./scenes/docs/animation_flow?scene";
import node_hierarchy from "./scenes/docs/node_hierarchy?scene";

export default makeProject({
  // scenes: [example],
  // scenes: [test, macros, presentation, macro_slides],
  // scenes: [animation_flow],
  scenes: [node_hierarchy],
});
