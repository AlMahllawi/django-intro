from django.db import models

class HangmanWord(models.Model):
    word = models.CharField()
    category = models.CharField()

    def __str__(self):
        return self.category + ': ' + self.word

class Saying(models.Model):
    content = models.TextField()
    valid = models.BooleanField()

    def __str__(self):
        return f"[{'Valid' if self.valid else 'Invalid'}] {self.content}"
