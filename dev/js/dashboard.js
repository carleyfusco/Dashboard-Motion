import { gsap } from "gsap";

export let dashboardTL = gsap.timeline();

dashboardTL.from("#DashboardBottom",{duration:1, y:1000})
            .from("#WeatherLocationTopLeft",{duration:1, alpha:0},"sametime")
            .from("#TimeTopMiddle",{duration:1, alpha:0},"sametime")

            .from("#Range-1",{duration:3, drawSVG:0})
            .from("#TickMarks",{duration:1, alpha:0},"sametime2")
            .from("#TickMarkNumbers",{duration:1, alpha:0},"sametime2")
           

            .from("#Bar1",{duration:.3, alpha:0})
            .from("#Bar2",{duration:.3, alpha:0})
            .from("#Bar3",{duration:.3, alpha:0})
            .from("#Bar4",{duration:.3, alpha:0})
            .from("#Bar5",{duration:.3, alpha:0})
            .from("#Bar6",{duration:.3, alpha:0})
            .from("#Bar7",{duration:.3, alpha:0})

            .from("#Fill1",{duration:.2, alpha:0}, "sametime3")
            .from("#Fill2",{duration:.2, alpha:0}, "sametime3")
            .from("#Fill3",{duration:.2, alpha:0}, "sametime3")
            .from("#Fill4",{duration:.2, alpha:0}, "sametime3")
            .from("#Fill5",{duration:.2, alpha:0}, "sametime3")
            .from("#GasNumbers",{duration:.2, alpha:0})





            .from("#RightOptionBoxes",{duration:1, x:1300})

            .from("#DashBoardWord",{duration:1, alpha:0})
            .to("#NewDashBoardWord",{duration:1, alpha:0}, "sametime4")
            .to("#Navigation",{duration:1, alpha:0}, "sametime4")
            .to("#Music",{duration:1, alpha:0}, "sametime4")
            .from("#DashBoardWord",{duration:1, x:307, y:22})
            .from("#DashboardElements",{duration:1, alpha:0})
            .from("#NavDashboard",{duration:1, y:1000})
            .from("#MusicDashboard",{duration:1, y:1000})
            
            .from("#Mph",{duration:1, alpha:0});


