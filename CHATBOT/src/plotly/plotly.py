import React, { useEffect } from "react";

const InteractiveNotebook = () => {
  useEffect(() => {
    (async () => {
      const thebelab = await import("@jupyter-widgets/html-manager");
      thebelab.default.renderManager(element, context);
    })();
  }, []);

  return (
    <div>
      <button id="activateButton" style={{ width: "100px", height: "30px" }}>
        Activate
      </button>
      <pre data-executable="true" data-language="python">
        {`import plotly.graph_objects as go
import numpy as np

N = 1000
t = np.linspace(0, 10, 100)
y = np.sin(t)

fig = go.Figure(data=go.Scatter(x=t, y=y, mode='markers'))

fig.show()`}
      </pre>
    </div>
  );
};

export default InteractiveNotebook;
