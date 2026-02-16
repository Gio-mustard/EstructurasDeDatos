from abc import ABC, abstractmethod
import os
from stack import *
from queue import *



def uso_caso_4(ClassQueueue):
    """Cola con 5 elementos que salen y entran otros 5"""
    cola = ClassQueueue()
    
    print("\n--- Caso de uso 4: Entrada y salida secuencial ---")
    
    print("Agregando primeros 5 elementos...")
    for i in range(1, 6):
        cola.queue(i)
    
    print("Sacando 5 elementos...")
    for _ in range(5):
        print(f"Elemento sacado: {cola.dequeue()}")
    
    
    print("Agregando otros 5 elementos...")
    for i in range(6, 11):
        cola.queue(i)
    
    print(f"Cola final: {cola}")

def uso_caso_5(ClassQueueue):
    """Cola con entradas y salidas alternadas múltiples veces"""
    cola = ClassQueueue()
    print("\n--- Caso de uso 5: Entradas y salidas alternadas ---")
    
    for ciclo in range(1, 4):
        print(f"Ciclo {ciclo}:")
        for i in range(1, 4):
            cola.queue(i + (ciclo-1)*3)
        for _ in range(3):
            print(f"  Sacado: {cola.dequeue()}")

def uso_caso_6(ClassQueueue):
    """Simulación de un restaurant: clientes llegan y son atendidos. puedes ignorar este caso de uso no voy a andar explicando mi punto con el solo esta por los jajas"""
    cola = ClassQueueue()
    print("\n--- Caso de uso 6: Simulación de restaurant ---")
    
    clientes_llegada = [1, 2, 3, 4, 5]
    mesa_actual = 1
    
    for cliente_id in clientes_llegada:
        cola.queue(cliente_id)
        print(f"Cliente {cliente_id} llega al restaurant")
        if cliente_id % 2 == 0:
            atendido = cola.dequeue()
            print(f"  → Cliente {atendido} es asignado a mesa {mesa_actual}")
            mesa_actual += 1
    
    print("Atendiendo clientes restantes:")
    while True:
        cliente = cola.dequeue()
        if cliente is None:
            break
        print(f"  → Cliente {cliente} es asignado a mesa {mesa_actual}")
        mesa_actual += 1
    
    def limpiar_consola():
        os.system('clear')
if __name__ == "__main__":
    if True:
        uso_caso_4(CircularQueue)
        # uso_caso_5(CircularQueue)
        # uso_caso_6(CircularQueue)
        print('*'*50)
        uwu = CircularQueue()
        numbers = ''
        for i in range(0, 100):
            
            uwu.queue(i)
            if i % 5 == 0:
                for j in range(0,5):
                    number = uwu.dequeue()        
                    numbers += f"Dequeue: {number}\n"
            
        with open('numbers.txt','w') as f:
            f.write("Iniciando simulación de cola circular\n")
            f.write(numbers)
        




        

        print('*'*50)
        print(f'{Queue.iteration_counts=}')

    else:
        pila = Stack()
        pila.push(1)
        pila.push(2)
        pila.push(3)
        pila.push(4)
        pila.push(5)
        print(pila)
