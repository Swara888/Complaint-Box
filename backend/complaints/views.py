from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Complaint
from .serializers import ComplaintSerializer
from django.db.models import Count

# List and Create
@api_view(['GET', 'POST'])
def complaints_list(request):
    if request.method == 'GET':
        complaints = Complaint.objects.all().order_by('-created_at')
        serializer = ComplaintSerializer(complaints, many=True)
        return Response(serializer.data)

    if request.method == 'POST':
        serializer = ComplaintSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Detail and Update
@api_view(['GET', 'PUT'])
def complaint_detail(request, id):
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

# Filter complaints by status
@api_view(['GET'])
def complaints_by_status(request):
    try:
        data = Complaint.objects.values('status').annotate(count=Count('id'))
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def complaints_by_category(request):
    try:
        data = Complaint.objects.values('category').annotate(count=Count('id'))
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

@api_view(['GET'])
def complaints_by_priority(request):
    try:
        data = Complaint.objects.values('priority').annotate(count=Count('id'))
        return Response(data)
    except Exception as e:
        return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)