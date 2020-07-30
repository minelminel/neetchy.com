#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import datetime
from functools import wraps
from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

def protected(f):
    @wraps(f)
    def wrap(*args, **kwargs):
        if app.debug:
            return f(*args, **kwargs)
        launches = datetime.datetime(2020, 7, 31, 21, 0)
        live =  (datetime.datetime.now().timestamp() - launches.timestamp()) >= 0
        if not live:
            return redirect(url_for('preview'))
        else:
            return f(*args, **kwargs)
    return wrap

@app.route('/')
@protected
def index():
    embed = 'https://www.youtube.com/embed/FptrNy-e8Vw'
    return render_template('index.html', title='Home', embed=embed)

@app.route('/archive')
@protected
def archive():
    embeds = [
        {
            'url': 'https://www.youtube.com/embed/FptrNy-e8Vw',
            'title': '"Places" Music Video',
        },
        {
            'url': 'https://www.youtube.com/embed/KvkLBzVb9Q0',
            'title': '"Cars" Music Video',
        },
    ]
    return render_template('archive.html', title='Archive', embeds=embeds)

@app.route('/_')
def preview():
    return render_template('preview.html', title='Preview')
