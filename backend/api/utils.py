from urllib.request import urlopen
from bs4 import BeautifulSoup
import mechanicalsoup

from .models import ProyectoDeLey


URL = "http://www.congreso.gob.pe/pley-2016-2021/"
DETAIL_BASE_URL = "http://www2.congreso.gob.pe"

browser = mechanicalsoup.Browser()


def scrapear_proyectos():
    html = urlopen(URL).read().decode("utf-8")
    soup = BeautifulSoup(html, "html.parser")

    proyectos_url = soup.iframe["src"]
    proyectos_html = browser.get(proyectos_url).soup

    tabla_de_proyectos = proyectos_html.find_all("table")[1]
    filas_de_proyectos = tabla_de_proyectos.find_all("tr", valign="top")

    crear_proyecto_en_db(filas_de_proyectos)


def crear_proyecto_en_db(proyectos):
    for proyecto in proyectos:
        numero, fec_ult, fec_pres, estado, titulo_del_proyecto = proyecto.find_all("td")

        path = numero.font.a["href"]
        detalle_html = browser.get(DETAIL_BASE_URL + path).soup
        tabla_detalle = detalle_html.find_all("table")[0].table
        filas_de_detalle = tabla_detalle.find_all("tr")

        (
            periodo,
            legislatura,
            _fecha_pres,
            _num,
            proponente,
            grupo_parlamentario,
            _tit,
            sumilla,
            autores,
            _seguim,
            *others,
        ) = filas_de_detalle

        fec_ult = None if fec_ult.text == "" else fec_ult.text

        ProyectoDeLey.objects.create(
            numero=numero.font.a.text,
            fec_ult=fec_ult,
            fec_pres=fec_pres.text,
            estado=estado.text,
            titulo_del_proyecto=titulo_del_proyecto.text,
            periodo=periodo.td.next_sibling.font.text,
            legislatura=legislatura.td.next_sibling.font.text,
            proponente=proponente.td.next_sibling.font.text,
            grupo_parlamentario=grupo_parlamentario.td.next_sibling.font.text,
            sumilla=sumilla.td.next_sibling.font.text,
            autores=autores.td.next_sibling.font.text,
        )
