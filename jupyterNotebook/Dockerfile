# Use the jupyter/scipy-notebook image
FROM jupyter/scipy-notebook:latest

# Install Thebe and necessary dependencies
RUN pip install thebe jupyter-dash plotly pandas

# Expose ports for Jupyter Notebook and Dash
EXPOSE 8888
EXPOSE 8050

# Start Jupyter Notebook
CMD ["start-notebook.sh", "--NotebookApp.token=''"]

