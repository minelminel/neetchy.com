#!/usr/bin/env python3
import os
import pyqrcode

url = 'code.neetchy.com'
here = os.path.dirname(os.path.abspath(__file__))
file = os.path.join(here, 'img', 'code.neetchy.com.svg')

qr = pyqrcode.create(url, mode='binary')
qr.svg(file, scale=20)
print(f'Saved file to: {file}')
