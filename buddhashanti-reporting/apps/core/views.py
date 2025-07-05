"""
Core API views for pokhara Report System.
"""

from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from django.conf import settings
from django.utils import timezone
import sys


class HealthCheckView(APIView):
    """
    Simple health check endpoint to verify system status.
    """

    permission_classes = []  # Public endpoint

    def get(self, request):
        """Return system health status"""
        return Response(
            {
                "status": "healthy",
                "timestamp": timezone.now(),
                "municipality": "पोखरा महानगरपालिका",
                "municipality_english": "pokharaMetropolitan City",
                "system": "Digital Profile Report System",
                "version": "1.0.0",
            }
        )


class SystemInfoView(APIView):
    """
    System information endpoint for authorized users.
    """

    permission_classes = [IsAuthenticated]

    def get(self, request):
        """Return system information"""
        return Response(
            {
                "django_version": f"{sys.version_info.major}.{sys.version_info.minor}.{sys.version_info.micro}",
                "debug_mode": settings.DEBUG,
                "time_zone": settings.TIME_ZONE,
                "language_code": settings.LANGUAGE_CODE,
                "municipality": {
                    "name_nepali": "पोखरा महानगरपालिका",
                    "name_english": "pokharaMetropolitan City",
                    "district": "कपिलवस्तु",
                    "district_english": "Kapilvastu",
                    "province": "गण्डकी प्रदेश",
                    "province_english": "Lumbini Province",
                    "total_wards": 8,
                },
            }
        )


class MunicipalityInfoView(APIView):
    """
    Municipality basic information endpoint.
    """

    permission_classes = []  # Public endpoint

    def get(self, request):
        """Return municipality information"""
        return Response(
            {
                "municipality": {
                    "name_nepali": "पोखरा महानगरपालिका",
                    "name_english": "pokharaMetropolitan City",
                    "district_nepali": "कपिलवस्तु",
                    "district_english": "Kapilvastu",
                    "province_nepali": "गण्डकी प्रदेश",
                    "province_english": "Lumbini Province",
                    "total_wards": 8,
                    "established_date": "2017-05-10",  # BS: 2074/01/27
                    "website": "https://pokharamun.gov.np",
                    "contact": {
                        "phone": "+977-76-550123",
                        "email": "info@pokharamun.gov.np",
                        "address_nepali": "पोखरा महानगरपालिका, कपिलवस्तु",
                        "address_english": "pokharaMetropolitan City, Kapilvastu",
                    },
                    "coordinates": {"latitude": 27.5833, "longitude": 82.9167},
                }
            }
        )
