# Generated by Django 4.2.4 on 2023-08-27 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('django_consultant', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='proposal',
            name='automatic_status',
            field=models.CharField(choices=[('accepted', 'Aceito'), ('pending', 'Aguardando'), ('denied', 'Negado')], default='pending', max_length=8),
        ),
    ]
