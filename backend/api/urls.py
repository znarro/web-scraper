from django.urls import path

from .views import ProyectoListView

urlpatterns = [
    path("proyectos-de-ley/", ProyectoListView.as_view()),
]
