gdjs.A3Code = {};
gdjs.A3Code.GD1Objects1_1final = [];

gdjs.A3Code.GD3Objects1_1final = [];

gdjs.A3Code.GD4Objects1_1final = [];

gdjs.A3Code.GDforwardButtonObjects1= [];
gdjs.A3Code.GDforwardButtonObjects2= [];
gdjs.A3Code.GDbackButtonObjects1= [];
gdjs.A3Code.GDbackButtonObjects2= [];
gdjs.A3Code.GDperaObjects1= [];
gdjs.A3Code.GDperaObjects2= [];
gdjs.A3Code.GDperaSaysObjects1= [];
gdjs.A3Code.GDperaSaysObjects2= [];
gdjs.A3Code.GDtextoObjects1= [];
gdjs.A3Code.GDtextoObjects2= [];
gdjs.A3Code.GDvoltarAtivObjects1= [];
gdjs.A3Code.GDvoltarAtivObjects2= [];
gdjs.A3Code.GDvoltarAoTextoObjects1= [];
gdjs.A3Code.GDvoltarAoTextoObjects2= [];
gdjs.A3Code.GDtelaObjects1= [];
gdjs.A3Code.GDtelaObjects2= [];
gdjs.A3Code.GD1Objects1= [];
gdjs.A3Code.GD1Objects2= [];
gdjs.A3Code.GD2Objects1= [];
gdjs.A3Code.GD2Objects2= [];
gdjs.A3Code.GD3Objects1= [];
gdjs.A3Code.GD3Objects2= [];
gdjs.A3Code.GD4Objects1= [];
gdjs.A3Code.GD4Objects2= [];
gdjs.A3Code.GDareaObjects1= [];
gdjs.A3Code.GDareaObjects2= [];

gdjs.A3Code.conditionTrue_0 = {val:false};
gdjs.A3Code.condition0IsTrue_0 = {val:false};
gdjs.A3Code.condition1IsTrue_0 = {val:false};
gdjs.A3Code.condition2IsTrue_0 = {val:false};
gdjs.A3Code.condition3IsTrue_0 = {val:false};
gdjs.A3Code.condition4IsTrue_0 = {val:false};
gdjs.A3Code.condition5IsTrue_0 = {val:false};
gdjs.A3Code.conditionTrue_1 = {val:false};
gdjs.A3Code.condition0IsTrue_1 = {val:false};
gdjs.A3Code.condition1IsTrue_1 = {val:false};
gdjs.A3Code.condition2IsTrue_1 = {val:false};
gdjs.A3Code.condition3IsTrue_1 = {val:false};
gdjs.A3Code.condition4IsTrue_1 = {val:false};
gdjs.A3Code.condition5IsTrue_1 = {val:false};


gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.A3Code.GD1Objects2});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD3Objects2Objects = Hashtable.newFrom({"3": gdjs.A3Code.GD3Objects2});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD4Objects2Objects = Hashtable.newFrom({"4": gdjs.A3Code.GD4Objects2});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.A3Code.GD2Objects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDvoltarAoTextoObjects1Objects = Hashtable.newFrom({"voltarAoTexto": gdjs.A3Code.GDvoltarAoTextoObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.A3Code.GDforwardButtonObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDvoltarAtivObjects1Objects = Hashtable.newFrom({"voltarAtiv": gdjs.A3Code.GDvoltarAtivObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.A3Code.GDforwardButtonObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.A3Code.GDbackButtonObjects1});gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.A3Code.GDbackButtonObjects1});gdjs.A3Code.eventsList0xb25a8 = function(runtimeScene) {

{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "timerToNextScene");
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Pergunta", false);
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.A3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(3);
}{runtimeScene.getVariables().get("selection").setNumber(gdjs.random(5));
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}}

}


{

gdjs.A3Code.GD1Objects1.length = 0;

gdjs.A3Code.GD3Objects1.length = 0;

gdjs.A3Code.GD4Objects1.length = 0;


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
gdjs.A3Code.condition2IsTrue_0.val = false;
gdjs.A3Code.condition3IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.GD1Objects1_1final.length = 0;gdjs.A3Code.GD3Objects1_1final.length = 0;gdjs.A3Code.GD4Objects1_1final.length = 0;gdjs.A3Code.condition0IsTrue_1.val = false;
gdjs.A3Code.condition1IsTrue_1.val = false;
gdjs.A3Code.condition2IsTrue_1.val = false;
{
gdjs.A3Code.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.A3Code.condition0IsTrue_1.val ) {
    gdjs.A3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A3Code.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.A3Code.GD1Objects1_1final.indexOf(gdjs.A3Code.GD1Objects2[j]) === -1 )
            gdjs.A3Code.GD1Objects1_1final.push(gdjs.A3Code.GD1Objects2[j]);
    }
}
}
{
gdjs.A3Code.GD3Objects2.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD3Objects2Objects, runtimeScene, true, false);
if( gdjs.A3Code.condition1IsTrue_1.val ) {
    gdjs.A3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A3Code.GD3Objects2.length;j<jLen;++j) {
        if ( gdjs.A3Code.GD3Objects1_1final.indexOf(gdjs.A3Code.GD3Objects2[j]) === -1 )
            gdjs.A3Code.GD3Objects1_1final.push(gdjs.A3Code.GD3Objects2[j]);
    }
}
}
{
gdjs.A3Code.GD4Objects2.createFrom(runtimeScene.getObjects("4"));
gdjs.A3Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD4Objects2Objects, runtimeScene, true, false);
if( gdjs.A3Code.condition2IsTrue_1.val ) {
    gdjs.A3Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.A3Code.GD4Objects2.length;j<jLen;++j) {
        if ( gdjs.A3Code.GD4Objects1_1final.indexOf(gdjs.A3Code.GD4Objects2[j]) === -1 )
            gdjs.A3Code.GD4Objects1_1final.push(gdjs.A3Code.GD4Objects2[j]);
    }
}
}
{
gdjs.A3Code.GD1Objects1.createFrom(gdjs.A3Code.GD1Objects1_1final);
gdjs.A3Code.GD3Objects1.createFrom(gdjs.A3Code.GD3Objects1_1final);
gdjs.A3Code.GD4Objects1.createFrom(gdjs.A3Code.GD4Objects1_1final);
}
}
}if ( gdjs.A3Code.condition1IsTrue_0.val ) {
{
gdjs.A3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.A3Code.condition2IsTrue_0.val ) {
{
gdjs.A3Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "timer");
}}
}
}
if (gdjs.A3Code.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "A3", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 0;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8533756);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 1;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8534884);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 2;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8631220);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 3;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8441236);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 4;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8613180);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("selection")) == 5;
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition1IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7450244);
}
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.A3Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.A3Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.A3Code.GD3Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD3Objects1[i].setPosition(32,309);
}
}{for(var i = 0, len = gdjs.A3Code.GD1Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD1Objects1[i].setPosition(32,413);
}
}{for(var i = 0, len = gdjs.A3Code.GD2Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD2Objects1[i].setPosition(32,512);
}
}{for(var i = 0, len = gdjs.A3Code.GD4Objects1.length ;i < len;++i) {
    gdjs.A3Code.GD4Objects1[i].setPosition(32,608);
}
}}

}


{


gdjs.A3Code.condition0IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
}if (gdjs.A3Code.condition0IsTrue_0.val) {
gdjs.A3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{for(var i = 0, len = gdjs.A3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDperaObjects1[i].setAnimation(4);
}
}}

}


{

gdjs.A3Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
gdjs.A3Code.condition2IsTrue_0.val = false;
gdjs.A3Code.condition3IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GD2Objects1Objects, runtimeScene, true, false);
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A3Code.condition1IsTrue_0.val ) {
{
gdjs.A3Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3)) == 1;
}if ( gdjs.A3Code.condition2IsTrue_0.val ) {
{
gdjs.A3Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.2, "timer");
}}
}
}
if (gdjs.A3Code.condition3IsTrue_0.val) {
gdjs.A3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.A3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDperaObjects1[i].setAnimation(3);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerToNextScene");
}}

}


{

gdjs.A3Code.GDvoltarAoTextoObjects1.createFrom(runtimeScene.getObjects("voltarAoTexto"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDvoltarAoTextoObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A3Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
/* Reuse gdjs.A3Code.GDvoltarAoTextoObjects1 */
gdjs.A3Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
{for(var i = 0, len = gdjs.A3Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDtextoObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.A3Code.GDvoltarAoTextoObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDvoltarAoTextoObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDforwardButtonObjects1[i].setPosition(832,608);
}
}{for(var i = 0, len = gdjs.A3Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDvoltarAtivObjects1[i].setPosition(352,608);
}
}{for(var i = 0, len = gdjs.A3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDbackButtonObjects1[i].setPosition(32,608);
}
}{for(var i = 0, len = gdjs.A3Code.GDvoltarAoTextoObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDvoltarAoTextoObjects1[i].setPosition(-(10000),-(10000));
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.A3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A3Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
gdjs.A3Code.condition2IsTrue_0.val = false;
gdjs.A3Code.condition3IsTrue_0.val = false;
gdjs.A3Code.condition4IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.A3Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.A3Code.GDtextoObjects1[i].getAnimation() != 3 ) {
        gdjs.A3Code.condition2IsTrue_0.val = true;
        gdjs.A3Code.GDtextoObjects1[k] = gdjs.A3Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.A3Code.GDtextoObjects1.length = k;}if ( gdjs.A3Code.condition2IsTrue_0.val ) {
{
gdjs.A3Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.A3Code.condition3IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition4IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9847852);
}
}}
}
}
}
if (gdjs.A3Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A3Code.GDforwardButtonObjects1 */
/* Reuse gdjs.A3Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.A3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A3Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDtextoObjects1[i].setAnimation(gdjs.A3Code.GDtextoObjects1[i].getAnimation() + (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


{

gdjs.A3Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDvoltarAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
gdjs.A3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.A3Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.A3Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.A3Code.GDvoltarAoTextoObjects1.createFrom(runtimeScene.getObjects("voltarAoTexto"));
/* Reuse gdjs.A3Code.GDvoltarAtivObjects1 */
{for(var i = 0, len = gdjs.A3Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDvoltarAtivObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A3Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDperaObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.A3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDbackButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDforwardButtonObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A3Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDvoltarAtivObjects1[i].setPosition(-(10000),-(10000));
}
}{for(var i = 0, len = gdjs.A3Code.GDvoltarAoTextoObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDvoltarAoTextoObjects1[i].setPosition(704,680);
}
}{runtimeScene.getVariables().getFromIndex(3).setNumber(1);
}{for(var i = 0, len = gdjs.A3Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDtextoObjects1[i].setPosition(9999999,99999);
}
}}

}


{

gdjs.A3Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A3Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.A3Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.A3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.A3Code.condition1IsTrue_0.val) {
/* Reuse gdjs.A3Code.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.A3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.A3Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.A3Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.A3Code.condition0IsTrue_0.val = false;
gdjs.A3Code.condition1IsTrue_0.val = false;
gdjs.A3Code.condition2IsTrue_0.val = false;
gdjs.A3Code.condition3IsTrue_0.val = false;
gdjs.A3Code.condition4IsTrue_0.val = false;
{
gdjs.A3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.A3Code.condition0IsTrue_0.val ) {
{
gdjs.A3Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.A3Code.mapOfGDgdjs_46A3Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.A3Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.A3Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.A3Code.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.A3Code.condition2IsTrue_0.val = true;
        gdjs.A3Code.GDtextoObjects1[k] = gdjs.A3Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.A3Code.GDtextoObjects1.length = k;}if ( gdjs.A3Code.condition2IsTrue_0.val ) {
{
gdjs.A3Code.condition3IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.5, "timerSinceScene");
}if ( gdjs.A3Code.condition3IsTrue_0.val ) {
{
{gdjs.A3Code.conditionTrue_1 = gdjs.A3Code.condition4IsTrue_0;
gdjs.A3Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6864852);
}
}}
}
}
}
if (gdjs.A3Code.condition4IsTrue_0.val) {
/* Reuse gdjs.A3Code.GDbackButtonObjects1 */
/* Reuse gdjs.A3Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.A3Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.A3Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.A3Code.GDtextoObjects1[i].setAnimation(gdjs.A3Code.GDtextoObjects1[i].getAnimation() - (1));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "timerSinceScene");
}}

}


{


{
}

}


}; //End of gdjs.A3Code.eventsList0xb25a8


gdjs.A3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.A3Code.GDforwardButtonObjects1.length = 0;
gdjs.A3Code.GDforwardButtonObjects2.length = 0;
gdjs.A3Code.GDbackButtonObjects1.length = 0;
gdjs.A3Code.GDbackButtonObjects2.length = 0;
gdjs.A3Code.GDperaObjects1.length = 0;
gdjs.A3Code.GDperaObjects2.length = 0;
gdjs.A3Code.GDperaSaysObjects1.length = 0;
gdjs.A3Code.GDperaSaysObjects2.length = 0;
gdjs.A3Code.GDtextoObjects1.length = 0;
gdjs.A3Code.GDtextoObjects2.length = 0;
gdjs.A3Code.GDvoltarAtivObjects1.length = 0;
gdjs.A3Code.GDvoltarAtivObjects2.length = 0;
gdjs.A3Code.GDvoltarAoTextoObjects1.length = 0;
gdjs.A3Code.GDvoltarAoTextoObjects2.length = 0;
gdjs.A3Code.GDtelaObjects1.length = 0;
gdjs.A3Code.GDtelaObjects2.length = 0;
gdjs.A3Code.GD1Objects1.length = 0;
gdjs.A3Code.GD1Objects2.length = 0;
gdjs.A3Code.GD2Objects1.length = 0;
gdjs.A3Code.GD2Objects2.length = 0;
gdjs.A3Code.GD3Objects1.length = 0;
gdjs.A3Code.GD3Objects2.length = 0;
gdjs.A3Code.GD4Objects1.length = 0;
gdjs.A3Code.GD4Objects2.length = 0;
gdjs.A3Code.GDareaObjects1.length = 0;
gdjs.A3Code.GDareaObjects2.length = 0;

gdjs.A3Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['A3Code'] = gdjs.A3Code;
