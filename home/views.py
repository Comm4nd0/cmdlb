from django.shortcuts import render
from sites.models import Sites
from django.core.mail import EmailMessage
from django.http import HttpResponse
import json


def home(request):
    sites = Sites.objects
    return render(request, 'home.html', {'sites': sites})


def contact_email(request):
    if request.POST:

        email = EmailMessage(
            request.POST.get('subject'),
            "{}, {}".format(request.POST.get('message'), request.POST.get('message')),
            'contact@cmdlb.com',
            ['marco.baldanza@cmdlb.com'],
            reply_to=[request.POST['email']],
        )
        try:
            email.send(fail_silently=False)
            message = {'message': "Thank you for your email, we'll be in touch soon!"}
        except:
            message = {'message': "Something went wrong, but we're working on it!"}

        return HttpResponse(json.dumps(message), content_type='application/json')

