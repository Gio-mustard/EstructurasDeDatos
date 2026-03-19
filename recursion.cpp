#include <iostream>
void decrement_count(int value){
    std::cout << value << std::endl; // ESTO ES UN PRINT EN CONSOLA
    if (value == 0){
        return;
    }
    decrement_count(value-1);
}

int sum(int n){
    return n == 0 ?  0 : n + sum(n-1);    
}

int main() {
    std::cout << "----decrement count----" << std::endl;
    decrement_count(10);
    std::cout<<"-----sum of n numbers-----"<<std::endl;
    std::cout << sum(3)<<std::endl;
    return 0;
}
//g++ recursion.cpp -o recursion
