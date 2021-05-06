import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { MotionPathHelper } from "gsap/MotionPathHelper";

gsap.registerPlugin(MotionPathPlugin, MotionPathHelper);


export let flightTL = gsap.timeline();

flightTL.to("#Rocket", {
    duration: 5,
    motionPath: {
        path: "#FlightPath",
        align: "FlightPath"
        // autoRotate: true
    },
    // alpha:0,
    ease: "none"
});



//MotionPathHelper.create("#FlightPath");