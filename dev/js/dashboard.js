import { gsap } from "gsap";


var startCount = 0,
    endCount,
    activeIndex = 1,
    tm = 6,
    num = { var: startCount },
    numbers = document.getElementById("counter");
    

function countIt() {
activeIndex == 1 ? endCount = 65 : endCount = 65;
gsap.to(num, tm, {var: endCount, onUpdate:changeNumber});
}

function changeNumber() {
    numbers.innerHTML = (num.var).toFixed();  
}



export let dashboardTL = gsap.timeline();

dashboardTL.from("#GreyDashBoardWord",{duration:.5, alpha:0},"sametime0")
            .from("#Navigation2",{duration:.5, alpha:0},"sametime0")
            .from("#DashboardBottom",{duration:1, y:740},"sametime")
            .from("#WeatherLocationTopLeft",{duration:1, alpha:0},"sametime")
            .from("#TimeTopMiddle",{duration:1, alpha:0},"sametime")
            .from("#Range-1",{duration:3, drawSVG:0})

            // GAS BAR APPEARS
            .from("#Bar1",{duration:.3, alpha:0})
            .from("#Bar2",{duration:.3, alpha:0})
            .from("#Bar3",{duration:.3, alpha:0})
            .from("#Bar4",{duration:.3, alpha:0})
            .from("#Bar5",{duration:.3, alpha:0})
            .from("#Bar6",{duration:.3, alpha:0})
            .from("#Bar7",{duration:.3, alpha:0})
            .from("#Fill1",{duration:1, alpha:0}, "sametime3")
            .from("#Fill2",{duration:1, alpha:0}, "sametime3")
            .from("#Fill3",{duration:1, alpha:0}, "sametime3")
            .from("#Fill4",{duration:1, alpha:0}, "sametime3")
            .from("#Fill5",{duration:1, alpha:0}, "sametime3")

            // NUMBERS AND TICK MARKS APPEAR
            .from("#TickMarks",{duration:1, alpha:0},"sametime3")
            .from("#TickMarkNumbers",{duration:1, alpha:0},"sametime3")
            .from("#GasNumbers",{duration:1, alpha:0},"sametime3")
            .from("#Mph",{duration:1, alpha:0},"sametime3")
            .from("#counter",{duration:1, alpha:0},"sametime3")

            .from("#RightOptionBoxes",{duration:1, x:1300})

            // BOTTOM DASHBOARD UI
            .from("#DashBoardWord",{duration:1, alpha:0})
            .to("#GreyDashBoardWord",{duration:.5, alpha:0}, "sametime4")
            .to("#Navigation2",{duration:.5, alpha:0}, "sametime4")
            .to("#Music",{duration:.5, alpha:0}, "sametime4")
            .from("#DashBoardWord",{duration:1, x:307, y:22})
            .from("#DashboardElements",{duration:1, alpha:0, onComplete: countIt})
            .from("#SpeedBar",{duration:6, x:-412})
            
            // JEEP WAVE BLINKING
            .to("#JeepWave",{duration:.4, fill: "#EAD34E"}, "sametime7")
            .to("#WranglerAhead",{duration:.4, fill: "#EAD34E"}, "sametime7")
            .to("#JeepWave",{duration:.4, fill: "#5B5D61"}, "sametime8")
            .to("#WranglerAhead",{duration:.4, fill: "#5B5D61"}, "sametime8")
            .to("#JeepWave",{duration:.4, fill: "#EAD34E"}, "sametime9")
            .to("#WranglerAhead",{duration:.4, fill: "#EAD34E"}, "sametime9")
            .to("#JeepWave",{duration:.4, fill: "#5B5D61"}, "sametime10")
            .to("#WranglerAhead",{duration:.4, fill: "#5B5D61"}, "sametime10")
            .to("#JeepWave",{duration:.4, fill: "#EAD34E"}, "sametime11")
            .to("#WranglerAhead",{duration:.4, fill: "#EAD34E"}, "sametime11")
            .to("#JeepWave",{duration:2, fill: "#EAD34E"}, "sametime13")
            .to("#WranglerAhead",{duration:2, fill: "#EAD34E"}, "sametime13")
            .to("#JeepWave",{duration:.4, fill: "#5B5D61"}, "sametime12")
            .to("#WranglerAhead",{duration:.4, fill: "#5B5D61"}, "sametime12")

            // NEXT RIGHT BLINKING
            .from("#NextRight",{duration:.7, fill: "#5B5D61"})
            .from("#NextRight",{duration:.7, fill: "#EAD34E"})
            .from("#NextRight",{duration:.7, fill: "#5B5D61"})
            .from("#NextRight",{duration:.7, fill: "#EAD34E"})
            .from("#NextRight",{duration:.7, fill: "#5B5D61"})

            // BOTTOM DASHBOARD TO MUSIC TRANSITION UI
            .from("#GreyDashBoardWord",{duration:.5, alpha:0}, "sametime5")
            .to("#Navigation",{duration:.5, alpha:1}, "sametime5")
            .to("#Music",{duration:.5, alpha:1}, "sametime5")
            .to("#DashboardElements",{duration:1, alpha:0}, "sametime5")
            .to("#DashBoardWord",{duration:1, x:307, y:22})
            .to("#GreyDashBoardWord",{duration:.5, alpha:1})
            .to("#DashBoardWord",{duration:1, alpha:0})

            .to("#Music",{duration:1, fill: "#EAD34E"})
            .to("#Music",{duration:1, x:36}, "sametime6")
            .to("#GreyDashBoardWord",{duration:.5, alpha:0}, "sametime6")
            .to("#Navigation",{duration:.5, alpha:0}, "sametime6")

            .from("#MusicDashboard",{duration:1, alpha:0})
            .to("#DiskIcon", {rotate:359, transformOrigin:"center", duration:3})

            .to("#MusicDashboard",{duration:1, alpha:0}, "sametime14")
            .to("#GreyDashBoardWord",{duration:.5, alpha:1}, "sametime14")
            .from("#Navigation",{duration:.5, alpha:0}, "sametime14")
    
            .to("#Music",{duration:1, x:500})
            .to("#Music",{duration:1, fill: "#5B5D61"})

            .to("#Navigation",{duration:1, fill: "#EAD34E"})
            .to("#Navigation",{duration:1, x:25})


            .from("#NavSetup",{duration:1, alpha:0}, "sametime15")
            .from("#NavBarBackground",{duration:1, alpha:0}, "sametime15")
            .to("#Music",{duration:1, alpha:0}, "sametime15");
        