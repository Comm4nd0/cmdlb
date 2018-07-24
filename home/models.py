from django.db import models

# Create your models here.

class Banner(models.Model):
    image = models.FileField()
    title = models.CharField(max_length=50)
    text = models.TextField()
    url = models.CharField(max_length=1000)

    def __str__(self):
        return self.title