from django.db import models

# Create your models here.

class Sites(models.Model):
    char_length = 100
    title = models.CharField(max_length=char_length)
    url = models.CharField(max_length=char_length)
    image = models.FileField()
    description = models.TextField()

    COLOR_CHOICES = (
        ('Django', 'Django'),
        ('Wordpress', 'Wordpress'),
    )
    type =models.CharField(max_length=char_length, choices=COLOR_CHOICES, blank=True)

    def __str__(self):
        return self.title
