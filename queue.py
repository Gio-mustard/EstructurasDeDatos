
class Queue:
    iteration_counts:int = 0
    def __init__(self)->None:
        # Cola no circular, basada en arreglo fijo, con reordenamiento bajo demanda
        self.length = 5
        self.first_out:int = 0
        self.last_index_added:int = -1
        self.obj:list = [None for i in range(0,self.length)]
        self.count:int = 0

    def dequeue(self)->int|None:
        if self.count == 0:
            # Cola vacia
            return None
        item = self.obj[self.first_out]
        self.obj[self.first_out] = None
        self.first_out+=1
        self.count -= 1
        

        return item

    def queue(self,value:int)->None:
        
        if self.count == self.length:
            print('cola llena')
            return
            
        if (self.last_index_added + 1 >= self.length):
            self.reordenate()
        
        
        self.last_index_added += 1
        self.obj[self.last_index_added] = value
        self.count += 1
        


    def reordenate(self)->None:
        temp:list = [None for i in range(0,self.length)]
        for i in range(self.first_out,self.last_index_added+1):
            temp[i-self.first_out] = self.obj[i]
            Queue.iteration_counts += 1
        self.obj = temp
        self.last_index_added -= self.first_out
        self.first_out = 0

    def __str__(self)->str:
        return str(self.obj)
    
class CircularQueue:
    def __init__(self) -> None:
        self.length: int = 5
        self.first_out: int = 0
        self.last_index_added: int = 0
        self.count: int = 0
        self.obj: list[int | None] = [None for _ in range(self.length)]

    def dequeue(self) -> int | None:
        if self.count == 0:
            return None

        item = self.obj[self.first_out]
        self.obj[self.first_out] = None

        self.first_out = (self.first_out + 1) % self.length
        self.count -= 1

        return item

    def queue(self, value: int) -> None:
        if self.count == self.length:
            print("cola llena")
            return

        self.obj[self.last_index_added] = value
        self.last_index_added = (self.last_index_added + 1) % self.length
        self.count += 1

    def __str__(self) -> str:
        return str(self.obj)

