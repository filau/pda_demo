from divia_api import DiviaAPI

#api = DiviaAPI()

print(DiviaAPI().find_line("T1", "A").find_stop("Godrans").totem())