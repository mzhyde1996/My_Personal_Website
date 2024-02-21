import Dashboard from "./views/Dashboard.js";
import Posts from "./views/Posts.js";
import Settings from "./views/Settings.js";
import Contact from "./views/Contact.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async()=>{
const routes=[
{path: "/", view: Dashboard},
{path: "/posts", view: Posts},
{path: "/settings", view: Settings},
{path: "/contact", view: Contact}
];

//test each route

const potentialMacthes = routes.map(route =>{
    return {
        route: route,
        isMatch: location.pathname === route.path
    };
});

let match = potentialMacthes.find(potentialMacth=>potentialMacth.isMatch);
if(!match){
    match={
        route: routes[0],
        isMatch: true
    };
}
const view = new match.route.view();

document.querySelector("#app").innerHTML=await view.getHtml();


};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e=>{
        if(e.target.matches("[data-link]")){
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    router();
});