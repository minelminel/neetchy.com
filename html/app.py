#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import datetime
from functools import wraps
from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

def protected(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        launches = datetime.datetime(2020, 7, 31, 22, 0)
        live =  (datetime.datetime.now().timestamp() - launches.timestamp()) >= 0
        if not live:
            return redirect(url_for('preview'))
        else:
            return f(*args, **kwargs)
    return wrap

@app.route('/')
@protected
def index():
    return render_template('index.html', title='Home')

@app.route('/venue')
@protected
def venue():
    embed = 'https://www.youtube.com/embed/FptrNy-e8Vw'
    return render_template('venue.html', title='Venue', embed=embed)

@app.route('/_')
def preview():
    return render_template('preview.html', title='Preview')
