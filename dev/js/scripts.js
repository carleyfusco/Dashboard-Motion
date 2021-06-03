import { gsap } from "gsap";


import { introTL } from "./intro";
import { dashboardTL } from "./dashboard";


let mainTL = gsap.timeline();

mainTL.add(introTL)
        .add(dashboardTL);



        

