from django.shortcuts import render
from .models import HangmanWord, Saying, Note
from datetime import date
import random

def index(request):
    return render(request, 'simple/index.html')

def clock(request):
    return render(request, 'simple/clock.html', { 'pagetitle': 'Wall Clock' })

def unit_convert(request):
    return render(request, 'simple/unit-convert.html', { 'pagetitle': 'Unit Converter' })

def hangman(request):
    words_count = HangmanWord.objects.count()
    hangman = HangmanWord.objects.all()[random.choice(range(words_count))] if words_count > 0 else None
    context = {'pagetitle': 'Hangman Game'}
    if hangman:
        context["word"] = hangman.word
        context["category"] = hangman.category
    return render(request, 'simple/hangman.html', context)


def sayings(request):
    total_sayings = Saying.objects.count()
    random_sayings = [Saying.objects.all()[i] for i in random.sample(range(total_sayings), min(3, total_sayings))]
    return render(request, 'simple/sayings.html', {
        'pagetitle': 'Sayings',
        'sayings': random_sayings
    })


def notes(request):
    return render(request, 'simple/notes.html', {
        'pagetitle': 'Notes',
        'notes': Note.objects.all()
    })

def notes_today(request):
    today_notes = Note.objects.filter(created__date=date.today())
    return render(request, 'simple/notes.html', {
        'pagetitle': 'Notes',
        'notes': today_notes,
        'today': True
    })

def add_note(request):
    if request.method == 'POST':
        Note(content=request.POST.get('content'), author=request.POST.get('author')).save()
    return render(request, 'simple/add-note.html', { 'pagetitle': 'Add Note' })

