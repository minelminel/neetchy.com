#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import json
import datetime
from flask import Flask, render_template, url_for, redirect

app = Flask(__name__)

@app.route('/')
def index():
    with open("embed.json", "r") as file:
        data = json.load(file)
    embed = data["embed"]
    start = data["start"]
    #embed = 'https://www.youtube.com/embed/qvWEVPlJyAo'
    #start = 726  # value in seconds
    return render_template('index.html', 
        title='Home', embed='{}?start={}'.format(embed, start) if start else embed
    )

@app.route('/archive')
def archive():
    embeds = [
        {
            'title': 'Show #1 | 7/31/2020',
            'url': 'https://www.youtube.com/embed/qvWEVPlJyAo',
            'start': 726,
        },
    ]
    for e, embed in enumerate(embeds):
        embeds[e]['url'] = f"{embed['url']}?start={embed['start']}"
    return render_template('archive.html', title='Archive', embeds=embeds)
