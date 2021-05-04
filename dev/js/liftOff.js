import { gsap } from "gsap";

gsap.set("#Rocket",{transformOrigin:"center"});


export let liftOffTL = gsap.timeline();

liftOffTL.to("#Rocket",{duration:3, y:"-=400", scale:.50, ease: "power3.in"},"upAndAway")
            .to("#CloudsGroup",{duration:5, y:"+=900", ease: "power3.in"},'upAndAway')
            .to("#Flowers-Group",{duration:5, y:"+=800", ease: "power3.in"},'upAndAway')
            .to("#Bushes",{duration:5, y:"+=700", ease: "power3.in"},'upAndAway')
            .to("#Grass",{duration:5, y:"+=800", ease: "power3.in"},'upAndAway')
            .to("#Sun-",{duration:5.4, y:"+=1100", ease: "power3.in"},'upAndAway')
            .from("#Space",{duration:5, alpha:0, ease: "power3.in"},'upAndAway');

