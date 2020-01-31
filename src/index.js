// Hot reloading
import * as _unused from "raw-loader!./index.ejs";
import * as _unused2 from "raw-loader!./diagrams/upstream-neurons.ejs";
// TODO: disable before publishing

import TuningCurves from "./diagrams/tuning-curves.svelte";

// lazily initialize any diagram below the fold. E.G:
const tuningCurveTag = document.getElementById("1.4-tuning-curves");
tuningCurveTag.addEventListener("ready", () => {
	const target = tuningCurveTag.getElementsByTagName("figure")[0];
	const tuningCurves = new TuningCurves({ target });
});
