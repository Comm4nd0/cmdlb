from django.shortcuts import render
from .models import Banner
from sites.models import Sites

def home(request):
    banners = Banner.objects
    sites = Sites.objects
    return render(request, 'home.html', {'banners': banners,
                                         'sites': sites})

