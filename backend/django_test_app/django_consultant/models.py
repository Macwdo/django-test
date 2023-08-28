from django.db import models


class Proposal(models.Model):
    automatic_status_choices = (
        ("accepted", "Aceito"),
        ("pending", "Aguardando"),
        ("denied", "Negado")
        )
    document = models.CharField(max_length=255) 
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)
    automatic_status = models.CharField(max_length=8, choices=automatic_status_choices, default="pending")
    approved = models.BooleanField(default=False)

    def automatic_accepted(self) -> None:
        self.automatic_status = "accepted"
        self.save()

    def automatic_denied(self) -> None:
        self.automatic_status = "denied"
        self.save()

    def __str__(self) -> str:
        return f"{self.name} {self.document}"
    
    class Meta:
        verbose_name = "Proposta"
        verbose_name_plural = "Propostas"


class ProposalField(models.Model): 
    proposal = models.ForeignKey(Proposal, on_delete=models.CASCADE)
    field = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at= models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return f"{self.proposal} {self.field}"
    
    class Meta:
        verbose_name = "Campo da proposta"
        verbose_name_plural = "Campos das propostas"