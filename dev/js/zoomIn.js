import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#Grass",{transformOrigin:"top"});
gsap.set("#Flowers-Group",{transformOrigin:"top"});
gsap.set("#Rocket",{transformOrigin:"top"});
gsap.set("#Bushes",{transformOrigin:"top"});

zoomTL.from("#Grass",{duration:4, scale:10},"zoom")
    .from("#Flowers-Group",{duration:4, scale:10},"zoom")
    .from("#Rocket",{duration:4, scale:10}, "zoom")
    .from("#Bushes",{duration:5, scale:10}, "zoom")
    .from("#Bushes",{duration:5, scale:10}, "zoom")