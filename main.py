import time
import os

def escribir(texto, velocidad=0.04):
    for letra in texto:
        print(letra, end="", flush=True)
        time.sleep(velocidad)
    print()

print("❤️ SISTEMA DE ACCESO ❤️")

nombre = ""

while nombre.lower() != "lina":
    nombre = input("\n¿Cómo te llamo normalmente? ")

    if nombre.lower() != "lina":
        print("ta's pendeja  intenta nuevamente.")

        
escribir("\n✓ Lina detectada")

escribir("Buscando felicidad...")
time.sleep(1)

escribir("Buscando sonrisas...")
time.sleep(1)

escribir("Buscando recuerdos...")
time.sleep(1)

escribir("\n FELIZ CUMPLEAÑOS 🎂")
time.sleep(1)

print("\nEdad actual: 19")
time.sleep(1)

escribir("Actualizando edad...")
time.sleep(2)

print("\n19 ➜ 20 ❤️")

escribir("\n NUEVA ETAPA DESBLOQUEADA = 20 años ¡¡tas vieja!! ✨")
time.sleep(1)

escribir("\nEste programa fue creado especialmente para ti.")
escribir("Espero que tengas un día increíble ❤️")

time.sleep(2)

print("\nAbriendo sorpresa...")

# Busca sorpresa.html en la misma carpeta que main.py
archivo = os.path.join(
    os.path.dirname(os.path.abspath(__file__)),
    "sorpresa.html"
)

if os.path.exists(archivo):
    os.startfile(archivo)
else:
    print("❌ No se encontró sorpresa.html")
    print("Ruta buscada:", archivo)
