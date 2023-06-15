import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit'
import Plot from 'react-plotly.js';
import AceEditor from 'react-ace';
import 'react-chatbot-kit/build/main.css';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-github';

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

const initialPythonCode = `
import dash
import dash_core_components as dcc
import dash_html_components as html
import pandas as pd
import plotly.express as px
import random

# Create a dataframe with random data
df = pd.DataFrame({
    'Category': ['A', 'B', 'C', 'D', 'E'],
    'Value': [random.randint(0, 100) for _ in range(5)]
})

fig = px.bar(df, x='Category', y='Value')

app = dash.Dash(__name__)

app.layout = html.Div([
    html.H1("Random Data Bar Chart"),
    dcc.Graph(figure=fig)
])

if __name__ == '__main__':
    app.run_server(debug=True)
`;

function App() {
  const [pythonCode, setPythonCode] = useState(initialPythonCode);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', height: '100vh' }}>
          <div className="chatbot" style={{ width: '30%' }}>
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
          </div>
          <div className="code" style={{ margin: '20px', width: '30%', backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
            <AceEditor
              mode="python"
              theme="github"
              value={pythonCode}
              onChange={setPythonCode}
              name="UNIQUE_ID_OF_DIV"
              editorProps={{ $blockScrolling: true }}
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className="plot" style={{ width: '30%' }}>
            <Plot
                data={[
                  {
                    type: 'sunburst',
                    labels: ["Male", "Female", "20-29", "30-39", "20-29", "30-39"],
                    parents: ["", "", "Male", "Male", "Female", "Female"],
                    values: [10, 15, 5, 5, 7, 8],
                    outsidetextfont: {size: 20, color: "#377eb8"},
                    leaf: {opacity: 0.8},
                    marker: {line: {width: 2}},
                  }
                ]}
                useResizeHandler={true}
                style={{ width: "100%", height: "100%" }}
                layout={{title: 'Dash Plotly Chart', autosize: true}}
            />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
