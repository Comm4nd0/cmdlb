# Generated by Django 2.0.7 on 2018-07-23 15:58

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Banner',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.FileField(upload_to='')),
                ('title', models.CharField(max_length=50)),
                ('text', models.TextField()),
                ('url', models.CharField(max_length=1000)),
            ],
        ),
    ]
