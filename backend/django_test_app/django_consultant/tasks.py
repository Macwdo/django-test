from json import dumps
from celery import shared_task
import requests

from django_consultant.models import Proposal

@shared_task
def check_proposal(pk):
    url = "https://loan-processor.digitalsys.com.br/api/v1/loan"
    proposal = Proposal.objects.get(pk=pk)
    data = {"name": proposal.name, "document": proposal.document}
    request = requests.post(url, data=data)
    response = request.json()
    if response["approved"]:
        proposal.automatic_accepted()
    else:
        proposal.automatic_denied()    
    