gdjs.A1Code = {};
gdjs.A1Code.GD1Objects1_1final = [];

gdjs.A1Code.GD3Objects1_1final = [];

gdjs.A1Code.GD4Objects1_1final = [];

gdjs.A1Code.GDforwardButtonObjects1= [];
gdjs.A1Code.GDforwardButtonObjects2= [];
gdjs.A1Code.GDbackButtonObjects1= [];
gdjs.A1Code.GDbackButtonObjects2= [];
gdjs.A1Code.GDperaObjects1= [];
gdjs.A1Code.GDperaObjects2= [];
gdjs.A1Code.GDperaSaysObjects1= [];
gdjs.A1Code.GDperaSaysObjects2= [];
gdjs.A1Code.GDtextoObjects1= [];
gdjs.A1Code.GDtextoObjects2= [];
gdjs.A1Code.GDvoltarTextoObjects1= [];
gdjs.A1Code.GDvoltarTextoObjects2= [];
gdjs.A1Code.GDvoltarAtivObjects1= [];
gdjs.A1Code.GDvoltarAtivObjects2= [];
gdjs.A1Code.GDtelaObjects1= [];
gdjs.A1Code.GDtelaObjects2= [];
gdjs.A1Code.GD1Objects1= [];
gdjs.A1Code.GD1Objects2= [];
gdjs.A1Code.GD2Objects1= [];
gdjs.A1Code.GD2Objects2= [];
gdjs.A1Code.GD3Objects1= [];
gdjs.A1Code.GD3Objects2= [];
gdjs.A1Code.GD4Objects1= [];
gdjs.A1Code.GD4Objects2= [];
gdjs.A1Code.GDareaObjects1= [];
gdjs.A1Code.GDareaObjects2= [];

gdjs.A1Code.conditionTrue_0 = {val:false};
gdjs.A1Code.condition0IsTrue_0 = {val:false};
gdjs.A1Code.condition1IsTrue_0 = {val:false};
gdjs.A1Code.condition2IsTrue_0 = {val:false};
gdjs.A1Code.condition3IsTrue_0 = {val:false};
gdjs.A1Code.condition4IsTrue_0 = {val:false};
gdjs.A1Code.condition5IsTrue_0 = {val:false};
gdjs.A1Code.conditionTrue_1 = {val:false};
gdjs.A1Code.condition0IsTrue_1 = {val:false};
gdjs.A1Code.condition1IsTrue_1 = {val:false};
gdjs.A1Code.condition2IsTrue_1 = {val:false};
gdjs.A1Code.condition3IsTrue_1 = {val:false};
gdjs.A1Code.condition4IsTrue_1 = {val:false};
gdjs.A1Code.condition5IsTrue_1 = {val:false};


gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.A1Code.GD1Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects2Objects = Hashtable.newFrom({"4": gdjs.A1Code.GD4Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD3Objects2Objects = Hashtable.newFrom({"3": gdjs.A1Code.GD3Objects2});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.A1Code.GD2Objects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDvoltarTextoObjects1Objects = Hashtable.newFrom({"voltarTexto": gdjs.A1Code.GDvoltarTextoObjects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDvoltarAtivObjects1Objects = Hashtable.newFrom({"voltarAtiv": gdjs.A1Code.GDvoltarAtivObjects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.A1Code.GDforwardButtonObjects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.A1Code.GDforwardButtonObjects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.A1Code.GDbackButtonObjects1});gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.A1Code.GDbackButtonObjects1});gdjs.A1Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "timerToNextScene");
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
gdjs.A1Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A1Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A1Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.A1Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
gdjs.A1Code.GDvoltarTextoObjects1.createFrom(runtimeScene.getObjects("voltarTexto"));
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getVariables().get("selection").setNumber(gdjs.random(6));
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].activateBehavior("Draggable", false);
}
}{for(var i = 0, len = gdjs.A1Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDvoltarAtivObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A1Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDvoltarTextoObjects1[i].setPosition(352,640);
}
}{for(var i = 0, len = gdjs.A1Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDforwardButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.A1Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDbackButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.A1Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDtextoObjects1[i].setPosition(99999,99999);
}
}}

}


{

gdjs.A1Code.GD1Objects1.length = 0;

gdjs.A1Code.GD3Objects1.length = 0;

gdjs.A1Code.GD4Objects1.length = 0;


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
gdjs.A1Code.condition2IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.GD1Objects1_1final.length = 0;gdjs.A1Code.GD3Objects1_1final.length = 0;gdjs.A1Code.GD4Objects1_1final.length = 0;gdjs.A1Code.condition0IsTrue_1.val = false;
gdjs.A1Code.condition1IsTrue_1.val = false;
gdjs.A1Code.condition2IsTrue_1.val = false;
{
gdjs.A1Code.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition0IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD1Objects1_1final.indexOf(gdjs.A1Code.GD1Objects2[j]) === -1 )
            gdjs.A1Code.GD1Objects1_1final.push(gdjs.A1Code.GD1Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD4Objects2.createFrom(runtimeScene.getObjects("4"));
gdjs.A1Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD4Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition1IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD4Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD4Objects1_1final.indexOf(gdjs.A1Code.GD4Objects2[j]) === -1 )
            gdjs.A1Code.GD4Objects1_1final.push(gdjs.A1Code.GD4Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD3Objects2.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD3Objects2Objects, runtimeScene, true, false);
if( gdjs.A1Code.condition2IsTrue_1.val ) {
    gdjs.A1Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A1Code.GD3Objects2.length;j<jLen;++j) {
        if ( gdjs.A1Code.GD3Objects1_1final.indexOf(gdjs.A1Code.GD3Objects2[j]) === -1 )
            gdjs.A1Code.GD3Objects1_1final.push(gdjs.A1Code.GD3Objects2[j]);
    }
}
}
{
gdjs.A1Code.GD1Objects1.createFrom(gdjs.A1Code.GD1Objects1_1final);
gdjs.A1Code.GD3Objects1.createFrom(gdjs.A1Code.GD3Objects1_1final);
gdjs.A1Code.GD4Objects1.createFrom(gdjs.A1Code.GD4Objects1_1final);
}
}
}if ( gdjs.A1Code.condition1IsTrue_0.val ) {
{
gdjs.A1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}}
}
if (gdjs.A1Code.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A1", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 0;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6895196);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(64,416);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(736,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(736,416);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 1;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6896348);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(64,416);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(736,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(736,416);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 2;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6878076);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(64,416);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(736,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(736,416);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 3;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6783876);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(64,416);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(736,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(736,416);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 4;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6785052);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(64,416);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(736,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(736,416);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 5;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6786228);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(64,416);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(736,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(736,416);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 6;
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition1IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6777388);
}
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A1Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A1Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A1Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD2Objects1[i].setPosition(64,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD3Objects1[i].setPosition(64,416);
}
}{for(var i = 0, len = gdjs.A1Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD1Objects1[i].setPosition(736,160);
}
}{for(var i = 0, len = gdjs.A1Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A1Code.GD4Objects1[i].setPosition(736,416);
}
}}

}


{


gdjs.A1Code.condition0IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.A1Code.condition0IsTrue_0.val) {
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.A1Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GD2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(3);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}}

}


{

gdjs.A1Code.GDvoltarTextoObjects1.createFrom(runtimeScene.getObjects("voltarTexto"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
gdjs.A1Code.condition2IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDvoltarTextoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A1Code.condition1IsTrue_0.val ) {
{
gdjs.A1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}}
}
if (gdjs.A1Code.condition2IsTrue_0.val) {
gdjs.A1Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A1Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A1Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.A1Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
/* Reuse gdjs.A1Code.GDvoltarTextoObjects1 */
{for(var i = 0, len = gdjs.A1Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDvoltarTextoObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A1Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDtextoObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.A1Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDforwardButtonObjects1[i].setPosition(832,608);
}
}{for(var i = 0, len = gdjs.A1Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDvoltarAtivObjects1[i].setPosition(352,608);
}
}{for(var i = 0, len = gdjs.A1Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDbackButtonObjects1[i].setPosition(32,608);
}
}{for(var i = 0, len = gdjs.A1Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDvoltarTextoObjects1[i].setPosition(-(10000),-(10000));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.A1Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDtextoObjects1[i].setPosition(0,0);
}
}}

}


{

gdjs.A1Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
gdjs.A1Code.condition2IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDvoltarAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A1Code.condition1IsTrue_0.val ) {
{
gdjs.A1Code.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "timer");
}}
}
if (gdjs.A1Code.condition2IsTrue_0.val) {
gdjs.A1Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A1Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A1Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.A1Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
/* Reuse gdjs.A1Code.GDvoltarAtivObjects1 */
gdjs.A1Code.GDvoltarTextoObjects1.createFrom(runtimeScene.getObjects("voltarTexto"));
{for(var i = 0, len = gdjs.A1Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDvoltarAtivObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A1Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDperaObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.A1Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDtextoObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.A1Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDbackButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A1Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDforwardButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A1Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDvoltarAtivObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A1Code.GDvoltarTextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDvoltarTextoObjects1[i].setPosition(352,640);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timer");
}{for(var i = 0, len = gdjs.A1Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDtextoObjects1[i].setPosition(99999,99999);
}
}}

}


{

gdjs.A1Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A1Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
gdjs.A1Code.condition2IsTrue_0.val = false;
gdjs.A1Code.condition3IsTrue_0.val = false;
gdjs.A1Code.condition4IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.A1Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.A1Code.GDtextoObjects1[i].getAnimation() != 5 ) {
        gdjs.A1Code.condition2IsTrue_0.val = true;
        gdjs.A1Code.GDtextoObjects1[k] = gdjs.A1Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.A1Code.GDtextoObjects1.length = k;}if ( gdjs.A1Code.condition2IsTrue_0.val ) {
{
gdjs.A1Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.A1Code.condition3IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition4IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6854052);
}
}}
}
}
}
if (gdjs.A1Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A1Code.GDforwardButtonObjects1 */
/* Reuse gdjs.A1Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.A1Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A1Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDtextoObjects1[i].setAnimation(gdjs.A1Code.GDtextoObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


{

gdjs.A1Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A1Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.A1Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.A1Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.A1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A1Code.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.A1Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.A1Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A1Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.A1Code.condition0IsTrue_0.val = false;
gdjs.A1Code.condition1IsTrue_0.val = false;
gdjs.A1Code.condition2IsTrue_0.val = false;
gdjs.A1Code.condition3IsTrue_0.val = false;
gdjs.A1Code.condition4IsTrue_0.val = false;
{
gdjs.A1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A1Code.condition0IsTrue_0.val ) {
{
gdjs.A1Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A1Code.mapOfGDgdjs_46A1Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.A1Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.A1Code.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.A1Code.condition2IsTrue_0.val = true;
        gdjs.A1Code.GDtextoObjects1[k] = gdjs.A1Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.A1Code.GDtextoObjects1.length = k;}if ( gdjs.A1Code.condition2IsTrue_0.val ) {
{
gdjs.A1Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.A1Code.condition3IsTrue_0.val ) {
{
{gdjs.A1Code.conditionTrue_1 = gdjs.A1Code.condition4IsTrue_0;
gdjs.A1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6857292);
}
}}
}
}
}
if (gdjs.A1Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A1Code.GDbackButtonObjects1 */
/* Reuse gdjs.A1Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.A1Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A1Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A1Code.GDtextoObjects1[i].setAnimation(gdjs.A1Code.GDtextoObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


}; //End of gdjs.A1Code.eventsList0xb25a8


gdjs.A1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.A1Code.GDforwardButtonObjects1.length = 0;
gdjs.A1Code.GDforwardButtonObjects2.length = 0;
gdjs.A1Code.GDbackButtonObjects1.length = 0;
gdjs.A1Code.GDbackButtonObjects2.length = 0;
gdjs.A1Code.GDperaObjects1.length = 0;
gdjs.A1Code.GDperaObjects2.length = 0;
gdjs.A1Code.GDperaSaysObjects1.length = 0;
gdjs.A1Code.GDperaSaysObjects2.length = 0;
gdjs.A1Code.GDtextoObjects1.length = 0;
gdjs.A1Code.GDtextoObjects2.length = 0;
gdjs.A1Code.GDvoltarTextoObjects1.length = 0;
gdjs.A1Code.GDvoltarTextoObjects2.length = 0;
gdjs.A1Code.GDvoltarAtivObjects1.length = 0;
gdjs.A1Code.GDvoltarAtivObjects2.length = 0;
gdjs.A1Code.GDtelaObjects1.length = 0;
gdjs.A1Code.GDtelaObjects2.length = 0;
gdjs.A1Code.GD1Objects1.length = 0;
gdjs.A1Code.GD1Objects2.length = 0;
gdjs.A1Code.GD2Objects1.length = 0;
gdjs.A1Code.GD2Objects2.length = 0;
gdjs.A1Code.GD3Objects1.length = 0;
gdjs.A1Code.GD3Objects2.length = 0;
gdjs.A1Code.GD4Objects1.length = 0;
gdjs.A1Code.GD4Objects2.length = 0;
gdjs.A1Code.GDareaObjects1.length = 0;
gdjs.A1Code.GDareaObjects2.length = 0;

gdjs.A1Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A1Code'] = gdjs.A1Code;
