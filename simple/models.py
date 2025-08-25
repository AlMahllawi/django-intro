from django.db import models

class HangmanWord(models.Model):
    word = models.CharField()
    category = models.CharField()

class Saying(models.Model):
    content = models.TextField()
    valid = models.BooleanField()
