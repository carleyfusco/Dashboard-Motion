import { gsap } from "gsap";
import { zoomTL } from "./zoomIn"

let mainTL = gsap.timeline();

mainTL.add(zoomTL);