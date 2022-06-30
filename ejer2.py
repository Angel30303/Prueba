n1 = int(input("Ingresar el tamaño de la escalera: "))
i = 0
j = 0
for i in range(n1):
    
    for j in range(i + 1):
        print("*", end="")
        
    print("\t")