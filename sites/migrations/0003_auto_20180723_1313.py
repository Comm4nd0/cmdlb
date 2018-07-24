# Generated by Django 2.0.7 on 2018-07-23 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sites', '0002_sites_type'),
    ]

    operations = [
        migrations.AlterField(
            model_name='sites',
            name='type',
            field=models.CharField(blank=True, choices=[('django', 'Django'), ('wordpress', 'Wordpress')], default='BLANK', max_length=100),
        ),
    ]
