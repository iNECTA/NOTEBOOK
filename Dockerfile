#FROM jupyter/scipy-notebook:latest
FROM jupyter/scipy-notebook:2023-06-05

# Install Thebe
RUN pip install thebe

# Set up a custom start script
COPY start-notebook.sh /usr/local/bin/start-notebook.sh

# Expose port 8888 for Jupyter Notebook
EXPOSE 8888

# Start Jupyter Notebook
CMD ["start-notebook.sh"]


