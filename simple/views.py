from django.shortcuts import render

def index(request):
    return render(request, 'simple/index.html')

def clock(request):
    return render(request, 'simple/clock.html', { 'pagetitle': 'Wall Clock' })

def unit_convert(request):
    return render(request, 'simple/unit-convert.html', { 'pagetitle': 'Unit Converter' })

def hangman(request):
    return render(request, 'simple/hangman.html', { 'pagetitle': 'Hangman Game' })

