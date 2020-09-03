<script>
  import { units } from "../../static/diagrams/1.4-tuning-curves/units.json";
  const layer = "mixed3a";
</script>

<style>
  div.grid {
    display: grid;

    /* 1:6 is the aspect ratio of response image in 2nd column. 
       This should keep feature vis images mostly square. */
    grid-template-columns: 1fr 6fr;
    grid-template-rows: min-content;
    grid-column-gap: 0.5em;
    grid-row-gap: 0.5em;
    gap: 0.5em;
  }
  .legend {
    margin-bottom: 0;
    min-width: 0;
    min-height: 0;
  }

  a.feature-link {
    border-bottom: none;
    display: flex;
  }

  img.feature-vis {
    height: 100%;
    object-fit: none;
    object-position: center;
    border-radius: 0.25rem;
  }

  svg {
    align-self: center;
    justify-self: end;
    overflow: visible;
  }

  svg#tuning-curves-f-ratio {
    max-height: 86px;
  }

  svg .range {
    stroke: #999;
    /* fill: rgba(0, 0, 0, 0.6); */
    stroke-width: 1px;
  }

  svg .axis-label {
    font-size: 75%;
    paint-order: stroke;
    stroke: white;
    stroke-width: 6px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
  }
</style>

<div class="grid">
  <!-- we'd like to set height=100% here, but Safari renders that wrongly -->
  <!-- 35px is roughly the smallest the synth stimuli image should get on mobile and looks ok-ish -->
  <svg id="tuning-curves-f-ratio" width="40px" height="35px">
    <defs>
      <marker
        id="t2"
        markerWidth="10"
        markerHeight="10"
        refX="0"
        refY="5"
        orient="auto-start-reverse"
        markerUnits="strokeWidth"
        viewBox="0 0 1 10"
        fill="#999">
        <line x1="0" x2="0" y1="0" y2="10" stroke="#999" />
      </marker>
    </defs>
    <g class="range">
      <line
        hidden="hidden"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        marker-end="url(#t2)"
        marker-start="url(#t2)" />
      <text
        class="axis-label"
        transform=""
        transform-origin="center"
        x="50%"
        y="50%"
        dominant-baseline="middle"
        text-anchor="middle">
        ƒ-ratio
      </text>
    </g>
  </svg>

  <img
    style="width=100%;"
    src="diagrams/1.4-tuning-curves/samples-small.png"
    alt="A sampled grid from the two axes of variation of our synthetic stimuli:
    orientation and spatial frequency ratio." />

  <span />

  <svg width="100%" height="20px">
    <defs>
      <marker
        id="t"
        markerWidth="3"
        markerHeight="10"
        refX="0"
        refY="5"
        orient="auto-start-reverse"
        markerUnits="strokeWidth"
        viewBox="0 0 1 10"
        fill="#999">
        <line x1="0%" x2="0%" y1="0%" y2="100%" stroke="#999" />
      </marker>
    </defs>
    <g class="range">
      <line
        x1="0%"
        y1="50%"
        x2="100%"
        y2="50%"
        marker-end="url(#t)"
        marker-start="url(#t)" />
      <text
        class="axis-label"
        dominant-baseline="middle"
        text-anchor="middle"
        x="50%"
        y="50%">
        Orientation
      </text>
    </g>
  </svg>

  {#each units as unit, index}
    <a
      class="feature-link"
      href="https://storage.googleapis.com/inceptionv1-weight-explorer/mixed3a_{unit.index}.html">
      <img
        class="feature-vis"
        src={`diagrams/1.1-feature-vis/neuron-${unit.index}.png`}
        alt={`Feature visualization of unit ${unit.index}.`}
        title={`Feature visualization of unit ${unit.index}.`} />
    </a>
    <img
      class="response"
      src={`diagrams/1.4-tuning-curves/response-${layer}-${unit.index}.png`}
      alt={`Responses of unit ${unit.index}.`}
      title={`Responses of unit ${unit.index}.`} />
    <!-- <span class="figcaption unit">
    <code>{layer}</code>
    Unit {unit.index}
  </span>
  <svg width="100%" height="10px" viewbox="0 0 360 10">
    <g class="range">
      <line x1="1" y1="0" x2="1" y2="10" />
      <line x1="1" y1="5" x2="200" y2="5" />
      <line x1="200" y1="0" x2="200" y2="10" />
    </g>
  </svg> -->
  {/each}
</div>

<figcaption class="figcaption">
  <a href="#figure-3" class="figure-number">3</a>
  : Responses of six high-low frequency detectors to artifical stimuli. The
  stimuli vary over two axes: orientation, ranging from 0 to 2π, and frequency
  ratio ƒ, ranging from 1:1 to 1:10. Activation values are normalized across all
  units shown, ranging between 0
  <span class="color-legend viridis" />
  and 1.
</figcaption>
