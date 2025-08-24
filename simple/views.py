from django.shortcuts import render

def index(request):
    return render(request, 'simple/index.html')

def clock(request):
    return render(request, 'simple/clock.html', { 'pagetitle': 'Wall Clock' })

def unit_convert(request):
    return render(request, 'simple/unit-convert.html', { 'pagetitle': 'Unit Converter' })

def hangman(request):
    return render(request, 'simple/hangman.html', { 'pagetitle': 'Hangman Game' })


import random
def sayings(request):
    sayings = [
        {'saying': 'The Earth orbits the Sun', 'valid': True},
        {'saying': 'Water freezes at 0°C', 'valid': True},
        {'saying': 'Humans need oxygen to survive', 'valid': True},
        {'saying': 'The Pacific Ocean is the largest ocean', 'valid': True},
        {'saying': 'Gravity pulls objects toward the Earth', 'valid': True},
        {'saying': 'The Moon is made of chocolate', 'valid': False},
        {'saying': 'Clouds are made of cotton candy', 'valid': False},
        {'saying': 'The Sun is a giant light bulb', 'valid': False},
        {'saying': 'Trees grow upside down', 'valid': False},
        {'saying': 'Rain is made of sugar syrup', 'valid': False},
    ]
    return render(request, 'simple/sayings.html', { 'pagetitle': 'Sayings', 'sayings': random.sample(sayings, 3) })

