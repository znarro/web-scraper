from rest_framework import serializers

from .models import ProyectoDeLey


class ProyectoDeLeySerializer(serializers.ModelSerializer):
    class Meta:
        model = ProyectoDeLey
        fields = ("numero", "fec_ult", "fec_pres", "estado", "titulo_del_proyecto")
