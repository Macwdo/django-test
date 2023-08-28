from django.urls import path
from django_consultant.views import ProposalViewSet
from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register("", ProposalViewSet)

urlpatterns = []

urlpatterns += router.urls