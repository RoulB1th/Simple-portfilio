import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const scroller = gsap.timeline({scrollTrigger:{
  start:'center bottom',
  scrub:4
}})
const tl = gsap.timeline({defaults:{duration:1}});

tl.fromTo('#nav-bar',{y:'-100%'},{y:'0%'})
tl.fromTo('#intro',{x:'-100%'},{x:'0%'})
tl.fromTo('#languages',{opacity:0},{opacity:1})
tl.fromTo('#prj',{x:'-100%'},{x:'0'})

scroller.fromTo('.project1',{opacity:0.2,x:'-100%'},{opacity:1,x:'0',duration:2})
scroller.fromTo('.project2',{opacity:0.2,x:'100%'},{opacity:1,x:'0',duration:2})
scroller.fromTo('.project3',{opacity:0.2,x:'-100%'},{opacity:1,x:'0',duration:2})
scroller.fromTo('.project4',{opacity:0.2,x:'100%'},{opacity:1,x:'0',duration:2})