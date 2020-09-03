// Hot reloading
import * as _unused from "raw-loader!./index.ejs";
import * as _unused2 from "raw-loader!./diagrams/similar-directions.ejs";
import * as _unused3 from "raw-loader!./diagrams/similar-directions-model.ejs";
// TODO: disable before publishing

import TuningCurves from "./diagrams/tuning-curves.svelte";
import TuningCurvesHFLF from "./diagrams/tuning-curves-hf-lf.svelte";

// lazily initialize any diagram below the fold. E.G:
const tuningCurveTag = document.getElementById("figure-3");
tuningCurveTag.addEventListener("ready", () => {
	const target = tuningCurveTag.getElementsByTagName("figure")[0];
	const tuningCurves = new TuningCurves({ target });
});

// lazily initialize any diagram below the fold. E.G:
const tuningCurveHFLFTag = document.getElementById("figure-7");
tuningCurveHFLFTag.addEventListener("ready", () => {
	const target = tuningCurveHFLFTag.getElementsByTagName("figure")[0];
	const tuningCurvesHFLF = new TuningCurvesHFLF({ target });
});

