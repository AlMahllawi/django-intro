from django.db import models

class HangmanWord(models.Model):
    word = models.CharField(primary_key=True, max_length=25)
    category = models.CharField(max_length=50)

    def __str__(self):
        return self.category + ': ' + self.word

    class Meta:
        ordering = ['category']

class Saying(models.Model):
    content = models.TextField(unique=True)
    valid = models.BooleanField(default=True)

    def __str__(self):
        return f"[{'Valid' if self.valid else 'Invalid'}] {self.content}"

    class Meta:
        ordering = ['valid']
