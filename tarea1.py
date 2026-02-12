from abc import ABC, abstractmethod

class Circle(ABC):
    @abstractmethod
    def circunference(self,radius:float)->float:
        ...




class Stack:
    def __init__(self)->None:
        self.__length = 5
        self.__last_index_added:int = -1
        self.__obj:list = [None for i in range(0,self.__length)]

    def pop(self)->int|None:
        if (self.__last_index_added == -1):
            print('*'*5,'stack vacia', '*'*5)
            return None
        item = self.__obj[self.__last_index_added]
        self.__obj[self.__last_index_added] = None
        self.__last_index_added-=1

        return item

    def push(self,value:int)->None:
        if (self.__last_index_added + 1 >= self.__length):
            print('*'*5,'pila stack', '*'*5)
            return
        self.__last_index_added += 1
        self.__obj[self.__last_index_added] = value

    def next(self):
        for i in range(self.__last_index_added,-1,-1):
            yield self.__obj[i]

    def __str__(self)->str:
        to_return:str = ''
        for item in self.next():
            to_return += f'--{item}\n'
        return to_return

class Queue:
    iteration_counts:int = 0
    def __init__(self)->None:
        self.__length = 5
        self.__first_out:int = 0
        self.__last_index_added:int = -1
        self.__obj:list = [None for i in range(0,self.__length)]

    def dequeue(self)->int|None:
        if (self.__first_out > self.__last_index_added):
            # Cola vacia
            return None
        item = self.__obj[self.__first_out]
        self.__obj[self.__first_out] = None
        self.__first_out+=1
        

        return item

    def queue(self,value:int)->None:
        #soi puto i me gusta la verga
        if (self.__first_out == 0 and self.__last_index_added == self.__length-1):
            print('cola llena')
            return
            
        if (self.__last_index_added + 1 >= self.__length):
            self.__reordenate()
        
        
        self.__last_index_added += 1
        self.__obj[self.__last_index_added] = value
        


    def __reordenate(self)->None:
        temp:list = [None for i in range(0,self.__length)]
        for i in range(self.__first_out,self.__last_index_added+1):
            temp[i-self.__first_out] = self.__obj[i]
            Queue.iteration_counts += 1
        self.__obj = temp
        self.__last_index_added -= self.__first_out
        self.__first_out = 0

    def __str__(self)->str:
        return str(self.__obj)


def uso_caso_4():
    """Cola con 5 elementos que salen y entran otros 5"""
    cola = Queue()
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

def uso_caso_5():
    """Cola con entradas y salidas alternadas múltiples veces"""
    cola = Queue()
    print("\n--- Caso de uso 5: Entradas y salidas alternadas ---")
    
    for ciclo in range(1, 4):
        print(f"Ciclo {ciclo}:")
        for i in range(1, 4):
            cola.queue(i + (ciclo-1)*3)
        for _ in range(3):
            print(f"  Sacado: {cola.dequeue()}")

def uso_caso_6():
    """Simulación de un restaurant: clientes llegan y son atendidos. puedes ignorar este caso de uso no voy a andar explicando mi punto con el solo esta por los jajas"""
    cola = Queue()
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
    

if __name__ == "__main__":
    if False:
        uso_caso_4()
        uso_caso_5()
        uso_caso_6()
        

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
