(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,778,778);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,15);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,47,48);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.sprite_150_图层_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2
	this.instance = new lib.Bitmap3();
	this.instance.parent = this;
	this.instance.setTransform(-11.25,3.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite_150_图层_2, null, null);


(lib.shape151副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D02230","#FF3399","rgba(240,206,209,0)"],[0,0.596,1],3.6,5.9,-17.8,-12.5).s().p("AA1CBQgrgRhDggQgNgsgYgaQgYgYgRhuQBDBAAdAKIgihXQBZBWAkAdQArAxAcAuQAbAugcAOQgLAFgPAAQgTAAgYgJgAgDgWQgLAGABARQAAATAKATQAKATAWASQAWATAVAGQAWAGAHgJQAIgJgLgTQgLgUgogoQgjghgMAAIgDABg");
	this.shape.setTransform(-0.0062,0.0194);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#D02230","#FF3399","rgba(240,206,209,0)"],[0,0.596,1],3.7,4.5,-17,-14.5).s().p("AAbA9QgVgGgVgSQgWgSgLgTQgKgSAAgTQgBgSALgHQALgGAnAnQAoAnALAVQALATgIAIQgEAGgKAAQgGAAgJgDg");
	this.shape_1.setTransform(4.473,3.9861);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.6,-13.8,27.2,27.700000000000003);


(lib.元件_1_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件_1_图层_1, null, null);


(lib.Symbol45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.parent = this;
	this.instance.setTransform(-8,-8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,16,15);


(lib.sprite150 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_2_obj_
	this.图层_2 = new lib.sprite_150_图层_2();
	this.图层_2.name = "图层_2";
	this.图层_2.parent = this;
	this.图层_2.setTransform(12.2,27.4,1,1,0,0,0,12.2,27.4);
	this.图层_2.depth = 0;
	this.图层_2.isAttachedToCamera = 0
	this.图层_2.isAttachedToMask = 0
	this.图层_2.layerDepth = 0
	this.图层_2.layerIndex = 0
	this.图层_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.sprite150, new cjs.Rectangle(-11.2,3.4,47,48), null);


(lib.sprite_154_副本_2_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sprite150();
	this.instance.parent = this;
	this.instance.setTransform(162.75,-10.05);
	this.instance.alpha = 0.7813;
	this.instance.shadow = new cjs.Shadow("#FF99CC",0,0,15);
	this.instance.filters = [new cjs.BlurFilter(2, 2, 1)];
	this.instance.cache(-13,1,51,52);

	this.instance_1 = new lib.shape151副本("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(303.95,1221.6,0.8396,0.8396,63.9574);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},12).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},34).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},19).to({state:[{t:this.instance}]},21).to({state:[{t:this.instance}]},18).to({state:[{t:this.instance_1}]},3).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9686,scaleY:1.007,rotation:0.0087,x:178.35,y:68.9,alpha:0.75},12).to({scaleX:0.9138,scaleY:1.0193,rotation:0.5541,x:206.05,y:207.8,alpha:0.6992},19).to({scaleX:0.7964,scaleY:1.046,rotation:2.7851,x:236.6,y:510.3,alpha:0.5898},34).to({scaleX:0.7846,scaleY:0.9873,rotation:4.2519,x:232,y:557.05,alpha:0.5391},5).to({scaleX:0.8238,scaleY:0.9302,rotation:-2.026,x:184.1,y:732.95,alpha:0.6992},19).to({scaleX:0.8673,scaleY:0.8673,rotation:-9.145,x:221.55,y:974,alpha:0.8711},21).to({scaleX:0.8414,scaleY:0.8414,rotation:55.9007,x:301.9,y:1183.2,alpha:0.1016},18).to({_off:true},3).wait(3));

}).prototype = p = new cjs.MovieClip();


(lib.sprite_153_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sprite150();
	this.instance.parent = this;
	this.instance.setTransform(88.45,-44.85,1,1,-15);
	this.instance.alpha = 0.7813;

	this.instance_1 = new lib.shape151副本("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(44,1150.4,0.8397,0.8397,-11.0428);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},6).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},16).to({state:[{t:this.instance}]},41).to({state:[{t:this.instance}]},47).to({state:[{t:this.instance_1}]},24).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9908,scaleY:1.0004,rotation:-13.5127,x:95.3,y:-22.2,alpha:0.7695},6).to({scaleX:0.9885,scaleY:0.9999,rotation:-13.0624,x:96.5,y:-17.65},1).to({scaleX:0.9691,scaleY:0.9791,rotation:-12.7742,x:105.2,y:140.5,alpha:0.6719},16).to({scaleX:0.9211,scaleY:0.9274,rotation:-12.0445,x:106.7,y:536.75,alpha:0.4297},41).to({regX:0.1,regY:0.1,scaleX:0.8666,scaleY:0.8687,rotation:-11.2908,x:65.2,y:943.05,alpha:0.3516},47).to({_off:true,regX:0,regY:0,scaleX:0.8397,scaleY:0.8397,rotation:-11.0428,x:44,y:1150.4,alpha:0,mode:"synched",startPosition:0},24).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.sprite_152_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.sprite150();
	this.instance.parent = this;
	this.instance.setTransform(-7.5,1.7);
	this.instance.alpha = 0.7813;

	this.instance_1 = new lib.shape151副本("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(482.45,1075.15,0.8396,0.8396,63.9574);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance}]},62).to({state:[{t:this.instance}]},13).to({state:[{t:this.instance}]},50).to({state:[{t:this.instance}]},8).to({state:[{t:this.instance}]},11).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_1}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:0.9921,scaleY:1.0017,rotation:-0.7689,x:-7,y:24.6,alpha:1},5).to({scaleX:0.8341,scaleY:1.0353,rotation:-17.7839,x:44.95,y:482.9,alpha:0.6289},62).to({scaleX:0.8071,scaleY:1.0096,rotation:-22.7843,x:90.65,y:558.2,alpha:0.5781},13).to({scaleX:0.745,scaleY:0.745,rotation:-40.6105,x:380.9,y:794.7,alpha:0.2891},50).to({scaleX:0.7639,scaleY:0.7639,rotation:-19.7764,x:416.1,y:840.7,alpha:0.2305},8).to({scaleX:0.806,scaleY:0.806,rotation:28.8144,x:475.9,y:961.8,alpha:0.0898},11).to({scaleX:0.8182,scaleY:0.8182,rotation:42.8687,x:485.05,y:1001.35,alpha:0.0508},4).to({scaleX:0.8324,scaleY:0.8324,rotation:56.9391,x:490.55,y:1041.75,alpha:0.0195},4).to({_off:true},4).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1_obj_
	this.图层_1 = new lib.元件_1_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(389,389,1,1,0,0,0,389,389);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.元件1, new cjs.Rectangle(0,0,778,778), null);


(lib.元件_2_图层_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件1();
	this.instance.parent = this;
	this.instance.setTransform(389,389,1,1,0,0,0,389,389);
	this.instance.alpha = 0.2617;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},26).to({alpha:0.2617},25).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_47_Layer_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.Symbol45("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-444.1,349.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60).to({_off:false},0).to({scaleX:0.9992,scaleY:0.9992,rotation:-164.6933,y:279.7},8).to({scaleX:0.9997,scaleY:0.9997,rotation:-185.0367,y:270.95},1).to({rotation:-174.9633,y:122.35},17).to({scaleX:0.9992,scaleY:0.9992,rotation:-195.3067,y:113.6},1).to({scaleX:1,scaleY:1,rotation:-360,y:43.65},8).to({x:-454.1,y:-77.85},18).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_47_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Symbol45("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-453.15,349.65);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({scaleX:0.9995,scaleY:0.9995,rotation:-171.1831,x:-450.25,y:195.65},19).to({rotation:-188.8169,x:-449.9,y:179.45},2).to({scaleX:1,scaleY:1,rotation:-360,x:-447,y:-3.6},30).to({_off:true},1).wait(57));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_47_Layer_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_5
	this.instance = new lib.Symbol45("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-348.65,380.75,0.6,0.6,74.9989);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).to({scaleX:0.6501,scaleY:0.6501,rotation:-69.6914,x:-340.8,y:344.05},9).to({scaleX:0.6841,scaleY:0.6841,rotation:-166.1782,x:-341.4,y:318.75},6).to({scaleX:0.6902,scaleY:0.6902,rotation:-182.0183,x:-341.6,y:314.6},1).to({scaleX:0.7005,scaleY:0.7005,rotation:-214.1096,x:-342.05,y:306.25},2).to({scaleX:0.7354,scaleY:0.7354,rotation:-310.6059,x:-339.25,y:281.25},6).to({scaleX:0.4335,scaleY:0.4335,rotation:-344.4762,x:-311.85,y:152.05},25).to({scaleX:0.3745,scaleY:0.3745,rotation:-358.2301,x:-302.75,y:99.2},15).to({scaleX:0.3667,scaleY:0.3667,rotation:-360,x:-302.95,y:92},2).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_47_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.instance = new lib.Symbol45("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-461.95,360.95);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(41).to({_off:false},0).to({scaleX:0.9992,scaleY:0.9992,rotation:164.9873,guide:{path:[-461.8,360.9,-417,371.6,-374.2,361.8]}},4).to({scaleX:0.9987,scaleY:0.9987,rotation:206.0984,guide:{path:[-374.2,361.9,-363.4,359.4,-352.7,355.6]}},1).to({scaleX:0.9998,scaleY:0.9998,rotation:176.2493,guide:{path:[-352.7,355.7,-352.6,355.7,-352.6,355.6,-344.8,352.8,-337.1,349.4,-276.8,322.5,-218.1,280.2,-208.7,273.6,-199.5,266.8]}},8).to({scaleX:0.9984,scaleY:0.9984,rotation:217.3813,guide:{path:[-199.5,266.8,-190.5,260.3,-181.6,253.7]}},1).to({scaleX:1,scaleY:1,rotation:299.9999,guide:{path:[-181.6,253.8,-163.7,240.7,-145.9,227.4]}},2).to({scaleX:0.9989,scaleY:0.9989,rotation:339.2102,guide:{path:[-145.8,227.3,-145.8,227.3,-145.8,227.3,-123.4,210.7,-101.2,193.8,-43,149.7,16.7,130.7,46.3,121.3,77,120.6,93.9,120.1,110.9,120.8,110.9,120.8,111,120.8]}},27).to({scaleX:0.9998,scaleY:0.9998,rotation:358.6909,guide:{path:[111,120.8,124.9,121.3,138.7,122.6,169.8,125.4,200.8,129.2,226.3,132.4,251.2,132.9]}},13).to({scaleX:1,scaleY:1,rotation:360,x:262,y:133},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_47_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol45("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-288.65,380.75,0.6,0.6,74.9989);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({scaleX:0.6501,scaleY:0.6501,rotation:-69.6914,x:-280.85,y:344.05},3).to({scaleX:0.7005,scaleY:0.7005,rotation:-214.1096,x:-282,y:306.2},3).to({scaleX:0.7354,scaleY:0.7354,rotation:-310.6059,x:-279.25,y:281.25},2).to({scaleX:0.4335,scaleY:0.4335,rotation:-344.4762,x:-251.85,y:152.05},19).to({scaleX:0.3722,scaleY:0.3722,rotation:-358.7386,x:-242.8,y:97.05},11).to({scaleX:0.3667,scaleY:0.3667,rotation:-360,x:-242.95,y:92},1).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_47_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol45("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-356.9,320.45);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({rotation:360,guide:{path:[-356.8,320.4,-356.8,320.4,-356.8,320.3,-356.6,315.6,-354.7,297.7,-352.8,279.9,-342.3,247.8,-331.8,215.8,-317.8,181.7,-303.8,147.7,-292,119.4,-280.2,91.2,-273.1,48.9,-266,6.6,-266.8,-19.8,-267.5,-46.2,-274.9,-74.5,-279.2,-91.3,-284.8,-106.5]}},36).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.sprite154副本2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_133 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(133).call(this.frame_133).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.sprite_154_副本_2_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(175,15.7,1,1,0,0,0,175,15.7);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(134));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(117.5,-40.6,220.3,1294.6);


(lib.sprite153 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_135 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.sprite_153_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(107.4,-21.6,1,1,0,0,0,107.4,-21.6);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(30.8,-50.8,119.39999999999999,1236.7);


(lib.sprite152 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_161 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(161).call(this.frame_161).wait(1));

	// Layer_1_obj_
	this.Layer_1 = new lib.sprite_152_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(4.8,27.4,1,1,0,0,0,4.8,27.4);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(162));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.7,5.1,523.3000000000001,1085);


(lib.sprite_158_副本_Layer_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_13
	this.instance = new lib.sprite153("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-37.95,150.45,0.4822,0.4822,-83.9634);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(2611));

}).prototype = p = new cjs.MovieClip();


(lib.sprite_158_副本_Layer_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.sprite154副本2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-48.45,125.7,0.5715,0.5715,-83.9641,0,0,0,-0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(54).to({_off:false},0).wait(2551));

}).prototype = p = new cjs.MovieClip();


(lib.sprite_158_副本_Layer_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.sprite152("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-91.6,-60.1,0.5715,0.5715,0,-96.0359,83.9641,2.9,26.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(2579));

}).prototype = p = new cjs.MovieClip();


(lib.sprite_158_副本_Layer_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_7
	this.instance = new lib.sprite153("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-44.75,-10.6,0.8936,0.8936,-83.9639,0,0,105.2,-23.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(2558));

}).prototype = p = new cjs.MovieClip();


(lib.sprite_158_副本_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.sprite152("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-43.2,105.9,0.1728,0.1728,-83.9637,0,0,3.1,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2582));

}).prototype = p = new cjs.MovieClip();


(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_51 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(51).call(this.frame_51).wait(1));

	// 图层_1_obj_
	this.图层_1 = new lib.元件_2_图层_1();
	this.图层_1.name = "图层_1";
	this.图层_1.parent = this;
	this.图层_1.setTransform(389,389,1,1,0,0,0,389,389);
	this.图层_1.depth = 0;
	this.图层_1.isAttachedToCamera = 0
	this.图层_1.isAttachedToMask = 0
	this.图层_1.layerDepth = 0
	this.图层_1.layerIndex = 0
	this.图层_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_1).wait(52));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,778,778);


(lib.Symbol47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_127 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(127).call(this.frame_127).wait(1));

	// Layer_9_obj_
	this.Layer_9 = new lib.Symbol_47_Layer_9();
	this.Layer_9.name = "Layer_9";
	this.Layer_9.parent = this;
	this.Layer_9.depth = 0;
	this.Layer_9.isAttachedToCamera = 0
	this.Layer_9.isAttachedToMask = 0
	this.Layer_9.layerDepth = 0
	this.Layer_9.layerIndex = 0
	this.Layer_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_9).wait(113).to({_off:true},1).wait(14));

	// Layer_8_obj_
	this.Layer_8 = new lib.Symbol_47_Layer_8();
	this.Layer_8.name = "Layer_8";
	this.Layer_8.parent = this;
	this.Layer_8.depth = 0;
	this.Layer_8.isAttachedToCamera = 0
	this.Layer_8.isAttachedToMask = 0
	this.Layer_8.layerDepth = 0
	this.Layer_8.layerIndex = 1
	this.Layer_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(128));

	// Layer_5_obj_
	this.Layer_5 = new lib.Symbol_47_Layer_5();
	this.Layer_5.name = "Layer_5";
	this.Layer_5.parent = this;
	this.Layer_5.depth = 0;
	this.Layer_5.isAttachedToCamera = 0
	this.Layer_5.isAttachedToMask = 0
	this.Layer_5.layerDepth = 0
	this.Layer_5.layerIndex = 2
	this.Layer_5.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_5).wait(75).to({_off:true},1).wait(52));

	// Layer_4_obj_
	this.Layer_4 = new lib.Symbol_47_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 3
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(41).to({x:31.55,y:126.6},0).wait(43).to({x:0,y:0},13).wait(1).to({_off:true},1).wait(29));

	// Layer_3_obj_
	this.Layer_3 = new lib.Symbol_47_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 4
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(64).to({_off:true},1).wait(63));

	// Layer_2_obj_
	this.Layer_2 = new lib.Symbol_47_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 5
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(19).to({x:-266.9,y:-8},0).wait(36).to({_off:true},1).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-469.9,-114.6,739.9,501.1);


(lib.场景_1_图层_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_8
	this.instance = new lib.Symbol47("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(2308.3,861.7,4.6612,4.6612,0,-61.3855,118.6145,-421.2,384.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8088));

}).prototype = p = new cjs.MovieClip();


(lib.场景_1_图层_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_7
	this.instance = new lib.元件2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(1621.3,769.1,1,1,0,0,0,389,389);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8088));

}).prototype = p = new cjs.MovieClip();


(lib.sprite158副本 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2654 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2654).call(this.frame_2654).wait(1));

	// Layer_13_obj_
	this.Layer_13 = new lib.sprite_158_副本_Layer_13();
	this.Layer_13.name = "Layer_13";
	this.Layer_13.parent = this;
	this.Layer_13.depth = 0;
	this.Layer_13.isAttachedToCamera = 0
	this.Layer_13.isAttachedToMask = 0
	this.Layer_13.layerDepth = 0
	this.Layer_13.layerIndex = 0
	this.Layer_13.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_13).wait(2655));

	// Layer_11_obj_
	this.Layer_11 = new lib.sprite_158_副本_Layer_11();
	this.Layer_11.name = "Layer_11";
	this.Layer_11.parent = this;
	this.Layer_11.depth = 0;
	this.Layer_11.isAttachedToCamera = 0
	this.Layer_11.isAttachedToMask = 0
	this.Layer_11.layerDepth = 0
	this.Layer_11.layerIndex = 1
	this.Layer_11.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_11).wait(54).to({_off:true},2551).wait(50));

	// Layer_9_obj_
	this.Layer_9 = new lib.sprite_158_副本_Layer_9();
	this.Layer_9.name = "Layer_9";
	this.Layer_9.parent = this;
	this.Layer_9.depth = 0;
	this.Layer_9.isAttachedToCamera = 0
	this.Layer_9.isAttachedToMask = 0
	this.Layer_9.layerDepth = 0
	this.Layer_9.layerIndex = 2
	this.Layer_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_9).wait(7).to({_off:true},2579).wait(69));

	// Layer_7_obj_
	this.Layer_7 = new lib.sprite_158_副本_Layer_7();
	this.Layer_7.name = "Layer_7";
	this.Layer_7.parent = this;
	this.Layer_7.depth = 0;
	this.Layer_7.isAttachedToCamera = 0
	this.Layer_7.isAttachedToMask = 0
	this.Layer_7.layerDepth = 0
	this.Layer_7.layerIndex = 3
	this.Layer_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_7).wait(4).to({_off:true},2558).wait(93));

	// Layer_3_obj_
	this.Layer_3 = new lib.sprite_158_副本_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(-42.6,105.7,1,1,0,0,0,-42.6,105.7);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 4
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).to({_off:true},2582).wait(73));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-105.1,-74.6,1128.8999999999999,268.2);


(lib.场景_1_图层_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_9
	this.instance = new lib.sprite158副本("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(471.75,1257.85,0.9112,1.3513,0,27.2624,-151.2594,-42.4,111);

	this.instance_1 = new lib.sprite158副本("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(1518.25,551.5,0.435,0.7607,0,62.6722,-119.0251,-42.9,110.6);

	this.instance_2 = new lib.sprite158副本("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(1947.55,609.8,0.7892,1.3803,0,62.6727,-119.026,-42.9,110.6);

	this.instance_3 = new lib.sprite158副本("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(2021.7,366.65,1.0372,1.5383,0,27.2625,-151.258,-42.3,110.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(8088));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.f1_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_8087 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(8087).call(this.frame_8087).wait(1));

	// 图层_9_obj_
	this.图层_9 = new lib.场景_1_图层_9();
	this.图层_9.name = "图层_9";
	this.图层_9.parent = this;
	this.图层_9.setTransform(1271.5,726.5,1,1,0,0,0,1271.5,726.5);
	this.图层_9.depth = 0;
	this.图层_9.isAttachedToCamera = 0
	this.图层_9.isAttachedToMask = 0
	this.图层_9.layerDepth = 0
	this.图层_9.layerIndex = 0
	this.图层_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_9).wait(8088));

	// 图层_7_obj_
	this.图层_7 = new lib.场景_1_图层_7();
	this.图层_7.name = "图层_7";
	this.图层_7.parent = this;
	this.图层_7.setTransform(1621.3,769.1,1,1,0,0,0,1621.3,769.1);
	this.图层_7.depth = 0;
	this.图层_7.isAttachedToCamera = 0
	this.图层_7.isAttachedToMask = 0
	this.图层_7.layerDepth = 0
	this.图层_7.layerIndex = 1
	this.图层_7.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_7).wait(8088));

	// 图层_8_obj_
	this.图层_8 = new lib.场景_1_图层_8();
	this.图层_8.name = "图层_8";
	this.图层_8.parent = this;
	this.图层_8.setTransform(1052,1294.5,1,1,0,0,0,1052,1294.5);
	this.图层_8.depth = 0;
	this.图层_8.isAttachedToCamera = 0
	this.图层_8.isAttachedToMask = 0
	this.图层_8.layerDepth = 0
	this.图层_8.layerIndex = 2
	this.图层_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.图层_8).wait(8088));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(551.1,185.1,1799.5,2959.8);
// library properties:
lib.properties = {
	id: '09A33DAE10E05E43B06A1D87EE5F9473',
	width: 1920,
	height: 1080,
	fps: 25,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"https://tamquocchi.vn/Bitmap/Bitmap1.png", id:"Bitmap1"},
		{src:"https://tamquocchi.vn/Bitmap/Bitmap2.png", id:"Bitmap2"},
		{src:"https://tamquocchi.vn/Bitmap/Bitmap3.png", id:"Bitmap3"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['09A33DAE10E05E43B06A1D87EE5F9473'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;