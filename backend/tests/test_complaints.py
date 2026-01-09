from django.test import TestCase
from complaints.models import Complaint
from datetime import date

class ComplaintTest(TestCase):

    def test_complaint_creation(self):
        c = Complaint.objects.create(
            name="John Doe",
            roomNo="101A",
            date=date.today(),
            category="Water",
            description="Water leaking in hostel bathroom",
            priority="CRITICAL"
        )
        self.assertEqual(c.category, "Water")
        self.assertEqual(c.status, "PENDING")
        self.assertEqual(str(c), "Water")

from rest_framework.test import APIClient
from rest_framework import status

class ComplaintAPITest(TestCase):

    def setUp(self):
        self.client = APIClient()

    def test_get_complaints(self):
        response = self.client.get("/api/complaints/")
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_create_complaint_api(self):
        data = {
            "name": "Jane Doe",
            "roomNo": "102B",
            "date": str(date.today()),      # YYYY-MM-DD
            "category": "Sanitation",
            "description": "Bathroom not clean",
            "priority": "MEDIUM"
        }
        response = self.client.post("/api/complaints/", data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(response.data["category"], "Sanitation")
        self.assertEqual(response.data["status"], "PENDING")
