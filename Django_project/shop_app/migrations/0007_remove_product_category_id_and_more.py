# Generated by Django 4.2.7 on 2023-12-20 14:37

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop_app', '0006_product_slug'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='category_id',
        ),
        migrations.RemoveField(
            model_name='product',
            name='description',
        ),
    ]