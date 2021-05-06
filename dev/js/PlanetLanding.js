import { gsap } from "gsap";

export let LandingTL = gsap.timeline(); 

LandingTL.from("#Planet",{duration:1, x:1100, y:300})
        .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})

        .to("#Flames",{duration:.5, alpha:1})
        .to("#Flames",{duration:.1, alpha:0})
        .to("#Flames",{duration:.1, alpha:1})
        .to("#Flames",{duration:.1, alpha:0})
        .to("#Flames",{duration:.1, alpha:1})
        .to("#Flames",{duration:.1, alpha:0})
        .to("#Flames",{duration:.1, alpha:1})
        .to("#Flames",{duration:.1, alpha:0})

        .to("#Rocket",{duration:1, x:400, y:300, scale:1},"sametime")
        .to("#Planet",{duration:1, x:330, y:350, scale:3},"sametime")
        
        .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=-7", ease: "power3.in"})
        .to("#Rocket",{duration:.1, x:"-=7", ease: "power3.in"})

        .to("#Flames",{duration:.5, alpha:0})
        .to("#Flames",{duration:.1, alpha:1})
        .to("#Flames",{duration:.1, alpha:0})
        .to("#Flames",{duration:.1, alpha:1})
        .to("#Flames",{duration:.1, alpha:0})
        .to("#Flames",{duration:.1, alpha:1})
        .to("#Flames",{duration:.1, alpha:0})
        .to("#Flames",{duration:.1, alpha:1})

        .to("#Rocket",{duration:2, y:-500})

        // .from("#PlanetFlowers",{duration:2, alpha:0})

        .from("#PFlower1",{duration:.2, alpha:0})
        .from("#PFlower11",{duration:.2, alpha:0})
        .from("#PFlower111",{duration:.2, alpha:0})
        .from("#PFlower7",{duration:.2, alpha:0})
        .from("#PFlower77",{duration:.2, alpha:0})
        .from("#PFlower5",{duration:.2, alpha:0})
        .from("#PFlower55",{duration:.2, alpha:0})
        .from("#PFlower4",{duration:.2, alpha:0})
        .from("#PFlower44",{duration:.2, alpha:0});
        
    