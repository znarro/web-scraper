from rest_framework import generics

from .models import ProyectoDeLey
from .serializers import ProyectoDeLeySerializer


class ProyectoListView(generics.ListAPIView):
    queryset = ProyectoDeLey.objects.all()
    serializer_class = ProyectoDeLeySerializer


class ProyectoDetailView(generics.RetrieveAPIView):
    queryset = ProyectoDeLey.objects.all()
    serializer_class = ProyectoDeLeySerializer
    lookup_field = "numero"
