pip install flask plotly

from flask import Flask, render_template, request
import pandas as pd
import plotly.express as px


#-------

npx create-react-app my-app

#----
npm install
npm run build



#Create Django
django-admin startproject myproject


# RUN REACT -------
#From frontend\my-app
npm start

# RUN SOMETHING
cd frontend
npm run build

#move main to static
mv build/static/js/main.*.chunk.js build/static/js/main.js

#run django
cd myproject
python manage.py runserver


#FLASK#####################

mkdir flask-react-app
cd flask-react-app
pip install flask


mkdir templates
cd templates
type nul > index.html



mkdir static
cp -r frontend/build/* static/


python app.py



