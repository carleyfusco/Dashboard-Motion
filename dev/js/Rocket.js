import { gsap } from "gsap";

export let RocketTL = gsap.timeline();

RocketTL.from("#Rocket",{y:"-=1000", duration:1})