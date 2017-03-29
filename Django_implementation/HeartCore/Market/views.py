from django.http import HttpResponseNotAllowed, HttpResponse
from django.shortcuts import render
from . import cast_char
import traceback



def update_cart(request):
    cart = []
    items = request.session.get("inCart")
    print "ITEMS",items
    if items:
        cart.extend(items)
    print request.GET
    clear = request.GET.get("clear")
    print "XXX",clear

    if clear:
        print "CLEARING" 
        request.session["inCart"] = []
        return HttpResponse('ok')

    try: 
        if not request.is_ajax():
            return HttpResponseNotAllowed(['POST'])
        cart.append(request.GET.get("inCart"))
        request.session['inCart'] = cart
        print request.session 
    
    except:
        print "Uh Oh"    
        traceback.print_exc()

    return HttpResponse('ok')


#a Create your views here.



def index(request):

    print request.session.get("inCart")    

    template = "templates/Market/index.html"
    content = { 
               "cast" : cast_char.CAST,
               "c_suite" : cast_char.C_SUITE,
              }
    


    return render(request, template, content)


def details(request):
    adder = {
        "flower_bomb" : ["I have a headache.",
                           "Do you ever wonder about fate?",
                           "Tell me a secret.",
                           "You're as pretty as a picture."],
        "sacre_bleu" : ["Let's strike a pose.", "I'd like some tea","Help me loosen up.","How do you like to spend your weekend?"],
        "tyler_d" : ["Cheer me up" "Motivate me.", "Let's play a game!", "Say cheese!"],
        "kristen_barlow" : ["Your eyes are dark and soulless.", "I like my women strong.","I'm feeling a little tense.","You know what will last longer?"],
        "flynn_barbary" : ["May I have this dance?", "Allow me to start a beat for you.","I would like to capture this moment with you.", "Tell me something no one knows."],


    }
    status = ""

    entry = request.GET.get("entry")
    code = request.GET.get("code")

    if code == "7a90e549879d86336e1258edf765d007dc8f21831253b157dc835182460935dd":
        add_info = adder[entry] 

    else:
        add_info = None

    print "GETTING", entry

    if not entry: status = "invalid query"

    content = {
               "Name" : entry,
               "directions" : add_info,
               "Picture" : "",   
               "cast_story" : cast_char.STAFF[entry]["real"],
               "char_story" : cast_char.STAFF[entry]["fake"]
              }

    template = "templates/Market/details.html"

    return render(request, template, content) 


def sub_details(request):
    array_choice = request.GET.get("entry")
    
    print array_choice
    list_of_cast = cast_char.MASTER[array_choice]
    
    dict_of_bios = {}

    #Get BIOS from Staff 
    for char in list_of_cast:
        print "!!!!!!!!!",char
        dict_of_bios[char] = cast_char.STAFF[char]
        print "????????????????\n", dict_of_bios[char]
        summary = dict_of_bios[char]["fake"] 

    content = {
       "summary" : summary,
       "title" : array_choice,
       "dict_of_bios" : dict_of_bios,
       "test" : ["tech_support","key_staff"]
    }

    print dict_of_bios 
    template = "templates/Market/sub_details.html"

    return render(request, template, content)



def cart(request):

  status = ""

  content = {"IN_CART": request.session.get("inCart")}

  template = "templates/Market/cart.html"

  return render(request, template, content)
