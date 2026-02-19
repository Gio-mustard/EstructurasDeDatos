from stack import *
from queue import *

if __name__ == '__main__':
    global stack 
    stack = Stack()
    global queue 
    queue = Queue()
    options = {
        1:lambda value :( stack.push(value) , f'Se agrego el elemento {value} al stack'), # Push stack
        2:lambda : (None,f'Se saco el elemento {stack.pop()} del stack'), # pop stack
        3:lambda  : (print(stack),''), # show stack

        4:lambda value : (queue.queue(value),f'Se agrego el elemento {value} al Queue'),
        5:lambda  : (None,f'Se saco el elemento {queue.enqueue()} del Queue'),
        6:lambda  :(print(queue),''),
    }
    
    while True:
        
        print('----[1] Agregar un elemento al Stack')
        print('----[2] Sacar un elemento al Stack')
        print('----[3] Mostrar el Stack')


        print('----[4] Agregar un elemento al Queue')
        print('----[5] Sacar un elemento al Queue')
        print('----[6] Mostrar el Queue')
        print('----[0] Salir del programa')
        option = int(input(":"))

        if option == 0:
            break

        option_selected = options.get(option,None)

        if option_selected is None:
            print("---esa opcion no esta definida")
            continue
        
        if option == 1 or option == 4: # Option for insert element
            value = int( input("-- Ingresa el valor NUMERICO :") )
            response = option_selected(value)[1] # exec the option and get the message
        else:
            response = option_selected()[1] # exec the option and get the message

        if response != '':
            
            print('-'*10,response,'-'*10,sep='\n') # show the message from execution
        