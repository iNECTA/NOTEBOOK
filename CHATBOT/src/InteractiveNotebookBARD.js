import React, { useEffect } from 'react';

function InteractiveNotebook() {
  useEffect(() => {
    (async function loadThebe() {
      window.addEventListener('thebe-ready', function (evt) {
        let thebe = window.thebe;
        if (thebe) {
          let cells = document.querySelectorAll('.thebe');
          Array.from(cells).forEach((cell) => {
            thebe.bootstrap(cell, { requestKernel: true });
          });
        }
      });

      if (document.readyState === 'complete') {
        let event = document.createEvent('Event');
        event.initEvent('thebe-ready', true, true);
        window.dispatchEvent(event);
      }

      let script = document.createElement('script');
      script.src = 'https://unpkg.com/thebe@latest/lib/index.js';
      script.id = 'thebe-script-tag';
      document.head.appendChild(script);

      await new Promise((r) => setTimeout(r, 2000)); // Wait for script to load

      const thebelab = window.thebelab;

      thebelab.bootstrap({
        kernelOptions: {
          serverSettings: {
            baseUrl: 'https://mybinder.org',
          },
        },
        preRenderHook: (input, preRenderOutput) => preRenderOutput,
        binderOptions: {
          ref: 'master',
          binderUrl: 'https://mybinder.org',
          repo: 'binder-examples/requirements',
        },
        kernelOptionsHandler: (kernelOptions) => kernelOptions,
        codeMirrorConfig: { theme: 'abcdef' },
      });
    })();
  }, []);

  return (
    <div>
      <pre data-executable="true" data-language="python" className="thebe">
        {`import plotly.graph_objects as go

# Create random data with numpy
import numpy as np
np.random.seed(1)

N = 100
random_x = np.linspace(0, 1, N)
random_y0 = np.random.randn(N) + 5
random_y1 = np.random.randn(N)
random_y2 = np.random.randn(N) - 5

# Create traces
fig = go.Figure()
fig.add_trace(go.Scatter(x=random_x, y=random_y0,
                    mode='lines',
                    name='lines'))
fig.add_trace(go.Scatter(x=random_x, y=random_y1,
                    mode='lines+markers',
                    name='lines+markers'))
fig.add_trace(go.Scatter(x=random_x, y=random_y2,
                    mode='markers', name='markers'))

fig.show()`}
      </pre>
    </div>
  );
}

export default InteractiveNotebook;
