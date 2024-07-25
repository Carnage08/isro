function dom() {
    const canvas =document.querySelector(".home>canvas");
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function(){
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();;
    })


    function files(index){
        var data = `isrovid1/myvid(1).jpg 
        isrovid1/myvid(2).jpg 
        isrovid1/myvid(3).jpg 
        isrovid1/myvid(4).jpg
        isrovid1/myvid(5).jpg 
        isrovid1/myvid(6).jpg 
        isrovid1/myvid(7).jpg 
        isrovid1/myvid(8).jpg 
        isrovid1/myvid(9).jpg 
        isrovid1/myvid(10).jpg 
        isrovid1/myvid(11).jpg 
        isrovid1/myvid(12).jpg 
        isrovid1/myvid(13).jpg 
        isrovid1/myvid(14).jpg 
        isrovid1/myvid(15).jpg 
        isrovid1/myvid(16).jpg 
        isrovid1/myvid(17).jpg 
        isrovid1/myvid(18).jpg 
        isrovid1/myvid(19).jpg 
        isrovid1/myvid(20).jpg 
        isrovid1/myvid(21).jpg 
        isrovid1/myvid(22).jpg 
        isrovid1/myvid(23).jpg 
        isrovid1/myvid(24).jpg 
        isrovid1/myvid(25).jpg 
        isrovid1/myvid(26).jpg 
        isrovid1/myvid(27).jpg 
        isrovid1/myvid(28).jpg 
        isrovid1/myvid(29).jpg 
        isrovid1/myvid(30).jpg 
        isrovid1/myvid(31).jpg 
        isrovid1/myvid(32).jpg 
        isrovid1/myvid(33).jpg 
        isrovid1/myvid(34).jpg 
        isrovid1/myvid(35).jpg 
        isrovid1/myvid(36).jpg 
        isrovid1/myvid(37).jpg 
        isrovid1/myvid(38).jpg 
        isrovid1/myvid(39).jpg 
        isrovid1/myvid(40).jpg 
        isrovid1/myvid(41).jpg 
        isrovid1/myvid(42).jpg 
        isrovid1/myvid(43).jpg 
        isrovid1/myvid(44).jpg 
        isrovid1/myvid(45).jpg 
        isrovid1/myvid(46).jpg 
        isrovid1/myvid(47).jpg 
        isrovid1/myvid(48).jpg 
        isrovid1/myvid(49).jpg 
        isrovid1/myvid(50).jpg 
        isrovid1/myvid(51).jpg 
        isrovid1/myvid(52).jpg 
        isrovid1/myvid(53).jpg 
        isrovid1/myvid(54).jpg 
        isrovid1/myvid(55).jpg 
        isrovid1/myvid(56).jpg 
        isrovid1/myvid(57).jpg 
        isrovid1/myvid(58).jpg 
        isrovid1/myvid(59).jpg 
        isrovid1/myvid(60).jpg 
        isrovid1/myvid(61).jpg 
        isrovid1/myvid(62).jpg 
        isrovid1/myvid(63).jpg 
        isrovid1/myvid(64).jpg 
        isrovid1/myvid(65).jpg 
        isrovid1/myvid(66).jpg 
        isrovid1/myvid(67).jpg 
        isrovid1/myvid(68).jpg 
        isrovid1/myvid(69).jpg 
        isrovid1/myvid(70).jpg 
        isrovid1/myvid(71).jpg 
        isrovid1/myvid(72).jpg 
        isrovid1/myvid(73).jpg 
        isrovid1/myvid(74).jpg 
        isrovid1/myvid(75).jpg 
        isrovid1/myvid(76).jpg 
        isrovid1/myvid(77).jpg 
        isrovid1/myvid(78).jpg 
        isrovid1/myvid(79).jpg 
        isrovid1/myvid(80).jpg 
        isrovid1/myvid(81).jpg 
        isrovid1/myvid(82).jpg 
        isrovid1/myvid(83).jpg 
        isrovid1/myvid(84).jpg 
        isrovid1/myvid(85).jpg 
        isrovid1/myvid(86).jpg 
        isrovid1/myvid(87).jpg 
        isrovid1/myvid(88).jpg 
        isrovid1/myvid(89).jpg 
        isrovid1/myvid(90).jpg 
        isrovid1/myvid(91).jpg 
        isrovid1/myvid(92).jpg 
        isrovid1/myvid(93).jpg 
        isrovid1/myvid(94).jpg 
        isrovid1/myvid(95).jpg 
        isrovid1/myvid(96).jpg 
        isrovid1/myvid(97).jpg 
        isrovid1/myvid(98).jpg 
        isrovid1/myvid(99).jpg 
        isrovid1/myvid(100).jpg 
        isrovid1/myvid(101).jpg 
        isrovid1/myvid(102).jpg 
        isrovid1/myvid(103).jpg 
        isrovid1/myvid(104).jpg 
        isrovid1/myvid(105).jpg 
        isrovid1/myvid(106).jpg 
        isrovid1/myvid(107).jpg 
        isrovid1/myvid(108).jpg 
        isrovid1/myvid(109).jpg 
        isrovid1/myvid(110).jpg 
        isrovid1/myvid(111).jpg 
        isrovid1/myvid(112).jpg 
        isrovid1/myvid(113).jpg 
        isrovid1/myvid(114).jpg 
        isrovid1/myvid(115).jpg 
        isrovid1/myvid(116).jpg 
        isrovid1/myvid(117).jpg 
        isrovid1/myvid(118).jpg
        isrovid1/myvid(119).jpg 
        isrovid1/myvid(120).jpg
        isrovid1/myvid(121).jpg 
        isrovid1/myvid(122).jpg 
        isrovid1/myvid(123).jpg 
        isrovid1/myvid(124).jpg 
        isrovid1/myvid(125).jpg 
        isrovid1/myvid(126).jpg 
        isrovid1/myvid(127).jpg 
        isrovid1/myvid(128).jpg 
        isrovid1/myvid(129).jpg 
        isrovid1/myvid(130).jpg 
        isrovid1/myvid(131).jpg 
        isrovid1/myvid(132).jpg 
        isrovid1/myvid(133).jpg 
        isrovid1/myvid(134).jpg 
        isrovid1/myvid(135).jpg 
        isrovid1/myvid(136).jpg 
        isrovid1/myvid(137).jpg 
        isrovid1/myvid(138).jpg 
        isrovid1/myvid(139).jpg 
        isrovid1/myvid(140).jpg 
        isrovid1/myvid(141).jpg 
        isrovid1/myvid(142).jpg 
        isrovid1/myvid(143).jpg 
        isrovid1/myvid(144).jpg 
        isrovid1/myvid(145).jpg 
        isrovid1/myvid(146).jpg 
        isrovid1/myvid(147).jpg 
        isrovid1/myvid(148).jpg 
        isrovid1/myvid(149).jpg 
        isrovid1/myvid(150).jpg 
        isrovid1/myvid(151).jpg 
        isrovid1/myvid(152).jpg 
        isrovid1/myvid(153).jpg 
        isrovid1/myvid(154).jpg 
        isrovid1/myvid(155).jpg 
        isrovid1/myvid(156).jpg 
        isrovid1/myvid(157).jpg 
        isrovid1/myvid(158).jpg 
        isrovid1/myvid(159).jpg 
        isrovid1/myvid(160).jpg 
        isrovid1/myvid(161).jpg 
        isrovid1/myvid(162).jpg 
        isrovid1/myvid(163).jpg 
        isrovid1/myvid(164).jpg 
        isrovid1/myvid(165).jpg 
        isrovid1/myvid(166).jpg 
        isrovid1/myvid(167).jpg 
        isrovid1/myvid(168).jpg 
        isrovid1/myvid(169).jpg 
        isrovid1/myvid(170).jpg 
        isrovid1/myvid(171).jpg 
        isrovid1/myvid(172).jpg 
        isrovid1/myvid(173).jpg 
        isrovid1/myvid(174).jpg 
        isrovid1/myvid(175).jpg 
        isrovid1/myvid(176).jpg 
        isrovid1/myvid(177).jpg 
        isrovid1/myvid(178).jpg 
        isrovid1/myvid(179).jpg 
        isrovid1/myvid(180).jpg 
        isrovid1/myvid(181).jpg 
        isrovid1/myvid(182).jpg 
        isrovid1/myvid(183).jpg 
        isrovid1/myvid(184).jpg 
        isrovid1/myvid(185).jpg 
        isrovid1/myvid(186).jpg 
        isrovid1/myvid(187).jpg 
        isrovid1/myvid(188).jpg 
        isrovid1/myvid(189).jpg 
        isrovid1/myvid(190).jpg 
        isrovid1/myvid(191).jpg 
        isrovid1/myvid(192).jpg 
        isrovid1/myvid(193).jpg 
        isrovid1/myvid(194).jpg 
        isrovid1/myvid(195).jpg 
        isrovid1/myvid(196).jpg 
        isrovid1/myvid(197).jpg 
        isrovid1/myvid(198).jpg 
        isrovid1/myvid(199).jpg 
        isrovid1/myvid(200).jpg 
        isrovid1/myvid(201).jpg 
        isrovid1/myvid(202).jpg 
        isrovid1/myvid(203).jpg 
        isrovid1/myvid(204).jpg 
        isrovid1/myvid(205).jpg 
        isrovid1/myvid(206).jpg 
        isrovid1/myvid(207).jpg 
        isrovid1/myvid(208).jpg 
        isrovid1/myvid(209).jpg 
        isrovid1/myvid(210).jpg 
        isrovid1/myvid(211).jpg 
        isrovid1/myvid(212).jpg 
        isrovid1/myvid(213).jpg 
        isrovid1/myvid(214).jpg 
        isrovid1/myvid(215).jpg 
        isrovid1/myvid(216).jpg 
        isrovid1/myvid(217).jpg 
        isrovid1/myvid(218).jpg 
        isrovid1/myvid(219).jpg 
        isrovid1/myvid(220).jpg 
        isrovid1/myvid(221).jpg 
        isrovid1/myvid(222).jpg 
        isrovid1/myvid(223).jpg 
        isrovid1/myvid(224).jpg 
        isrovid1/myvid(225).jpg 
        isrovid1/myvid(226).jpg 
        isrovid1/myvid(227).jpg 
        isrovid1/myvid(228).jpg 
        isrovid1/myvid(229).jpg 
        isrovid1/myvid(230).jpg 
        isrovid1/myvid(231).jpg 
        isrovid1/myvid(232).jpg 
        isrovid1/myvid(233).jpg 
        isrovid1/myvid(234).jpg 
        isrovid1/myvid(235).jpg 
        isrovid1/myvid(236).jpg 
        isrovid1/myvid(237).jpg 
        isrovid1/myvid(238).jpg 
        isrovid1/myvid(239).jpg 
        isrovid1/myvid(240).jpg 
        isrovid1/myvid(241).jpg 
        isrovid1/myvid(242).jpg 
        isrovid1/myvid(243).jpg 
        isrovid1/myvid(244).jpg 
        isrovid1/myvid(245).jpg 
        isrovid1/myvid(246).jpg 
        isrovid1/myvid(247).jpg 
        isrovid1/myvid(248).jpg 
        isrovid1/myvid(249).jpg 
        isrovid1/myvid(250).jpg 
        isrovid1/myvid(251).jpg 
        isrovid1/myvid(252).jpg 
        isrovid1/myvid(253).jpg 
        isrovid1/myvid(254).jpg 
        isrovid1/myvid(255).jpg 
        isrovid1/myvid(256).jpg 
        isrovid1/myvid(257).jpg 
        isrovid1/myvid(258).jpg 
        isrovid1/myvid(259).jpg 
        isrovid1/myvid(260).jpg 
        isrovid1/myvid(261).jpg 
        isrovid1/myvid(262).jpg 
        isrovid1/myvid(263).jpg 
        isrovid1/myvid(264).jpg 
        isrovid1/myvid(265).jpg 
        isrovid1/myvid(266).jpg 
        isrovid1/myvid(267).jpg 
        isrovid1/myvid(268).jpg 
        isrovid1/myvid(269).jpg 
        isrovid1/myvid(270).jpg 
        isrovid1/myvid(271).jpg 
        isrovid1/myvid(272).jpg 
        isrovid1/myvid(273).jpg 
        isrovid1/myvid(274).jpg 
        isrovid1/myvid(275).jpg 
        isrovid1/myvid(276).jpg 
        isrovid1/myvid(277).jpg 
        isrovid1/myvid(278).jpg 
        isrovid1/myvid(279).jpg 
        isrovid1/myvid(280).jpg 
        isrovid1/myvid(281).jpg 
        isrovid1/myvid(282).jpg 
        isrovid1/myvid(283).jpg 
        isrovid1/myvid(284).jpg 
        isrovid1/myvid(285).jpg 
        isrovid1/myvid(286).jpg 
        isrovid1/myvid(287).jpg 
        isrovid1/myvid(288).jpg 
        isrovid1/myvid(289).jpg 
        isrovid1/myvid(290).jpg 
        isrovid1/myvid(291).jpg 
        isrovid1/myvid(292).jpg 
        isrovid1/myvid(293).jpg 
        isrovid1/myvid(294).jpg 
        isrovid1/myvid(295).jpg 
        isrovid1/myvid(296).jpg 
        isrovid1/myvid(297).jpg 
        isrovid1/myvid(298).jpg 
        isrovid1/myvid(299).jpg 
        isrovid1/myvid(300).jpg
        `;
        return data.split("\n")[index];
    }

    const frameCount = 300;
    const images= [];
    const imageSeq = {
        frame: 0
    };
    

for(let i=0; i<frameCount; i++){
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq,{
    frame:frameCount-1,
    snap:"frame",
    ease:"none",
    scrollTrigger:{
        scrub:1.8,
        pin:true,
        trigger:".home",
    },
    onUpdate: render
});
images[0].onload = render;

function render(){
    scaleImage(images[imageSeq.frame],context)
}

function scaleImage(img, ctx){
    var canvas = ctx.canvas;
    var HRatio = canvas.width / img.width;
    var VRatio = canvas.height / img.height;
    var ratio = Math.max(HRatio, VRatio);
    var centerShift_x = (canvas.width - img.width * ratio)/2;
    var centerShift_y = (canvas.height - img.height * ratio)/2;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0,img.width, img.height, centerShift_x, centerShift_y, img.width*ratio, img.height*ratio);

}

gsap.to(".home canvas",{
    scale:1,
    scrollTrigger:{
        scrub:.1,
        trigger:".home",
        start:"bottom 100%",
    },



})


}
dom()

// function show(){
//     const drop = document.querySelector(".drop-down")
//     document.querySelector(".about").addEventListener("mouseover",()=>{
//         drop.style.display="block";
//     })
//     document.querySelector(".about").addEventListener("mouseleave",()=>{
//         drop.style.display="hidden";
//     })
// }
// show()

function show(){
    var v = document.querySelector(".side-menu");
    var m = document.querySelector(".menu");
    m.addEventListener("click",()=>{
        gsap.to(v,{
            x:-50
        })
    })
}
show()