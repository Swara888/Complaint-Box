from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Complaint
from .serializers import ComplaintSerializer
from django.db.models import Count

# ============================
# List and Create Complaints
# ============================
@api_view(['GET', 'POST'])
def complaints_list(request):
    """
    Handles GET and POST requests for complaints.
    GET: Returns all complaints ordered by creation date (newest first).
    POST: Creates a new complaint if input data is valid.
    """
    if request.method == 'GET':
        # Fetch all complaints and serialize
        complaints = Complaint.objects.all().order_by('-created_at')
        serializer = ComplaintSerializer(complaints, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        # Create new complaint from request data
        serializer = ComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        # Return validation errors if any
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ============================
# Detail and Update a Complaint
# ============================
@api_view(['GET', 'PUT'])
def complaint_detail(request, id):
    """
    Handles GET and PUT for a specific complaint by ID.
    GET: Returns complaint details.
    PUT: Updates complaint partially or fully if data is valid.
    """
    try:
        complaint = Complaint.objects.get(id=id)
    except Complaint.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ComplaintSerializer(complaint)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = ComplaintSerializer(complaint, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# ============================
# Aggregation Endpoints
# ============================

@api_view(['GET'])
def complaints_by_status(request):
    """
    Returns a count of complaints grouped by status.
    """
    try:
        data = Complaint.objects.values('status').annotate(count=Count('id'))
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def complaints_by_category(request):
    """
    Returns a count of complaints grouped by category.
    """
    try:
        data = Complaint.objects.values('category').annotate(count=Count('id'))
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['GET'])
def complaints_by_priority(request):
    """
    Returns a count of complaints grouped by priority.
    """
    try:
        data = Complaint.objects.values('priority').annotate(count=Count('id'))
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
