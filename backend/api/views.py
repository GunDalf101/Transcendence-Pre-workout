from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .serializers import MatchSerializer
from .models import Match
from django.db.models import Q
from rest_framework.response import Response
from rest_framework.views import APIView

class UserCreateView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({"username": user.username})

class MatchListCreateView(generics.ListCreateAPIView):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(player1=self.request.user)

class MatchHistoryView(generics.ListAPIView):
    serializer_class = MatchSerializer

    def get_queryset(self):
        user_id = self.kwargs['user_id']
        return Match.objects.filter(Q(player1_id=user_id) | Q(player2_id=user_id)).order_by('-date_played')


