# Generated by Django 5.0 on 2023-12-30 07:53

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("events", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="event",
            name="date",
            field=models.DateField(default=datetime.date.today),
        ),
    ]
