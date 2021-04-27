import { gsap } from "gsap";
import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL, "-=3")