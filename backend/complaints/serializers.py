from rest_framework import serializers
from .models import Complaint

class ComplaintSerializer(serializers.ModelSerializer):
    """
    Serializer for the Complaint model.
    Handles validation and serialization/deserialization of complaint data
    for API endpoints.
    """

    class Meta:
        model = Complaint
        fields = "__all__"  # Include all fields from the model
        # Optional: extra kwargs to make certain fields read-only if needed
        read_only_fields = ('status', 'created_at')  # Status auto-default, created_at auto-added
