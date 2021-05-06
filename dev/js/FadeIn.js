import { gsap } from "gsap";

export let fadeInTL = gsap.timeline();
fadeInTL.from("#Background",{alpha:0, stagger:0.25, duration:2})
        .from("#CloudsGroup",{alpha:0, stagger:0.25, duration:2}, "-=.5")
        .from("#Sun-",{alpha:0, duration:.5}, "-=1")
        .from("#Sun1",{duration:.5, alpha:0},"sametime")
        .from("#Sun2",{duration:.5, alpha:0},"sametime")
     