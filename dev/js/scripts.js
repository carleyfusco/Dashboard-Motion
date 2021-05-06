import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { zoomTL } from "./zoomIn"
import { fadeInTL } from "./fadeIn"
import { RocketTL } from "./Rocket"
import { liftOffTL } from "./liftOff"
import { flightTL } from "./FlightPath"
import { LandingTL } from "./PlanetLanding"

let mainTL = gsap.timeline();

mainTL.add(fadeInTL)
        .add(zoomTL, "-=3")
        .add(RocketTL, "-=1")
        .add(liftOffTL)
        .add(flightTL)
        .add(LandingTL)





GSDevTools.create();
