from urllib.request import urlopen
from bs4 import BeautifulSoup
import mechanicalsoup

from .models import ProyectoDeLey


URL = "http://www.congreso.gob.pe/pley-2016-2021/"


def scrapear_proyectos():
    html = urlopen(URL).read().decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")
    browser = mechanicalsoup.Browser()

    proyectos_url = soup.iframe["src"]
    proyectos_html = browser.get(proyectos_url).soup

    tabla_de_proyectos = proyectos_html.find_all("table")[1]
    filas_de_proyectos = tabla_de_proyectos.find_all("tr", valign="top")

    crear_proyecto_en_db(filas_de_proyectos)


def crear_proyecto_en_db(proyectos):
    for proyecto in proyectos:
        numero, fec_ult, fec_pres, estado, titulo_del_proyecto = proyecto.find_all("td")

        fec_ult = None if fec_ult.text == "" else fec_ult.text

        ProyectoDeLey.objects.create(
            numero=numero.font.a.text,
            fec_ult=fec_ult,
            fec_pres=fec_pres.text,
            estado=estado.text,
            titulo_del_proyecto=titulo_del_proyecto.text,
        )
