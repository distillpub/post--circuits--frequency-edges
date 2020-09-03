<style>
  div.grid {
    display: grid;

    /* 1:6 is the aspect ratio of response image in 2nd column. 
       This should keep feature vis images mostly square. */
    grid-template-columns: 1fr 6fr;
    grid-template-rows: min-content;
    /* grid-gap was deprecated in favor of gap */
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    gap: 1em;
  }

  img.feature-vis {
    height: 100%;
    object-fit: none;
    object-position: center;
    border-radius: 8px;
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
  <svg id="tuning-curves-f-ratio" width="60px" height="35px">
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
        Frequency
      </text>
    </g>
  </svg>

  <img
    style="width=100%;"
    src="diagrams/7.0-hf-lf-tuning-curves/samples-small.png"
    alt="A sampled grid from the two axes of variation of our synthetic stimuli:
    orientation and spatial frequency." />

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
        Orientation (0 to π/4)
      </text>
    </g>
  </svg>

  {#each ['hf', 'lf'] as factor, index}
    <div>
      <img
        class="feature-vis factor"
        src={`diagrams/7.0-hf-lf-tuning-curves/conv2d2-${factor}.png`}
        alt={`Feature visualization of ${factor} factor.`}
        title={`Feature visualization of ${factor} factor.`} />
    </div>
    <img
      class="response"
      src={`diagrams/7.0-hf-lf-tuning-curves/2-${factor}-viridis-squished.png`}
      alt={`Responses of ${factor} factor.`}
      title={`Responses of ${factor} factor.`} />
  {/each}
</div>

<figcaption class="figcaption">
  <a href="#figure-7" class="figure-number">7</a>
  : Responses to a grid of synthetic stimuli varying frequency and angle of
  orientation, against HF-factor and LF-factor from
  <code>conv2d2</code>
  . Orientation ranges from 0 to π/4. Wavelength as a proportion of the full
  input image ranges from 1:1 to 1:10. Activation values are normalized across
  all units shown, ranging from 0 to 1.
  <span class="viridis color-legend" />
</figcaption>
