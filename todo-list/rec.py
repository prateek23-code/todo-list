def fact(n):

    if n==1:
    	return 1
    f=n*fact(n-1)
    return f
	

print(fact(4))