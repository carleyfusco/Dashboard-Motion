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

dashboardTL.from("#GreyDashBoardWord",{duration:.5, alpha:0})
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

            .from("#TickMarks",{duration:1, alpha:0},"sametime3")
            .from("#TickMarkNumbers",{duration:1, alpha:0},"sametime3")
            .from("#GasNumbers",{duration:1, alpha:0},"sametime3")
            .from("#Mph",{duration:1, alpha:0},"sametime3")
            .from("#counter",{duration:1, alpha:0},"sametime3")

            .from("#RightOptionBoxes",{duration:1, x:1300})

            // BOTTOM DASHBOARD UI
            .from("#DashBoardWord",{duration:1, alpha:0})
            .to("#GreyDashBoardWord",{duration:.5, alpha:0}, "sametime4")
            .to("#Navigation",{duration:.5, alpha:0}, "sametime4")
            .to("#Music",{duration:.5, alpha:0}, "sametime4")
            .from("#DashBoardWord",{duration:1, x:307, y:22})
            .from("#DashboardElements",{duration:1, alpha:0, onComplete: countIt})
            .from("#SpeedBar",{duration:6, x:-412})
            
            // JEEP WAVE BLINKING
            .from("#JeepWaveBlink",{duration:.3, alpha:0})
            .from("#JeepWaveBlink",{duration:.3, alpha:1})
            .from("#JeepWaveBlink",{duration:.3, alpha:0})
            .from("#JeepWaveBlink",{duration:.3, alpha:1})
            .from("#JeepWaveBlink",{duration:.3, alpha:0})
            .to("#JeepWaveBlink",{duration:3, alpha:1})
            .from("#JeepWaveBlink",{duration:.5, alpha:1})
            
            // NEXT RIGHT BLINKING
            .from("#NextRight",{duration:.3, alpha:1})
            .from("#NextRight",{duration:.3, alpha:0})
            .from("#NextRight",{duration:.3, alpha:1})
            .from("#NextRight",{duration:.3, alpha:0})
            .from("#NextRight",{duration:.3, alpha:1})
            .from("#NextRight",{duration:.3, alpha:0})

            // BOTTOM DASHBOARD UI 2
            .from("#GreyDashBoardWord",{duration:.5, alpha:0}, "sametime5")
            .to("#Navigation",{duration:.5, alpha:1}, "sametime5")
            .to("#Music",{duration:.5, alpha:1}, "sametime5")
            .to("#DashboardElements",{duration:1, alpha:0}, "sametime5")
            .to("#DashBoardWord",{duration:1, x:307, y:22})
            .to("#GreyDashBoardWord",{duration:.5, alpha:1})
            .from("#DashBoardWord",{duration:1, alpha:0})

            .to("#Music",{duration:1, fill: "#EAD34E"})
            .to("#Music",{duration:1, x:36}, "sametime6")
            .to("#GreyDashBoardWord",{duration:.5, alpha:0}, "sametime6")
            .to("#Navigation",{duration:.5, alpha:0}, "sametime6")



            .from("#MusicDashboard",{duration:1, alpha:0})
            .from("#NavDashboard",{duration:1, alpha:0});