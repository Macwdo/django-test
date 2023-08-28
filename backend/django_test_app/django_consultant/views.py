from django_consultant.models import Proposal

from django_consultant.serializers import ProposalSerializer

from rest_framework.viewsets import ModelViewSet

class ProposalViewSet(ModelViewSet):
    serializer_class = ProposalSerializer
    queryset = Proposal.objects.all()