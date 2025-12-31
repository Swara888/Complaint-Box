from django.urls import path
from .views import (
    complaints_list,
    complaint_detail,
    complaints_by_status,
    complaints_by_priority,
    complaints_by_category
)

urlpatterns = [
    path('complaints/', complaints_list, name='complaints'),
    path('complaints/<int:id>/', complaint_detail, name='complaint-detail'),
    path('analytics/category/', complaints_by_category),

    # 📊 Analytics
    path('analytics/status/', complaints_by_status, name='complaints-by-status'),
    path('analytics/priority/', complaints_by_priority, name='complaints-by-priority'),
]
