from django.db import models
from django.contrib.auth.models import User

class Match(models.Model):
    player1 = models.ForeignKey(User, on_delete=models.CASCADE, related_name="player1_matches")
    player2 = models.ForeignKey(User, on_delete=models.CASCADE, related_name="player2_matches")
    winner = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name="matches_won")
    player1_score = models.IntegerField()
    player2_score = models.IntegerField()
    date_played = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.player1} vs {self.player2} - Winner: {self.winner}"
