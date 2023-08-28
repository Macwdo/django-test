from rest_framework.serializers import ModelSerializer
from django_consultant.models import Proposal
from django_consultant.tasks import check_proposal


class ProposalSerializer(ModelSerializer):
    class Meta:
        model = Proposal
        fields = "__all__"
        read_only = ("accepted", "automatic_status")

    def create(self, validated_data):
        proposal = Proposal.objects.create(**validated_data)
        check_proposal.delay(proposal.pk)
        return proposal