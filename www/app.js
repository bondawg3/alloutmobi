// This code comes was modified from Christophe Coenraets https://github.com/ccoenraets/PageSlider/blob/master/app.js
// The dynamically built HTML pages. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
var homePage =
    '<div>' +
        '<div class="scroller">' +
            '<div class="list">' +
                '<div class="listitem">' +
                    '<a href="#page1">' +
                    '<img class="imgdiv" src="images/Love-Always-Wins-feeldesain2.jpg">' +
                    '<div class="name">THE VIDEO RUSSIAN LEADERS DON’T WANT YOU TO SEE</div>' +
                    '<div class="description">There’s an anti-gay war waging in Russia.</div>' +
                '</div>' +
                '<div class="listitem">' +
                    '<a href="#page2">' +
                    '<img class="imgdiv" src="images/allout_image_5969_full.jpg">' +
                    '<div class="name">UGANDA: FACTS ON THE NEW EXTREME ANTI-GAY LAW</div>' +
                    '<div class="description">We call you to do everything within your power to stop the Anti-Homosexuality Bill.</div>' +
                '</div>' +
                '<div class="listitem">' +
                    '<a href="#page3">' +
                    '<img class="imgdiv" src="images/allout_image_5983_full.jpg">' +
                    '<div class="name">ILLEGAL TO BE GAY IN INDIA</div>' +
                    '<div class="description">India Supreme Court made it illegal to be gay, again. Stand against Section 377!</div>' +
                '</div>' +
                '<div class="listitem">' +
                    '<a href="#page4">' +
                    '<img class="imgdiv" src="images/Iraq_All_original.jpg">' +
                    '<div class="name">OPERATION RELOCATION</div>' +
                    '<div class="description">Help Iraqis now.</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';


var detailsPage =
    '<div>' +
        '<div class="header">' +
            '<div class="header"><img class="mobibannersvg" src="images/logopennant.svg" alt="All Out!"></div>' + 
            '<a href="#" class="btn">Back</a>' +
        '</div>' +
        '<div class="scroller">' +
            '<div class="campaign">' +
                '<h2>{{name}}</h2>' +
                '<img src="images/{{img}}"/>' +
                '<p>{{description}}</p>' +
                '<p>{{main_content}}</p>' +
                '<div class="btn">' +
                    '<img src="images/sign%20and%20share%20btn.svg" alt="Sign & Share!">' +
                    '<div class="calltoaction">Sign & Share!</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
    '</div>';

var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

    if (hash === "#page1") {
        page = merge(detailsPage, {img: "Love-Always-Wins-feeldesain2.jpg",name: "THE VIDEO RUSSIAN LEADERS DON’T WANT YOU TO SEE",description: "There’s an anti-gay war waging in Russia as the country gets ready to host the Olympics.",main_content: "Russia is in the midst of a violent crackdown against lesbian, gay, bi and trans people - fueled by laws that make it a crime to be open about who you are and who you love. The countdown is on for Russia’s winter Olympics and, very soon, all eyes will be on them. The Olympic games are our best chance to end to Russia's outrageous anti-gay laws – but to do it, it’s going to take lots more of us to hear about what’s happening in Russia. Watch this beautiful 2-minute video, and please share it with your family and friends. You can also sign the petition here"});
// slider.slide($(page), "right");
    } else if (hash === "#page2") {
        page = merge(detailsPage, {img: "allout_image_5969_full.jpg",name: "UGANDA: FACTS ON THE NEW EXTREME ANTI-GAY LAW",description: "We call you to do everything within your power to stop the Anti-Homosexuality Bill.",main_content: "257,459 people support this campaign. Help us get to 300,000! UPDATE - 20 DEC 2013 - Uganda's parliament on Friday adopted an anti-gay bill that will see repeat offenders jailed for life. The All Out office team are talking urgently to Ugandan LGBT groups. Sign the petition now."});
// slider.slide($(page), "right");
    } else if (hash === "#page3") {
        page = merge(detailsPage, {img: "allout_image_5983_full.jpg",name: "ILLEGAL TO BE GAY IN INDIA",description: "India's Supreme Court has just made it illegal to be gay - again. Stand against Section 377!",main_content: "India's Supreme Court has made it illegal to be gay, four years after the anti-gay law was suspended. Millions of people will now be at risk because of who they are and who they love.This is a frightening moment for lesbian, gay, bi and trans people in India, including Indian All Out members. Can you sign the message of support? You can add your own personal words of love and hope too - all the names and messages will be sent to LGBT groups across India."});
// slider.slide($(page), "right");
    } else if (hash === "#page4") {
        page = merge(detailsPage, {img: "Iraq_All_original.jpg",name: "OPERATION RELOCATION",description: "Help Iraqis now.",main_content: "147 people have donated. Help us to get 3,000. Operation Relocation has begun with the first seven Iraqis now on their way to safety - but there is still more we can do to help. Our partners at the Iraqi Refugee Assistance Program (IRAP) have been able to immediately relocate those most in danger AND place two more people on the ground to help identify more at-risk people, knowing that those most in-danger are often the most hidden and hardest to reach."});
// slider.slide($(page), "right");
    }
    else {
        page = homePage;
// slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description)
              .replace("{{main_content}}", data.main_content);
    
}

route();