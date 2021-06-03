import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

import { introAnimation } from "./intro";
import { dashboardAnimation } from "./dashboard";


let mainTL = gsap.timeline();

mainTL.add(introAnimation())
        .add(dashboardAnimation());



        


GSDevTools.create();
