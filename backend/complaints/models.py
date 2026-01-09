from django.db import models

class Complaint(models.Model):
    """
    Complaint model stores complaints submitted by students or hostel residents.
    Fields include complainant name, room number, category, description, priority, 
    status, and timestamp of creation. Status and priority use predefined choices.
    """

    # Priority levels
    PRIORITY_CHOICES = [
        ('CRITICAL', 'Critical'),
        ('MEDIUM', 'Medium'),
        ('LOW', 'Low'),
    ]

    # Complaint status options
    STATUS_CHOICES = [
        ('PENDING', 'Pending'),
        ('IN PROGRESS', 'In Progress'),
        ('DONE', 'Done'),
    ]
    
    # Complainant information
    name = models.CharField(max_length=100, help_text="Name of the complainant")
    roomNo = models.CharField(max_length=10, help_text="Room number of the complainant")
    date = models.DateField(help_text="Date when complaint was filed")
    
    # Complaint details
    category = models.CharField(max_length=100, help_text="Category of the complaint")
    description = models.TextField(help_text="Detailed description of the complaint")
   
    # Complaint priority and status
    priority = models.CharField(max_length=20, choices=PRIORITY_CHOICES, help_text="Priority of the complaint")
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='PENDING', help_text="Current status of the complaint")
    
    # Timestamp
    created_at = models.DateTimeField(auto_now_add=True, help_text="Time when complaint was created")

    def __str__(self):
        """
        Returns the category as string representation of the complaint.
        """
        return self.category
