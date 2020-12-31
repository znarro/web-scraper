from django.urls import path

from .views import ProyectoListView, ProyectoDetailView

urlpatterns = [
    path("proyectos-de-ley/<path:numero>", ProyectoDetailView.as_view()),
    path("proyectos-de-ley/", ProyectoListView.as_view()),
]
