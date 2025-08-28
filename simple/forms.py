from datetime import datetime
from .models import Note
from django.forms import ModelForm, DateTimeField

class Note(ModelForm):
    class Meta:
        model = Note
        fields = '__all__'

    created = DateTimeField(label="Created Time", disabled=True, initial=datetime.now())
