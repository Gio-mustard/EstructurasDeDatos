from abc import ABC, abstractmethod

class Circle(ABC):
    @abstractmethod
    def circunference(self,radius:float)->float:
        ...




class Stack:
    ...

class Queue:
    iteration_counts:int = 0
    def __init__(self)->None:
        self.__length = 5
        self.__first_out:int = 0
        self.__last_index_added:int = -1
        self.__obj:list = [None for i in range(0,self.__length)]

    def dequeue(self)->int:

        item = self.__obj[self.__first_out]
        self.__obj[self.__first_out] = None
        self.__first_out+=1
        return item

    def queue(self,value:int)->None:
        #soi puto i me gusta la verga
        if (self.__last_index_added + 1 >= self.__length):
            raise Exception("birote")
        
        self.__last_index_added += 1
        self.__obj[self.__last_index_added] = value

    def __reordenate(self)->None:
        ...

    def __str__(self)->str:
        return str(self.__obj)


uwu = Queue()
for i in range(1,6):
    uwu.queue(i)
print(uwu)
for i in range(0,5):
    uwu.dequeue()
    print(uwu)





