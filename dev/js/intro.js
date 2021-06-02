import { gsap } from "gsap";

export let introTL = gsap.timeline();

introTL.from("#Background",{alpha:0, stagger:0.25, duration:2})
     