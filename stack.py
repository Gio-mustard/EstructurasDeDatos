
class Stack:
    def __init__(self)->None:
        self.length = 5
        self.__last_index_added:int = -1
        self.__obj:list = [None for i in range(0,self.length)]

    def pop(self)->int|None:
        if (self.__last_index_added == -1):
            print('*'*5,'stack vacia', '*'*5)
            return None
        item = self.__obj[self.__last_index_added]
        self.__obj[self.__last_index_added] = None
        self.__last_index_added-=1

        return item

    def push(self,value:int)->None:
        if (self.__last_index_added + 1 >= self.length):
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
    
class StackPeroConUnContadorPorqueEstaMasPapita():
    def __init__(self)->None:
        self.length = 5
        self.__last_index_added:int = -1
        self.__obj:list = [None for i in range(0,self.length)]
        self.__count = 0

    def pop(self)->int|None:
        if (self.__count == 0):
            print('*'*5,'stack vacia', '*'*5)
            return None
        item = self.__obj[self.__last_index_added]
        self.__obj[self.__last_index_added] = None
        self.__last_index_added-=1
        self.__count -= 1

        return item

    def push(self,value:int)->None:
        if (self.__count == self.length):
            print('*'*5,'pila stack', '*'*5)
            return
        self.__last_index_added += 1
        self.__obj[self.__last_index_added] = value
        self.__count += 1

    def next(self):
        for i in range(self.__last_index_added,-1,-1):
            yield self.__obj[i]

    def __str__(self)->str:
        to_return:str = ''
        for item in self.next():
            to_return += f'--{item}\n'
        return to_return
    
