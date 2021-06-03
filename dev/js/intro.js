import { gsap } from "gsap";

export let introTL = gsap.timeline();

introTL.to("#JeepDashboard",{alpha:1 , duration:5})


export function introAnimation(){
    return introTL;
}