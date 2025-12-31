from django.contrib import admin
from .models import Complaint

@admin.register(Complaint)
class ComplaintAdmin(admin.ModelAdmin):
    list_display = (
        'name',
        'roomNo',
        'category',
        'priority',
        'status',
        'created_at'
    )
    list_filter = ('priority', 'status', 'category')
    search_fields = ('name', 'roomNo', 'description')
