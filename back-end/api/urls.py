from django.urls import path
from .views import buscar_dados_home

urlpatterns = [
    # ... sua rota que carrega o index.html do React continua aqui
    path('api/', buscar_dados_home, name='api-home'),
]
