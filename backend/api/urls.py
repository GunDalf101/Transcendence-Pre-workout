from django.urls import path
from . import views

urlpatterns = [
    path('match-history/', views.MatchListCreateView.as_view(), name='match_list_create'),

]
