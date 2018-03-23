# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse



def index(request):
    return render(request, 'index.html')
    # return HttpResponse(u"<div style='height:50px'></div><div style='text-align:center'><h1 style='color:lightgreen'>你好！ 我是莫罗</h1> <h3>你应该很期待这个网站</h3><p style='font:12px;'>to be continued... :D<p></div>")

def message_form(request):
    return render(request, 'message_form.html')

def test(request):
    return render(request, 'test.html')

def passb(request):
    return  render(request, 'pass.html')