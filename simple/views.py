from django.shortcuts import render

def index(request):
    return render(request, 'simple/index.html')

def clock(request):
    return render(request, 'simple/clock.html')

def unit_convert(request):
    return render(request, 'simple/unit-convert.html')

def hangman(request):
    return render(request, 'simple/hangman.html')

