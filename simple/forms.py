from django import forms

class Note(forms.Form):
    content = forms.CharField(label="Content", required=True)
    author = forms.CharField(max_length=100, label="Author")
