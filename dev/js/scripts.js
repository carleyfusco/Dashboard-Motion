import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
gsap.registerPlugin(GSDevTools);
GSDevTools.create();


import { introTL } from "./intro";
import { dashboardTL } from "./dashboard";


let mainTL = gsap.timeline();

mainTL.add(introTL)
        .add(dashboardTL);



        

