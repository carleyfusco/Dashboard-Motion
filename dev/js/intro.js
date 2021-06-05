import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);


export let introTL = gsap.timeline();

introTL.from("#Stroke-1",{duration:1.5, drawSVG:0})
        .from("#Stroke-2",{duration:1.5, drawSVG:0})
        .from("#Stroke-3",{duration:1.5, drawSVG:0})
        .from("#Stroke-4",{duration:1.5, drawSVG:0})
        .to("#JeepOutline",{duration:1, alpha:0});


