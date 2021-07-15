from divia_api import DiviaAPI
from datetime import date, datetime
from browser import window

api = DiviaAPI()


def bridge(ligne, sens, arret):
    totem_result = api.find_stop(ligne, arret, sens).totem()
    now = datetime.now()
    processed_result = []
    for t in totem_result:
        processed_result.append(str(round((t - now).total_seconds() / 60)))
    return processed_result


window.diviaApiBridge = bridge
