from flask import Flask, render_template, request
import plotly
import plotly.graph_objs as go
import json

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/plot', methods=['POST'])
def plot():
    code = request.form['code']
    # Evaluate the code and create a Plotly figure
    fig = eval(code)
    # Convert the figure to JSON
    fig_json = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)
    return fig_json

if __name__ == '__main__':
    app.run(debug=True)
