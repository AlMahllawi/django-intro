from .models import Note
from django.forms import ModelForm

class Note(ModelForm):
    class Meta:
        model = Note
        fields = '__all__'
