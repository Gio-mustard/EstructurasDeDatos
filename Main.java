import java.util.Scanner;
public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        DoubleLinkedList mySingleLinkedList = new CircularLinkedList(null);
        boolean running = false;

        if (!running){
            mySingleLinkedList.append(1);
            mySingleLinkedList.append(2);
            mySingleLinkedList.append(4);
            mySingleLinkedList.append(5);
            
            mySingleLinkedList.prepend(0);
            mySingleLinkedList.insert(3,3);
            mySingleLinkedList.remove(3);
            Node value =  mySingleLinkedList.search(5);
            System.out.println("--Nodo encontrado "+value);
            System.out.println("\n\n\n"+mySingleLinkedList.traverse());
        }
        while (running) {
            showMenu();
            System.out.print("Elige una opción: ");
            String input = sc.nextLine();
            int option;

            try {
                option = Integer.parseInt(input);
            } catch (NumberFormatException e) {
                System.out.println("\nOpción no válida. Por favor, introduce un número.");
                continue;
            }

            switch (option) {
                case 1:
                    System.out.print("Valor a insertar al inicio: ");
                    int valPre = Integer.parseInt(sc.nextLine());
                    mySingleLinkedList.prepend(valPre);
                    
                    break;

                case 2:
                    System.out.print("Valor a insertar al final: ");
                    int valApp = Integer.parseInt(sc.nextLine());
                    mySingleLinkedList.append(valApp);
                    
                    break;

                case 3:
                    try {
                        System.out.print("Índice donde insertar: ");
                        int idxIns = Integer.parseInt(sc.nextLine());
                        System.out.print("Valor a insertar: ");
                        int valIns = Integer.parseInt(sc.nextLine());
                        mySingleLinkedList.insert(idxIns, valIns);
                    
                    } catch (Exception e) {
                        System.out.println("\nError al insertar: " + e.getMessage());
                    }
                    break;

                case 4:
                    System.out.print("Índice a eliminar: ");
                    int idxRem = Integer.parseInt(sc.nextLine());
                    boolean removed = mySingleLinkedList.remove(idxRem);
                    if (!removed) {
                        System.out.println("\nNo se pudo eliminar: índice inválido.");
                    }
                    break;

                case 5:
                    System.out.print("Valor a buscar: ");
                    int valSearch = Integer.parseInt(sc.nextLine());
                    String nodeInfo = mySingleLinkedList.search(valSearch).toString();
                    if (nodeInfo == null) {
                        System.out.println("\nValor " + valSearch + " no encontrado en la lista.");
                    } else {
                        System.out.println("\nValor " + valSearch + " encontrado: " + nodeInfo);
                    }
                    break;

                case 6:
                    System.out.println("\nLista actual:");
                    System.out.println(mySingleLinkedList.traverse());
                    break;

                case 0:
                    System.out.println("Saliendo...");
                    running = false;
                    break;

                default:
                    System.out.println("\nOpción no válida.");
            }
        }
        sc.close();
    }

    private static void showMenu() {
        System.out.println("\n============================");
        System.out.println("       SINGLE LINKED LIST   ");
        System.out.println("============================");
        System.out.println("1. Prepend (insertar al inicio)");
        System.out.println("2. Append (insertar al final)");
        System.out.println("3. Insert (insertar por índice)");
        System.out.println("4. Remove (eliminar por índice)");
        System.out.println("5. Search (buscar por valor)");
        System.out.println("6. Traverse (imprimir lista)");
        System.out.println("0. Salir");
        System.out.println("============================");
    }

}

