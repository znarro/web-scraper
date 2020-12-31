from django.db import models


class ProyectoDeLey(models.Model):
    numero = models.CharField(max_length=50, unique=True)
    fec_ult = models.CharField(max_length=20, blank=True, null=True)
    fec_pres = models.CharField(max_length=20)
    estado = models.CharField(max_length=100)
    titulo_del_proyecto = models.TextField()
    periodo = models.CharField(max_length=50)
    legislatura = models.CharField(max_length=50)
    proponente = models.CharField(max_length=50)
    grupo_parlamentario = models.CharField(max_length=50)
    sumilla = models.TextField()
    autores = models.TextField()

    def __str__(self):
        return self.titulo_del_proyecto
