from django.contrib import admin

from .models import HangmanWord, Saying, Note

admin.site.register(HangmanWord)
admin.site.register(Saying)
admin.site.register(Note)
