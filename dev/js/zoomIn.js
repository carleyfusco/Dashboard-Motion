import { gsap } from "gsap";

export let zoomTL = gsap.timeline();

gsap.set("#Grass",{transformOrigin:"top"});
gsap.set("#Flowers-Group",{transformOrigin:"top"});
gsap.set("#Bushes",{transformOrigin:"top"});

zoomTL.from("#Grass",{duration:4, scale:10},"zoom")
    .from("#Flowers-Group",{duration:4, scale:10},"zoom")
    .from("#Bushes",{duration:5, scale:10}, "zoom")
    .from("#Flower1",{duration:.2, alpha:0})
    .from("#Flower15",{duration:.2, alpha:0})
    .from("#Flower3",{duration:.2, alpha:0})
    .from("#Flower16",{duration:.2, alpha:0})
    .from("#Flower11",{duration:.2, alpha:0})
    .from("#Flower6",{duration:.2, alpha:0})
    .from("#Flower13",{duration:.2, alpha:0})
    .from("#Flower8",{duration:.2, alpha:0})
    .from("#Flower9",{duration:.2, alpha:0})
    .from("#Flower10",{duration:.2, alpha:0})
    .from("#Flower5",{duration:.2, alpha:0})
    .from("#Flower12",{duration:.2, alpha:0})
    .from("#Flower7",{duration:.2, alpha:0})
    .from("#Flower14",{duration:.2, alpha:0})
    .from("#Flower2",{duration:.2, alpha:0})
    .from("#Flower4",{duration:.2 , alpha:0});