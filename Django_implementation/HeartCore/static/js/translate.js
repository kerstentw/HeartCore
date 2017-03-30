 people_array = {
 "#scott_asti" : ["Scott Asti","Marcus Moretti"],
 "#lynn":["Sarah Welles","Sarah Welles"],
 "#kevin_lambert" :["Kevin Lambert","Baxter Jones"],
 "#flower_bomb" : ["Flower Bomb","EDI"],
 "#sacre_bleu" : ["Sacre Bleu","DOT"],
 "#tyler_d" : ["Tyler D/Vanessica Carver", "CAL"],
 "#kristen_barlow" : ["Veronica Ice","GEM"],
 "#flynn_barbary" : ["Hakoda","FIN"],
 "#angie_ahn" : ["MaybeBaby","MaybeBaby"],
 "#caitlin_michelle" : ["Dahlia Doll","Dahlia Doll"],
 "#joey_park" : ["Jasper Jigglebuns","Jasper Jigglebuns"],
 "#melissa_harper" : ["Reivyn Vicieux - Stage Manager","Bee Khadka"],
 "#nick_holmes" : ["Maia Pussy Sparkles - Assistant Stage Manager", "Maia Pussy Sparkles"],
 "#ruby_lee" : ["Ruby Lee - Run Crew","Ruby Lee"],
 "#corlina_wilkins" : ["Katastrophy - Run Crew", "Katastrophy"],
 "#sc_clarke" : ["S.C. Clarke - Writer","Narrative Programmer"],
 "#robert_evans" : ["Robert Michael Evans - Photographer", "Robotron"],
 "#tai_kersten" : ["Jim","Code Threader"],
 "#key_staff" : ["Key Staff","Key Staff"],
 "#facilitation_bots" : ["Facilitation Bots", "Facilitation Bots"],
 "#lab_assets" : ["Lab Assistants","Lab Assistants"],
 "#tech_support" : ["Tech Support", "Tech Support"],
 "#emily_robinette" : ["Ms. Dee - Run Crew", "Emily Robinette"]
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

