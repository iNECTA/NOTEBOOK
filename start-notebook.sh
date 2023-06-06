#!/bin/bash
export JUPYTER_ALLOW_INSECURE_WRITES=1
jupyter notebook --ip=0.0.0.0 --no-browser --NotebookApp.token='' --NotebookApp.custom_display_url=http://${HOSTNAME}:8888
