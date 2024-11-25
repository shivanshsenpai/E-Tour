from django.shortcuts import render, HttpResponse

# Create your views here.
def HomePage(request):
    return render(request,'HomePage.html')
    #return HttpResponse("This is homepage")
def plans(request):
    return render(request, 'plans.html')

def far_away(request):
    return render(request, 'far_away.html')

def option(request):
    return render(request, 'option.html')

def index2(request):
    return render(request, 'index.html')

def contact(request):
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html')



def services(request):
    return HttpResponse("This is a services page")

