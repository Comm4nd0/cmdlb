from django.shortcuts import render
from .models import Sites

def sites(request):
    sites = Sites.objects
    return render(request, 'sites.html', {'sites': sites})