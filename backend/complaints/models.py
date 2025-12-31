from django.db import models

class Complaint(models.Model):

    PRIORITY_CHOICES = [
        ('CRITICAL', 'Critical'),
        ('MEDIUM', 'Medium'),
        ('LOW', 'Low'),
    ]

    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('IN PROGRESS', 'In Progress'),
        ('DONE', 'Done'),
    ]
    
    name = models.CharField(max_length=100)
    roomNo = models.CharField(max_length=10)
    date = models.DateField()
    category = models.CharField(max_length=100)
    description = models.TextField()
   
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.category
