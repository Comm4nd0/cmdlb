from django.urls import path
from . import views

urlpatterns = [
    path('', views.view_that_asks_for_money, name='packages'),
]