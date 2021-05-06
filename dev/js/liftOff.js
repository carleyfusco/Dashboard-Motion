import { gsap } from "gsap";

gsap.set("#Rocket",{transformOrigin:"center"});


export let liftOffTL = gsap.timeline();

liftOffTL.to("#Rocket",{duration:.1, x:"-=0", ease: "power3.in"})
            .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
            .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
            .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
            .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
            .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
            .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
            .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})

            .from("#Flames",{duration:.1, alpha:0})
            .to("#Flames",{duration:.1, alpha:0})
            .to("#Flames",{duration:.1, alpha:1})
            .to("#Flames",{duration:.1, alpha:0})
            .to("#Flames",{duration:.1, alpha:1})
            .to("#Flames",{duration:.1, alpha:0})
            .to("#Flames",{duration:.1, alpha:1})
           
            .to("#Rocket",{duration:2, y:"-=250", scale:.50, ease: "power3.in"},"upAndAway")
            .to("#CloudsGroup",{duration:5, y:"+=900", ease: "power3.in"},'upAndAway')
            .to("#Flowers-Group",{duration:5, y:"+=800", ease: "power3.in"},'upAndAway')
            .to("#Bushes",{duration:5, y:"+=700", ease: "power3.in"},'upAndAway')
            .to("#Grass",{duration:5, y:"+=800", ease: "power3.in"},'upAndAway')
            .to("#Sun-",{duration:5.4, y:"+=1100", ease: "power3.in"},'upAndAway')
            .from("#Space",{duration:5, alpha:0, ease: "power3.in"},'upAndAway');

