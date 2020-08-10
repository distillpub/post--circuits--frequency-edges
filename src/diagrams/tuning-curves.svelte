<script>
  import { units } from "../../static/diagrams/1.4-tuning-curves/units.json";
  const layer = "mixed3a";
  // let count = 1;

  // // the `$:` means 're-run whenever these values change'
  // $: doubled = count * 2;
  // $: quadrupled = doubled * 2;

  // function handleClick() {
  //   count += 1;
  //   console.log("inc count");
  // }

  // function reset() {
  //   count = 1;
  // }
</script>

<style>
  ul {
    padding: 0;
  }
  li {
    display: flex;
    margin: 0.5em 0;
    max-height: 80px;
  }
  div {
    display: grid;
    grid-template-columns: 1fr 8fr;
    grid-column-gap: 0.5em;
    /* grid-row-gap: 0.5em; */
    margin-bottom: 1em;
  }
  .legend {
    margin-bottom: 0;
  }

  a.feature-link {
    border-bottom: none;
    display: flex;
  }

  img.response {
    /* border-radius: 2px; */
  }
  img.feature-vis {
    object-fit: none;
    object-position: center;
    border-radius: 0.25rem;
  }
  img.response {
    width: 100%;
    height: 100%;
    /* border: 1px solid #000; */
  }

  .unit {
    text-align: center;
  }

  svg {
    align-self: center;
  }

  svg .range {
    stroke: #999;
    /* fill: rgba(0, 0, 0, 0.6); */
    stroke-width: 1px;
  }

  svg .axis-label {
    font-size: 75%;
    paint-order: stroke;
    stroke: rgba(255, 255, 255, 0.8);
    stroke-width: 5px;
    stroke-linecap: butt;
    stroke-linejoin: miter;
  }
</style>

<div class="legend">
  <svg width="20px" height="100%" style="justify-self: end;">
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
        x1="50%"
        y1="calc(0% + 1px)"
        x2="50%"
        y2="calc(100% - 1px)"
        marker-end="url(#t2)"
        marker-start="url(#t2)" />
      <text transform="rotate(-90)" class="axis-label" x="-68" y="14">
        ƒ-ratio
      </text>
    </g>
  </svg>
  <img src="diagrams/1.4-tuning-curves/samples-small.png" />
</div>

<div class="legend">
  <span />

  <svg width="100%" height="20px">
    <defs>
      <marker
        id="t"
        markerWidth="2"
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
        x1="calc(0% + 1px)"
        y1="50%"
        x2="calc(100% - 1px)"
        y2="50%"
        marker-end="url(#t)"
        marker-start="url(#t)" />
      <text class="axis-label" x="44%" y="70%">Orientation</text>
    </g>
  </svg>
</div>

<div>
  <b />
  <b />
</div>

{#each units as unit, index}
  <div>
    <a class="feature-link" href="https://storage.googleapis.com/inceptionv1-weight-explorer/mixed3a_{unit.index}.html">
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
  </div>
{/each}

<figcaption class="figcaption">
  <a href="#1.4-tuning-curves" class="figure-number">3</a>
  : Responses of six high-low frequency detectors to artifical stimuli. The
  stimuli vary over two axes: orientation, ranging from 0 to 2π, and ratio of
  frequency, ranging from 1:1 to 1:10. Activation values are normalized across
  all units shown, ranging from: 0
  <span class="viridis" />
  to 1.
</figcaption>
