---
title:  "Creating pixel art with CSS Grid"
description: "Would you imagine successful games and design concepts becoming so popular because of a limitation? That's what pixel art tries to achieve - the feeling of nostalgia brought by the memories of glorious old games. That's because old consoles initially had limited CPU to handle graphics. To overcome that, game designers had to get the most out of each pixel. Small colored squares strategically placed with purpose and daring you to use your imagination."
category: css
draft: false
---
Would you imagine successful games and design concepts becoming so popular because of a limitation? That's what pixel art tries to achieve - the feeling of nostalgia brought by the memories of glorious old games. That's because old consoles initially had limited CPU to handle graphics. To overcome that, game designers had to get the most out of each pixel. Small colored squares strategically placed with purpose and daring you to use your imagination.

<div class="pixgrid-c" style="display:grid;grid-template-columns:repeat(16,20px);grid-template-rows:repeat(16,20px); justify-content: center;">
<div style="background:#a22633;grid-area:1/6/2/11"></div><div style="background:#a22633;grid-area:2/5/3/14"></div><div style="background:#733e39;grid-area:3/5/4/8"></div><div style="background:#e4a672;grid-area:3/8/4/10"></div><div style="background:#181425;grid-area:3/10/4/11"></div><div style="background:#e4a672;grid-area:3/11/4/12"></div><div style="background:#733e39;grid-area:4/4/5/5"></div><div style="background:#e4a672;grid-area:4/5/5/6"></div><div style="background:#733e39;grid-area:4/6/5/7"></div><div style="background:#e4a672;grid-area:4/7/5/10"></div><div style="background:#181425;grid-area:4/10/5/11"></div><div style="background:#e4a672;grid-area:4/11/5/14"></div><div style="background:#733e39;grid-area:5/4/6/5"></div><div style="background:#e4a672;grid-area:5/5/6/6"></div><div style="background:#733e39;grid-area:5/6/6/8"></div><div style="background:#e4a672;grid-area:5/8/6/11"></div><div style="background:#181425;grid-area:5/11/6/12"></div><div style="background:#e4a672;grid-area:5/12/6/15"></div><div style="background:#733e39;grid-area:6/5/7/6"></div><div style="background:#e4a672;grid-area:6/6/7/10"></div><div style="background:#181425;grid-area:6/10/7/14"></div><div style="background:#e4a672;grid-area:7/6/8/12"></div><div style="background:#a22633;grid-area:8/5/9/7"></div><div style="background:#124e89;grid-area:8/7/9/8"></div><div style="background:#a22633;grid-area:8/8/9/10"></div><div style="background:#124e89;grid-area:8/10/9/11"></div><div style="background:#a22633;grid-area:8/11/9/13"></div><div style="background:#a22633;grid-area:9/4/10/7"></div><div style="background:#124e89;grid-area:9/7/10/8"></div><div style="background:#a22633;grid-area:9/8/10/10"></div><div style="background:#124e89;grid-area:9/10/10/11"></div><div style="background:#a22633;grid-area:9/11/10/14"></div><div style="background:#a22633;grid-area:10/3/11/7"></div><div style="background:#124e89;grid-area:10/7/11/11"></div><div style="background:#a22633;grid-area:10/11/11/15"></div><div style="background:#e4a672;grid-area:11/3/12/5"></div><div style="background:#a22633;grid-area:11/5/12/6"></div><div style="background:#124e89;grid-area:11/6/12/7"></div><div style="background:#fee761;grid-area:11/7/12/8"></div><div style="background:#124e89;grid-area:11/8/12/10"></div><div style="background:#fee761;grid-area:11/10/12/11"></div><div style="background:#124e89;grid-area:11/11/12/12"></div><div style="background:#a22633;grid-area:11/12/12/13"></div><div style="background:#e4a672;grid-area:11/13/12/15"></div><div style="background:#e4a672;grid-area:12/3/13/6"></div><div style="background:#124e89;grid-area:12/6/13/12"></div><div style="background:#e4a672;grid-area:12/12/13/15"></div><div style="background:#e4a672;grid-area:13/3/14/5"></div><div style="background:#124e89;grid-area:13/5/14/13"></div><div style="background:#e4a672;grid-area:13/13/14/15"></div><div style="background:#124e89;grid-area:14/5/15/8"></div><div style="background:#124e89;grid-area:14/10/15/13"></div><div style="background:#733e39;grid-area:15/4/16/7"></div><div style="background:#733e39;grid-area:15/11/16/14"></div><div style="background:#733e39;grid-area:16/3/17/7"></div><div style="background:#733e39;grid-area:16/11/17/15"></div>
</div>
<p class="desc">Super Mario Bros character developed by Nintendo.</p>

## CSS Grid
If you don't know the basics of Grid Layout, I recommend checking [this awesome video](https://www.youtube.com/watch?v=FEnRpy9Xfes) by [Jen Simmons](https://twitter.com/jensimmons).

## Pixel art for the web
There's this useful [grid cheat sheet](http://grid.malven.co/) I recommend while building layouts. I had just got back from a party and might have being a little bit drunk - that's the best time to start new projects <abbr title="by the way">btw</abbr> - and it seemed to me that the tiny squares on the sheet looked like pixel art. 

I've searched for someone doing it and found nothing, so I decided to experiment on my own. My first draw is this simple cat. I took me four hours to finish because it didn't come to my mind I just needed to fill the colored pixels.

<style>
  .frame .cat{display:grid;grid-template-columns:repeat(50,5px);grid-template-rows:repeat(50,5px)}.frame .cat .pixel{display:block;border:1px solid red;background-color:#252525}.frame .cat .pixel.t{background-color:transparent}.frame .cat .pixel.ly{background-color:#ebe3b6}.frame .cat .pixel.y{background-color:#f8f28b}.frame .cat .pixel.e{background-color:#000}.frame .cat .pixel:nth-child(1){grid-column:span 2;grid-row:span 8}.frame .cat .pixel:nth-child(2){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(3){grid-column:span 2}.frame .cat .pixel:nth-child(4){grid-column:span 2;grid-row:span 2}.frame .cat .pixel:nth-child(5){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(6){grid-column:span 2;grid-row:span 4}.frame .cat .pixel:nth-child(7){grid-column:span 5;grid-row:span 6}.frame .cat .pixel:nth-child(8){grid-column:span 2;grid-row:span 4}.frame .cat .pixel:nth-child(9){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(10){grid-column:span 2;grid-row:span 2}.frame .cat .pixel:nth-child(11){grid-column:span 2;grid-row:span 1}.frame .cat .pixel:nth-child(12){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(13){grid-column:span 2;grid-row:span 8}.frame .cat .pixel:nth-child(14){grid-column:span 11;grid-row:span 14}.frame .cat .pixel:nth-child(15){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(16){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(17){grid-column:span 2}.frame .cat .pixel:nth-child(18){grid-column:span 4;grid-row:span 3}.frame .cat .pixel:nth-child(19){grid-column:span 2}.frame .cat .pixel:nth-child(20){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(21){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(22){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(23){grid-column:span 1;grid-row:span 50}.frame .cat .pixel:nth-child(24){grid-column:span 2;grid-row:span 2}.frame .cat .pixel:nth-child(25){grid-column:span 2;grid-row:span 2}.frame .cat .pixel:nth-child(26){grid-column:span 2;grid-row:span 7}.frame .cat .pixel:nth-child(27){grid-column:span 2;grid-row:span 4}.frame .cat .pixel:nth-child(28){grid-column:span 2;grid-row:span 3}.frame .cat .pixel:nth-child(29){grid-column:span 2;grid-row:span 3}.frame .cat .pixel:nth-child(30){grid-column:span 1;grid-row:span 6}.frame .cat .pixel:nth-child(31){grid-column:span 1;grid-row:span 11}.frame .cat .pixel:nth-child(32){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(33){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(34){grid-column:span 1;grid-row:span 1}.frame .cat .pixel:nth-child(35){grid-column:span 1;grid-row:span 6}.frame .cat .pixel:nth-child(36){grid-column:span 1;grid-row:span 6}.frame .cat .pixel:nth-child(37){grid-column:span 1;grid-row:span 1}.frame .cat .pixel:nth-child(38){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(39){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(40){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(41){grid-column:span 1;grid-row:span 1}.frame .cat .pixel:nth-child(42){grid-column:span 2;grid-row:span 10}.frame .cat .pixel:nth-child(43){grid-column:span 1;grid-row:span 1}.frame .cat .pixel:nth-child(44){grid-column:span 1;grid-row:span 7}.frame .cat .pixel:nth-child(45){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(46){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(47){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(48){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(49){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(50){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(51){grid-column:span 1;grid-row:span 12}.frame .cat .pixel:nth-child(52){grid-column:span 1;grid-row:span 8}.frame .cat .pixel:nth-child(53){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(54){grid-column:span 1;grid-row:span 1}.frame .cat .pixel:nth-child(55){grid-column:span 1;grid-row:span 1}.frame .cat .pixel:nth-child(56){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(58){grid-column:span 1;grid-row:span 11}.frame .cat .pixel:nth-child(59){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(61){grid-column:span 5;grid-row:span 4}.frame .cat .pixel:nth-child(63){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(64){grid-column:span 1;grid-row:span 8}.frame .cat .pixel:nth-child(65){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(66){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(67){grid-column:span 1;grid-row:span 7}.frame .cat .pixel:nth-child(68){grid-column:span 1;grid-row:span 8}.frame .cat .pixel:nth-child(69){grid-column:span 1;grid-row:span 42}.frame .cat .pixel:nth-child(70){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(71){grid-column:span 3;grid-row:span 7}.frame .cat .pixel:nth-child(72){grid-column:span 3;grid-row:span 7}.frame .cat .pixel:nth-child(73){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(74){grid-column:span 3;grid-row:span 9}.frame .cat .pixel:nth-child(75){grid-column:span 1;grid-row:span 42}.frame .cat .pixel:nth-child(77){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(79){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(80){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(82){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(84){grid-column:span 1;grid-row:span 7}.frame .cat .pixel:nth-child(85){grid-column:span 1;grid-row:span 40}.frame .cat .pixel:nth-child(86){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(87){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(88){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(89){grid-column:span 3;grid-row:span 6}.frame .cat .pixel:nth-child(90){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(91){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(92){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(93){grid-column:span 1;grid-row:span 7}.frame .cat .pixel:nth-child(94){grid-column:span 1;grid-row:span 9}.frame .cat .pixel:nth-child(95){grid-column:span 1;grid-row:span 40}.frame .cat .pixel:nth-child(96){grid-column:span 1;grid-row:span 16}.frame .cat .pixel:nth-child(97){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(99){grid-column:span 1;grid-row:span 7}.frame .cat .pixel:nth-child(100){grid-column:span 1;grid-row:span 7}.frame .cat .pixel:nth-child(102){grid-column:span 1;grid-row:span 21}.frame .cat .pixel:nth-child(104){grid-column:span 1;grid-row:span 17}.frame .cat .pixel:nth-child(105){grid-column:span 1;grid-row:span 37}.frame .cat .pixel:nth-child(106){grid-column:span 2;grid-row:span 5}.frame .cat .pixel:nth-child(107){grid-column:span 1;grid-row:span 6}.frame .cat .pixel:nth-child(108){grid-column:span 1;grid-row:span 12}.frame .cat .pixel:nth-child(109){grid-column:span 2;grid-row:span 15}.frame .cat .pixel:nth-child(110){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(111){grid-column:span 2;grid-row:span 1}.frame .cat .pixel:nth-child(112){grid-column:span 1;grid-row:span 15}.frame .cat .pixel:nth-child(113){grid-column:span 1;grid-row:span 14}.frame .cat .pixel:nth-child(114){grid-column:span 2;grid-row:span 13}.frame .cat .pixel:nth-child(115){grid-column:span 1;grid-row:span 14}.frame .cat .pixel:nth-child(116){grid-column:span 1;grid-row:span 15}.frame .cat .pixel:nth-child(117){grid-column:span 1;grid-row:span 16}.frame .cat .pixel:nth-child(118){grid-column:span 2;grid-row:span 1}.frame .cat .pixel:nth-child(119){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(120){grid-column:span 1;grid-row:span 35}.frame .cat .pixel:nth-child(122){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(123){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(124){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(125){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(127){grid-column:span 1;grid-row:span 18}.frame .cat .pixel:nth-child(128){grid-column:span 1;grid-row:span 16}.frame .cat .pixel:nth-child(129){grid-column:span 1;grid-row:span 17}.frame .cat .pixel:nth-child(130){grid-column:span 1;grid-row:span 31}.frame .cat .pixel:nth-child(132){grid-column:span 1;grid-row:span 34}.frame .cat .pixel:nth-child(133){grid-column:span 3;grid-row:span 1}.frame .cat .pixel:nth-child(134){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(135){grid-column:span 1;grid-row:span 20}.frame .cat .pixel:nth-child(136){grid-column:span 1;grid-row:span 27}.frame .cat .pixel:nth-child(137){grid-column:span 1;grid-row:span 32}.frame .cat .pixel:nth-child(138){grid-column:span 1;grid-row:span 19}.frame .cat .pixel:nth-child(139){grid-column:span 1;grid-row:span 35}.frame .cat .pixel:nth-child(140){grid-column:span 1;grid-row:span 33}.frame .cat .pixel:nth-child(141){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(142){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(143){grid-column:span 1;grid-row:span 5}.frame .cat .pixel:nth-child(144){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(145){grid-column:span 1;grid-row:span 33}.frame .cat .pixel:nth-child(146){grid-column:span 1;grid-row:span 23}.frame .cat .pixel:nth-child(147){grid-column:span 2;grid-row:span 32}.frame .cat .pixel:nth-child(148){grid-column:span 1;grid-row:span 32}.frame .cat .pixel:nth-child(150){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(151){grid-column:span 1;grid-row:span 32}.frame .cat .pixel:nth-child(152){grid-column:span 3;grid-row:span 31}.frame .cat .pixel:nth-child(153){grid-column:span 1;grid-row:span 30}.frame .cat .pixel:nth-child(154){grid-column:span 1;grid-row:span 32}.frame .cat .pixel:nth-child(155){grid-column:span 3;grid-row:span 30}.frame .cat .pixel:nth-child(156){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(157){grid-column:span 1;grid-row:span 29}.frame .cat .pixel:nth-child(158){grid-column:span 1;grid-row:span 28}.frame .cat .pixel:nth-child(159){grid-column:span 1;grid-row:span 29}.frame .cat .pixel:nth-child(160){grid-column:span 1;grid-row:span 28}.frame .cat .pixel:nth-child(161){grid-column:span 1;grid-row:span 27}.frame .cat .pixel:nth-child(162){grid-column:span 1;grid-row:span 24}.frame .cat .pixel:nth-child(163){grid-column:span 2;grid-row:span 23}.frame .cat .pixel:nth-child(164){grid-column:span 1;grid-row:span 22}.frame .cat .pixel:nth-child(165){grid-column:span 1;grid-row:span 19}.frame .cat .pixel:nth-child(166){grid-column:span 1;grid-row:span 22}.frame .cat .pixel:nth-child(167){grid-column:span 1;grid-row:span 21}.frame .cat .pixel:nth-child(168){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(169){grid-column:span 1;grid-row:span 21}.frame .cat .pixel:nth-child(170){grid-column:span 1;grid-row:span 17}.frame .cat .pixel:nth-child(171){grid-column:span 1;grid-row:span 13}.frame .cat .pixel:nth-child(172){grid-column:span 1;grid-row:span 20}.frame .cat .pixel:nth-child(173){grid-column:span 1;grid-row:span 19}.frame .cat .pixel:nth-child(174){grid-column:span 1;grid-row:span 15}.frame .cat .pixel:nth-child(175){grid-column:span 1;grid-row:span 7}.frame .cat .pixel:nth-child(176){grid-column:span 1;grid-row:span 17}.frame .cat .pixel:nth-child(177){grid-column:span 1;grid-row:span 12}.frame .cat .pixel:nth-child(178){grid-column:span 1;grid-row:span 16}.frame .cat .pixel:nth-child(179){grid-column:span 1;grid-row:span 11}.frame .cat .pixel:nth-child(180){grid-column:span 1;grid-row:span 9}.frame .cat .pixel:nth-child(181){grid-column:span 1;grid-row:span 7}.frame .cat .pixel:nth-child(182){grid-column:span 1;grid-row:span 6}.frame .cat .pixel:nth-child(183){grid-column:span 1;grid-row:span 6}.frame .cat .pixel:nth-child(184){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(185){grid-column:span 1;grid-row:span 3}.frame .cat .pixel:nth-child(186){grid-column:span 1;grid-row:span 4}.frame .cat .pixel:nth-child(188){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(189){grid-column:span 1;grid-row:span 2}.frame .cat .pixel:nth-child(190){grid-column:span 1;grid-row:span 2}
</style>
<div class="frame"><div class="cat" style="justify-content: center; background: #fff;"><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel ly"></div><div class="pixel ly"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel ly"></div><div class="pixel ly"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel ly"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel ly"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel ly"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel ly"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel ly"></div><div class="pixel"></div><div class="pixel ly"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel y"></div><div class="pixel y"></div><div class="pixel y"></div><div class="pixel y"></div><div class="pixel y"></div><div class="pixel y"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel y"></div><div class="pixel e"></div><div class="pixel y"></div><div class="pixel"></div><div class="pixel y"></div><div class="pixel e"></div><div class="pixel y"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel y"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel y"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel ly"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel t"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div><div class="pixel"></div></div></div>
<p class="desc">Jiji, the cat.</p>

It's a dull job. To avoid that later, I’ve created a [pixel art editor](https://jackiecard.github.io/pixgrid/) which generates sprites into HTML & CSS. You can actually animate sprites using CSS animation. I'll get into the details of that in this article.

## How it works
<a href="https://codepen.io/jackiecard/pen/JVwbxN">In this example</a>, you can check that the grid container specifies columns and rows - how many and their sizes. The grid items declare where they will fit into those available spaces. For the purpose of creating pixel art, the grid container is the canvas and the grid items are the pixels. 

## Let's draw!
You can start by "setting up" the canvas. For instance, I want to draw a pink heart that is 5x5 pixels. We'll use five columns with any size we want. For very tiny sprites, I use 40px. 

```css
.canvas{
  display: grid; 
  grid-template-columns: repeat(5, 40px); // same as: 40px 40px 40px 40px 40px
  grid-template-rows: repeat(5, 40px);
}
```

```html
<div class="canvas">
</div>
```

The best part of using CSS Grid is that you don’t need to fill pixel by pixel. If you have a continuous line or a rectangle, you can go ahead and add the coordinates using grid-area.

```css
.line-1{
  background: #f6757a;
  grid-area: 2 / 1 / 4 / 2;
}
```

```html
<div class="canvas">
  <div class="line-1"></div>
</div>
```

Grid-area is a shortcut for the following properties:
```css
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 4;
  grid-column-end: 2;
```

If I wanted to fill the whole canvas, I’d only need one grid item with 'grid-area: 1/1/6/6', for example.  
<img src="/grid-area.jpg" alt="Graphic how grid area works"/>

There's many ways you can fill in the lines. Ideally, you would search for the one that uses less elements. In this case, that's both the first and last option.
<div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
  <div style="background:#f6757a;grid-area:2/1/4/2;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:1/2/5/3;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:2/3/6/4;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:1/4/5/5;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:2/5/4/6;border:3px solid yellow;"></div>
</div>

<div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
  <div style="background:#f6757a;grid-area:1/2/2/3;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:1/4/2/5;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:2/1/3/6;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:3/1/4/6;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:4/2/5/5;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:5/3/6/4;border:3px solid yellow;"></div>
</div>

<div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
  <div style="background:#f6757a;grid-area:1/2/2/3;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:1/4/2/5;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:2/1/4/6;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:4/2/5/5;border:3px solid yellow;"></div>
  <div style="background:#f6757a;grid-area:5/3/6/4;border:3px solid yellow;"></div>
</div>

You can easily scale it up and down by just updating the grid item size:
```css
grid-template-columns: repeat(5, 10px);
grid-template-rows: repeat(5, 10px);
```

<div style="display: grid; grid-template-columns:repeat(3, 50px); grid-gap: 10px; justify-items: center; align-items: center;">
  <div style="display:grid;grid-template-columns:repeat(5,10px);grid-template-rows:repeat(5,10px);">
    <div style="background:#f6757a;grid-area:1/2/2/3;"></div>
    <div style="background:#f6757a;grid-area:1/4/2/5;"></div>
    <div style="background:#f6757a;grid-area:2/1/4/6;"></div>
    <div style="background:#f6757a;grid-area:4/2/5/5;"></div>
    <div style="background:#f6757a;grid-area:5/3/6/4;"></div>
  </div>
    <div style="display:grid;grid-template-columns:repeat(5,5px);grid-template-rows:repeat(5,5px);">
    <div style="background:#f6757a;grid-area:1/2/2/3;"></div>
    <div style="background:#f6757a;grid-area:1/4/2/5;"></div>
    <div style="background:#f6757a;grid-area:2/1/4/6;"></div>
    <div style="background:#f6757a;grid-area:4/2/5/5;"></div>
    <div style="background:#f6757a;grid-area:5/3/6/4;"></div>
  </div>
    <div style="display:grid;grid-template-columns:repeat(5,1px);grid-template-rows:repeat(5,1px);">
    <div style="background:#f6757a;grid-area:1/2/2/3;"></div>
    <div style="background:#f6757a;grid-area:1/4/2/5;"></div>
    <div style="background:#f6757a;grid-area:2/1/4/6;"></div>
    <div style="background:#f6757a;grid-area:4/2/5/5;"></div>
    <div style="background:#f6757a;grid-area:5/3/6/4;"></div>
  </div>
</div>

## Animating the sprites
I have a heart and would like it to change colors infinitely. For that, let's create the sprites and line it one above the other, like this:
<div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
  <div style="background:#f6757a;grid-area:1/2/2/3"></div>
  <div style="background:#f6757a;grid-area:1/4/2/5"></div>
  <div style="background:#f6757a;grid-area:2/1/3/6"></div>
  <div style="background:#f6757a;grid-area:3/1/4/6"></div>
  <div style="background:#f6757a;grid-area:4/2/5/5"></div>
  <div style="background:#f6757a;grid-area:5/3/6/4"></div>
</div>
<div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
  <div style="background:#68386c;grid-area:1/2/2/3"></div>
  <div style="background:#68386c;grid-area:1/4/2/5"></div>
  <div style="background:#68386c;grid-area:2/1/3/6"></div>
  <div style="background:#68386c;grid-area:3/1/4/6"></div>
  <div style="background:#68386c;grid-area:4/2/5/5"></div>
  <div style="background:#68386c;grid-area:5/3/6/4"></div>
</div>

Wrap it in two div elements. One will crop the animation (only show the current sprite) by using 'overflow: hidden'. The div inside will be animated to go up by using a negative margin. If you're familiar with building [sprites](https://css-tricks.com/css-sprites/) using images and background position, this is no news.

```html
<div class="animation">
  <div class="wrapper">
    <div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
        <div style="background:#f6757a;grid-area:1/2/2/3"></div>
        <div style="background:#f6757a;grid-area:1/4/2/5"></div>
        <div style="background:#f6757a;grid-area:2/1/3/6"></div>
        <div style="background:#f6757a;grid-area:3/1/4/6"></div>
        <div style="background:#f6757a;grid-area:4/2/5/5"></div>
        <div style="background:#f6757a;grid-area:5/3/6/4"></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
        <div style="background:#68386c;grid-area:1/2/2/3"></div>
        <div style="background:#68386c;grid-area:1/4/2/5"></div>
        <div style="backIf I wanted to fill the wholground:#68386c;grid-area:2/1/3/6"></div>
        <div style="background:#68386c;grid-area:3/1/4/6"></div>
        <div style="background:#68386c;grid-area:4/2/5/5"></div>
        <div style="background:#68386c;grid-area:5/3/6/4"></div>
    </div>
  </div>
</div>
```

For the animation, we use steps for timing to have that harsh change from one sprite to the other. The size of my animation depends on my grid settings, which in this case are <strong>5 x 40px = 200px</strong>.
```css
@keyframes sprite{
  0% {margin-top: -0px;}
  50% {margin-top: -200px;}
  100% {margin-top: -200px;}
}
.animation{overflow: hidden; height: 200px; width: 200px;} 
.animation .wrapper{animation: sprite 1s steps(1) infinite;}
```

<style>@keyframes sprite{0% {margin-top: -0px;}50% {margin-top: -200px;}100% {margin-top: -200px;}}.animation{overflow: hidden;height: 200px;width: 200px;} .animation .wrapper{animation: sprite 1s steps(1) infinite;}</style>
<div class="animation">
  <div class="wrapper">
    <div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
        <div style="background:#f6757a;grid-area:1/2/2/3"></div>
        <div style="background:#f6757a;grid-area:1/4/2/5"></div>
        <div style="background:#f6757a;grid-area:2/1/3/6"></div>
        <div style="background:#f6757a;grid-area:3/1/4/6"></div>
        <div style="background:#f6757a;grid-area:4/2/5/5"></div>
        <div style="background:#f6757a;grid-area:5/3/6/4"></div>
    </div>
    <div style="display:grid;grid-template-columns:repeat(5,40px);grid-template-rows:repeat(5,40px);">
        <div style="background:#68386c;grid-area:1/2/2/3"></div>
        <div style="background:#68386c;grid-area:1/4/2/5"></div>
        <div style="background:#68386c;grid-area:2/1/3/6"></div>
        <div style="background:#68386c;grid-area:3/1/4/6"></div>
        <div style="background:#68386c;grid-area:4/2/5/5"></div>
        <div style="background:#68386c;grid-area:5/3/6/4"></div>
    </div>
  </div>
</div>

## Make it interactive!
<a href="https://codepen.io/jackiecard/pen/GLvLZE">Check my pen of Totoro</a>, he will make it rain. Since the output is just HTML with classes and styles, you have control over the DOM. It's simple to make the animations get triggered by events.

## Box Shadow
Box Shadow is more commonly used for creating pixel art with CSS. The trick is simple: you have a square with multiple square shaped shadows that you can position using the box shadow’s offset effects. The downside of this technique towards using Grid is that you have to color pixel by pixel, instead of lines and rectangles. Also, it’s practically impossible to use the browser inspector to debug.

On the other hand, the output is an elegant single div and the generated code is lightweight. [Here is an example of how it works](https://codepen.io/jackiecard/pen/eoVPPq) as I've used a script to show each pixel in iteration.


## Overall
The overall experience of creating pixel art with CSS Grid is very good. Yes, it’s a hell lot of HTML and not very accessible, but it’s promising. For instance, you can open the inspector and see for yourself exactly what was build on this page. If you make mistakes, it’s easy to spot and fix. You can build sprites with it. You can add a little bit of script and have it interactive. Maybe build a game using it, why not?

More examples of pixel art using CSS Grid [here](https://codepen.io/jackiecard/).