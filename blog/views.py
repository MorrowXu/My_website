from django.shortcuts import render

# Create your views here.
def getindex(request):
    return render(request, 'index.html')


def gettest(request):
    return render(request, 'test.html')

def getform(request):
    return  render(request, 'message_form.html')

