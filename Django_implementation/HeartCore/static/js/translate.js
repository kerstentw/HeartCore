 people_array = {
 "#scott_asti" : ["Scott Asti","Marcus Moretti"],
 "#lynn":["Sarah Welles","Sarah Welles"],
 "#kevin_lambert" :["Kevin Lambert","Baxter Jones"],
 "#flower_bomb" : ["Flower Bomb","EDI"],
 "#sacre_bleu" : ["Sacre Bleu","DOT"],
 "#tyler_d" : ["Tyler D/Vanessica Carver", "CAL"],
 "#kristen_barlow" : ["Veronica Ice","GEM"],
 "#flynn_barbary" : ["Flynn Barbary/Hakoda","FIN"],
 "#angie_ahn" : ["Angie Ahn/Maybe Baby","Maybe Baby"],
 "#caitlin_michelle" : ["Caitlin Michelle/Dahlia Doll","Dahlia Doll"],
 "#joey_park" : ["Joey Park","Joe Park"],
 "#melissa_harper" : ["Melissa Harper/Bee","Bee"],
 "#nick_holmes" : ["Nick Holmes", "The True Hottie"],
 "#ruby_lee" : ["Nati Reyes/Ruby Lee","Ruby Lee"],
 "#corlina_wilkins" : ["Corlia Wilkins/Katastrophy", "Katastrophy"],
 "#sc_clarke" : ["S.C. Clarke - Writer","Narrative Programmer"],
 "#robert_evans" : ["Robert Michael Evans - Photographer", "Robotron"],
 "#tai_kersten" : ["Dean Currie - Dean Currie","Code Threader"],
 "#key_staff" : ["Key Staff","Key Staff"],
 "#facilitation_bots" : ["Facilitation Bots", "Facilitation Bots"],
 "#lab_assets" : ["Lab Assistants","Lab Assistants"],
 "#tech_support" : ["Tech Support", "Tech Support"]
}

var set_page = function(){
    for (name in people_array){
        $(name).text(people_array[name][1])
    }
   }
 
var set_real_name = function(){
    for (name in people_array){
        $(name).text(people_array[name][0]);
    }
   }

$(window).ready(function(){
    set_page();
});

