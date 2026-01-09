from django.urls import path
from .views import (
    complaints_list,
    complaint_detail,
    complaints_by_status,
    complaints_by_priority,
    complaints_by_category
)

"""
URL configuration for Complaint Box app.

Defines endpoints for:
- Listing and creating complaints
- Retrieving/updating individual complaints
- Analytics endpoints for status, priority, and category
"""

urlpatterns = [
    # 🔹 Complaint CRUD endpoints
    path('complaints/', complaints_list, name='complaints'),                   # GET all, POST new
    path('complaints/<int:id>/', complaint_detail, name='complaint-detail'),   # GET/PUT single complaint

    # 🔹 Analytics endpoints
    path('analytics/category/', complaints_by_category, name='complaints-by-category'), 
    path('analytics/status/', complaints_by_status, name='complaints-by-status'),
    path('analytics/priority/', complaints_by_priority, name='complaints-by-priority'),
]
