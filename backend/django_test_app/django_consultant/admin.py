from django.contrib import admin

from django_consultant.models import Proposal, ProposalField

# Register your models here.

class ProposalFieldsInline(admin.TabularInline):
    model = ProposalField


@admin.register(Proposal)
class ProposalAdmin(admin.ModelAdmin):
    model = Proposal
    list_filter = ["approved"]
    list_display = ["name", "document", "automatic_status", "approved"]
    inlines = [
        ProposalFieldsInline,
    ]

@admin.register(ProposalField)
class ProposalFieldsAdmin(admin.ModelAdmin):
    model = ProposalField