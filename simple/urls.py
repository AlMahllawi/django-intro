from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("clock/", views.clock, name="clock"),
    path("unit-convert/", views.unit_convert, name="unit-convert"),
    path("hangman/", views.hangman, name="hangman"),
    path("sayings/", views.sayings, name="sayings"),
    path("notes/", views.notes, name="notes"),
    path("notes/today", views.notes_today, name="notes-today"),
    path("notes/add", views.add_note, name="add-note"),
]