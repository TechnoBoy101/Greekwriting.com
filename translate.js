/* =============================================================

   ============================================================= */










/* ********************************************************************************************
   * Global Variables
   *
   *
   * 
   * 
   *
   * ******************************************************************************************** */

var startString = "";
var workingString = "";
var finishString = "";
var finishCursorStart = 0;
var finishCursorEnd = 0;
var currentCursor = 0;






/* ********************************************************************************************
   * insertAtCursor (object)
   *
   *
   * 
   * 
   * Much thanks to ???? (http://www.????) for getting me started on this function.
   *
   * ******************************************************************************************** */

function convertStr(control, event) {

    var key;
    if (window.event) {
    // for IE
        key = event.keyCode; 
    } else if (event.which) {
    // for Mozilla
        key = event.which; 
    }
    
    if ( (key != 37) && (key != 38) && (key != 39) && (key != 40)  ) {
        // --------------- get cursor info and starting value
        startString = control.value;
        while (startString.indexOf ("(#$-undo-not-available-$#)", "") > -1) {
            startString = startString.replace("(#$-undo-not-available-$#)", "");
        }
        finishString = "";
        var scrollTop = control.scrollTop;  
    
        //IE support
        if (document.selection) {
            sel = document.selection.createRange();
            textSelected = sel.text;
            key = "(#$-undo-not-available-$#)";
            lenSelected = sel.text.length;
            sel.text = key;
            finishCursorStart = control.value.indexOf(key);
            finishCursorEnd = finishCursorStart + lenSelected;
        //MOZILLA/NETSCAPE support
        } else if (control.selectionStart || control.selectionStart == '0') {
            finishCursorStart = control.selectionStart;
            finishCursorEnd = control.selectionEnd;
        }
    
        // --------------- break apart the greek characters in the starting value
        breakApartGreekCharacters(control);
        // --------------- combine the greek characters in the starting value
        combineGreekCharacters(control);

        // --------------- insert finishing value 
        control.value = finishString;
        //IE support
        if (document.selection) {
            stringBeforeCursor = (finishString.substring(0, finishCursorStart));
            numberOfHardReturnsBefore = 0     
            while (stringBeforeCursor.indexOf("\r\n") > -1) {
                numberOfHardReturnsBefore = numberOfHardReturnsBefore + 1;
                stringBeforeCursor = stringBeforeCursor.replace("\r\n", "#");
            }
            sel.moveStart("character", finishCursorStart - numberOfHardReturnsBefore);

            stringAfterCursor = (finishString.substring(finishCursorEnd, finishString.length));
            numberOfHardReturnsAfter = 0;
            while (stringAfterCursor.indexOf("\r\n") > -1) {
                numberOfHardReturnsAfter = numberOfHardReturnsAfter + 1;
                stringAfterCursor = stringAfterCursor.replace("\r\n", "#");
            }
            //if (stringAfterCursor.indexOf("#") == 0 && finishCursorStart != finishCursorEnd) {numberOfHardReturnsAfter = numberOfHardReturnsAfter + 1;};
            sel.moveEnd("character", ( finishCursorEnd - (finishString.length) + numberOfHardReturnsAfter) );
    
            sel.select();
        
        //MOZILLA/NETSCAPE support
        } else if (control.selectionStart || control.selectionStart == '0') {
            control.selectionStart = finishCursorStart;
            control.selectionEnd = finishCursorEnd;
            control.scrollTop = scrollTop;
        }
    }
return;
}








/* ********************************************************************************************
   * convertCharToggle (object, boolean, event)
   *
   * 
   * 
   * 
   * 
   * ******************************************************************************************** */
   
function convertCharToggle(control, toggle, event) {

    if (toggle == true) {
        var key;
        if (window.event) {
        // for IE
        key = event.keyCode; 
        } else if (event.which) {
        // for Mozilla
            key = event.which; 
        }
        typeLetter = true;

        if ( event.ctrlKey || event.metaKey ) {
        	return;
        } else {
            if ( key == 38 ) { insertAtCursor(control, '`'); typeLetter = false; } // & -> \
            if ( key == 33 ) { insertAtCursor(control, 'Íº'); typeLetter = false; } // ! -> |
            if ( key == 40 ) { insertAtCursor(control, 'á¿¾'); typeLetter = false; }
            if ( key == 41 ) { insertAtCursor(control, 'á¾¿'); typeLetter = false; }
            if ( key == 43 ) { insertAtCursor(control, 'Â¨'); typeLetter = false; }
            if ( key == 47 ) { insertAtCursor(control, 'Â´'); typeLetter = false; }
            if ( key == 58 ) { insertAtCursor(control, 'Â·'); typeLetter = false; }            
            if ( key == 59 ) { insertAtCursor(control, 'Â·'); typeLetter = false; }            
            if ( key == 61 ) { insertAtCursor(control, 'á¿€'); typeLetter = false; }    
            if ( key == 63 ) { insertAtCursor(control, ';'); typeLetter = false; }
            if ( key == 64 ) { insertAtCursor(control, 'Ì£'); typeLetter = false; }                    
            if ( key == 65 ) { insertAtCursor(control, 'Î‘'); typeLetter = false; }
            if ( key == 66 ) { insertAtCursor(control, 'Î’'); typeLetter = false; }    
            if ( key == 67 ) { insertAtCursor(control, 'Îž'); typeLetter = false; }        
            if ( key == 68 ) { insertAtCursor(control, 'Î”'); typeLetter = false; }            
            if ( key == 69 ) { insertAtCursor(control, 'Î•'); typeLetter = false; }
            if ( key == 70 ) { insertAtCursor(control, 'Î¦'); typeLetter = false; }            
            if ( key == 71 ) { insertAtCursor(control, 'Î“'); typeLetter = false; }                
            if ( key == 72 ) { insertAtCursor(control, 'Î—'); typeLetter = false; }                    
            if ( key == 73 ) { insertAtCursor(control, 'Î™'); typeLetter = false; }        
            if ( key == 74 ) { insertAtCursor(control, 'Î£'); typeLetter = false; }            
            if ( key == 75 ) { insertAtCursor(control, 'Îš'); typeLetter = false; }                
            if ( key == 76 ) { insertAtCursor(control, 'Î›'); typeLetter = false; }                    
            if ( key == 77 ) { insertAtCursor(control, 'Îœ'); typeLetter = false; }                        
            if ( key == 78 ) { insertAtCursor(control, 'Î'); typeLetter = false; }                            
            if ( key == 79 ) { insertAtCursor(control, 'ÎŸ'); typeLetter = false; }    
            if ( key == 80 ) { insertAtCursor(control, 'Î '); typeLetter = false; }        
            if ( key == 81 ) { insertAtCursor(control, 'Î˜'); typeLetter = false; }            
            if ( key == 82 ) { insertAtCursor(control, 'Î¡'); typeLetter = false; }    
            if ( key == 83 ) { insertAtCursor(control, 'Î£'); typeLetter = false; }        
            if ( key == 84 ) { insertAtCursor(control, 'Î¤'); typeLetter = false; }            
            if ( key == 85 ) { insertAtCursor(control, 'Î¥'); typeLetter = false; }
            if ( key == 86 ) { insertAtCursor(control, 'Ïœ'); typeLetter = false; }    
            if ( key == 87 ) { insertAtCursor(control, 'Î©'); typeLetter = false; }        
            if ( key == 88 ) { insertAtCursor(control, 'Î§'); typeLetter = false; }            
            if ( key == 89 ) { insertAtCursor(control, 'Î¨'); typeLetter = false; }    
            if ( key == 90 ) { insertAtCursor(control, 'Î–'); typeLetter = false; }        
            if ( key == 92 ) { insertAtCursor(control, '`'); typeLetter = false; }
            if ( key == 97 ) { insertAtCursor(control, 'Î±'); typeLetter = false; }
            if ( key == 98 ) { insertAtCursor(control, 'Î²'); typeLetter = false; }    
            if ( key == 99 ) { insertAtCursor(control, 'Î¾'); typeLetter = false; }
            if ( key == 100 ) { insertAtCursor(control, 'Î´'); typeLetter = false; }            
            if ( key == 101 ) { insertAtCursor(control, 'Îµ'); typeLetter = false; }        
            if ( key == 102 ) { insertAtCursor(control, 'Ï†'); typeLetter = false; }            
            if ( key == 103 ) { insertAtCursor(control, 'Î³'); typeLetter = false; }                
            if ( key == 104 ) { insertAtCursor(control, 'Î·'); typeLetter = false; }                    
            if ( key == 105 ) { insertAtCursor(control, 'Î¹'); typeLetter = false; }            
            if ( key == 106 ) { insertAtCursor(control, 'Ï‚'); typeLetter = false; }
            if ( key == 107 ) { insertAtCursor(control, 'Îº'); typeLetter = false; }    
            if ( key == 108 ) { insertAtCursor(control, 'Î»'); typeLetter = false; }        
            if ( key == 109 ) { insertAtCursor(control, 'Î¼'); typeLetter = false; }            
            if ( key == 110 ) { insertAtCursor(control, 'Î½'); typeLetter = false; }                
            if ( key == 111 ) { insertAtCursor(control, 'Î¿'); typeLetter = false; }            
            if ( key == 112 ) { insertAtCursor(control, 'Ï€'); typeLetter = false; }                
            if ( key == 113 ) { insertAtCursor(control, 'Î¸'); typeLetter = false; }                        
            if ( key == 114 ) { insertAtCursor(control, 'Ï'); typeLetter = false; }                    
            if ( key == 115 ) { insertAtCursor(control, 'Ïƒ'); typeLetter = false; }    
            if ( key == 116 ) { insertAtCursor(control, 'Ï„'); typeLetter = false; }        
            if ( key == 117 ) { insertAtCursor(control, 'Ï…'); typeLetter = false;}
            if ( key == 118 ) { insertAtCursor(control, 'Ï'); typeLetter = false;}    
            if ( key == 119 ) { insertAtCursor(control, 'Ï‰'); typeLetter = false;}        
            if ( key == 120 ) { insertAtCursor(control, 'Ï‡'); typeLetter = false; }
            if ( key == 121 ) { insertAtCursor(control, 'Ïˆ'); typeLetter = false; }    
            if ( key == 122 ) { insertAtCursor(control, 'Î¶'); typeLetter = false; }        
            if ( key == 124 ) { insertAtCursor(control, 'Íº'); typeLetter = false; }
            // add ! for iota
            // add & for \
            return typeLetter;
        }
    }
}






/* ********************************************************************************************
   * insertAtCursor (object)
   * ******************************************************************************************** */
   
function insertAtCursor(myField, myValue) {
  //IE support
  if (document.selection) {
    myField.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
  }

  //MOZILLA/NETSCAPE support
  else if (myField.selectionStart || myField.selectionStart == '0') {
    var startPos = myField.selectionStart;
    var endPos = myField.selectionEnd;
    var cursorPos = endPos;
    var scrollTop = myField.scrollTop;    

    myField.value = myField.value.substring(0, startPos) + myValue + myField.value.substring(endPos, myField.value.length);
    cursorPos = startPos + myValue.length;

    myField.focus();
    myField.selectionStart = cursorPos;
    myField.selectionEnd = cursorPos;
    myField.scrollTop = scrollTop;
    
  } else {
    myField.value += myValue;
  }
}





/* ********************************************************************************************
   * combineGreekCharacters (object)
   *
   *
   * 
   * 
   * 
   * ******************************************************************************************** */
   
function breakApartGreekCharacters(control) {

    currentCursor = 0;
    startString = startString.replace(/`/,"`");
    while (startString != "") {

        workingString = "";
        removeOne();
        
        if ( workingString == "Ï‚" ) { workingString = "Ïƒ"; }
        if ( workingString == "Î¬" ) { workingString = "Î±Â´"; }
        if ( workingString == "á¼" ) { workingString = "Î±á¿¾"; }
        if ( workingString == "á¼€" ) { workingString = "Î±á¾¿"; }
        if ( workingString == "á¾¶" ) { workingString = "Î±á¿€"; }
        if ( workingString == "á¾³" ) { workingString = "Î±Íº"; }
        if ( workingString == "á¼„" ) { workingString = "Î±á¾¿Â´"; }
        if ( workingString == "á¾´" ) { workingString = "Î±Â´Íº"; }
        if ( workingString == "á¾€" ) { workingString = "Î±á¾¿Íº"; }
        if ( workingString == "á¾" ) { workingString = "Î±á¿¾Íº"; }
        if ( workingString == "á¾·" ) { workingString = "Î±á¿€Íº"; }
        if ( workingString == "á¾„" ) { workingString = "Î±á¾¿Â´Íº"; }
        if ( workingString == "á¾‚" ) { workingString = "Î±á¾¿`Íº"; }
        if ( workingString == "á¼‚" ) { workingString = "Î±á¾¿`"; }
        if ( workingString == "á¾ƒ" ) { workingString = "Î±á¿¾`Íº"; }
        if ( workingString == "á¼ƒ" ) { workingString = "Î±á¿¾`"; }
        if ( workingString == "á¾²" ) { workingString = "Î±`Íº"; }
        if ( workingString == "á½°" ) { workingString = "Î±`"; }
        if ( workingString == "á¾…" ) { workingString = "Î±á¿¾Â´Íº"; }
        if ( workingString == "á¼…" ) { workingString = "Î±á¿¾Â´"; }
        if ( workingString == "á¼‡" ) { workingString = "Î±á¿¾á¿€"; }
        if ( workingString == "á¾‡" ) { workingString = "Î±á¿¾á¿€Íº"; }
        if ( workingString == "á¾†" ) { workingString = "Î±á¾¿á¿€Íº"; }
        if ( workingString == "á¼†" ) { workingString = "Î±á¾¿á¿€"; }
        if ( workingString == "á¾¼" ) { workingString = "Î‘Íº"; }
        if ( workingString == "á¼‰" ) { workingString = "Î‘á¿¾"; }
        if ( workingString == "á¾‰" ) { workingString = "Î‘á¿¾Íº"; }
        if ( workingString == "á¼ˆ" ) { workingString = "Î‘á¾¿"; }
        if ( workingString == "á¾ˆ" ) { workingString = "Î‘á¾¿Íº"; }
        if ( workingString == "á¾" ) { workingString = "Î‘á¿¾á¿€Íº"; }
        if ( workingString == "á¼" ) { workingString = "Î‘á¿¾á¿€"; }
        if ( workingString == "á¾Ž" ) { workingString = "Î‘á¾¿á¿€Íº"; }
        if ( workingString == "á¼Ž" ) { workingString = "Î‘á¾¿á¿€"; }
        if ( workingString == "á¾º" ) { workingString = "Î‘`"; }
        if ( workingString == "á¼‹" ) { workingString = "Î‘á¿¾`"; }
        if ( workingString == "á¾‹" ) { workingString = "Î‘á¿¾`Íº"; }
        if ( workingString == "á¼Š" ) { workingString = "Î‘á¾¿`"; }
        if ( workingString == "á¾Š" ) { workingString = "Î‘á¾¿`Íº"; }
        if ( workingString == "Î†" ) { workingString = "Î‘Â´"; }
        if ( workingString == "á¼" ) { workingString = "Î‘á¿¾Â´"; }
        if ( workingString == "á¾" ) { workingString = "Î‘á¿¾Â´Íº"; }
        if ( workingString == "á¼Œ" ) { workingString = "Î‘á¾¿Â´"; }
        if ( workingString == "á¾Œ" ) { workingString = "Î‘á¾¿Â´Íº"; }   
        
        if ( workingString == "Î®" ) { workingString = "Î·Â´"; }
        if ( workingString == "á¼¡" ) { workingString = "Î·á¿¾"; }
        if ( workingString == "á¼ " ) { workingString = "Î·á¾¿"; }
        if ( workingString == "á¿†" ) { workingString = "Î·á¿€"; }
        if ( workingString == "á¿ƒ" ) { workingString = "Î·Íº"; }
        if ( workingString == "á¼¤" ) { workingString = "Î·á¾¿Â´"; }
        if ( workingString == "á¿„" ) { workingString = "Î·Â´Íº"; }
        if ( workingString == "á¾" ) { workingString = "Î·á¾¿Íº"; }
        if ( workingString == "á¾‘" ) { workingString = "Î·á¿¾Íº"; }
        if ( workingString == "á¿‡" ) { workingString = "Î·á¿€Íº"; }
        if ( workingString == "á¾”" ) { workingString = "Î·á¾¿Â´Íº"; }
        if ( workingString == "á¾’" ) { workingString = "Î·á¾¿`Íº"; }
        if ( workingString == "á¼¢" ) { workingString = "Î·á¾¿`"; }
        if ( workingString == "á¾“" ) { workingString = "Î·á¿¾`Íº"; }
        if ( workingString == "á¼£" ) { workingString = "Î·á¿¾`"; }
        if ( workingString == "á¿‚" ) { workingString = "Î·`Íº"; }
        if ( workingString == "á½´" ) { workingString = "Î·`"; }
        if ( workingString == "á¾•" ) { workingString = "Î·á¿¾Â´Íº"; }
        if ( workingString == "á¼¥" ) { workingString = "Î·á¿¾Â´"; }
        if ( workingString == "á¼§" ) { workingString = "Î·á¿¾á¿€"; }
        if ( workingString == "á¾—" ) { workingString = "Î·á¿¾á¿€Íº"; }
        if ( workingString == "á¾–" ) { workingString = "Î·á¾¿á¿€Íº"; }
        if ( workingString == "á¼¦" ) { workingString = "Î·á¾¿á¿€"; }
        if ( workingString == "á¿Œ" ) { workingString = "Î—Íº"; }
        if ( workingString == "á¼©" ) { workingString = "Î—á¿¾"; }
        if ( workingString == "á¾™" ) { workingString = "Î—á¿¾Íº"; }
        if ( workingString == "á¼¨" ) { workingString = "Î—á¾¿"; }
        if ( workingString == "á¾˜" ) { workingString = "Î—á¾¿Íº"; }
        if ( workingString == "á¾Ÿ" ) { workingString = "Î—á¿¾á¿€Íº"; }
        if ( workingString == "á¼¯" ) { workingString = "Î—á¿¾á¿€"; }
        if ( workingString == "á¾ž" ) { workingString = "Î—á¾¿á¿€Íº"; }
        if ( workingString == "á¼®" ) { workingString = "Î—á¾¿á¿€"; }
        if ( workingString == "á¿Š" ) { workingString = "Î—`"; }
        if ( workingString == "á¼«" ) { workingString = "Î—á¿¾`"; }
        if ( workingString == "á¾›" ) { workingString = "Î—á¿¾`Íº"; }
        if ( workingString == "á¼ª" ) { workingString = "Î—á¾¿`"; }
        if ( workingString == "á¾š" ) { workingString = "Î—á¾¿`Íº"; }
        if ( workingString == "Î‰" ) { workingString = "Î—Â´"; }
        if ( workingString == "á¼­" ) { workingString = "Î—á¿¾Â´"; }
        if ( workingString == "á¾" ) { workingString = "Î—á¿¾Â´Íº"; }
        if ( workingString == "á¼¬" ) { workingString = "Î—á¾¿Â´"; }
        if ( workingString == "á¾œ" ) { workingString = "Î—á¾¿Â´Íº"; } 
        
        if ( workingString == "ÏŽ" ) { workingString = "Ï‰Â´"; }
        if ( workingString == "á½¡" ) { workingString = "Ï‰á¿¾"; }
        if ( workingString == "á½ " ) { workingString = "Ï‰á¾¿"; }
        if ( workingString == "á¿¶" ) { workingString = "Ï‰á¿€"; }
        if ( workingString == "á¿³" ) { workingString = "Ï‰Íº"; }
        if ( workingString == "á½¤" ) { workingString = "Ï‰á¾¿Â´"; }
        if ( workingString == "á¿´" ) { workingString = "Ï‰Â´Íº"; }
        if ( workingString == "á¾ " ) { workingString = "Ï‰á¾¿Íº"; }
        if ( workingString == "á¾¡" ) { workingString = "Ï‰á¿¾Íº"; }
        if ( workingString == "á¿·" ) { workingString = "Ï‰á¿€Íº"; }
        if ( workingString == "á¾¤" ) { workingString = "Ï‰á¾¿Â´Íº"; }
        if ( workingString == "á¾¢" ) { workingString = "Ï‰á¾¿`Íº"; }
        if ( workingString == "á½¢" ) { workingString = "Ï‰á¾¿`"; }
        if ( workingString == "á¾£" ) { workingString = "Ï‰á¿¾`Íº"; }
        if ( workingString == "á½£" ) { workingString = "Ï‰á¿¾`"; }
        if ( workingString == "á¿²" ) { workingString = "Ï‰`Íº"; }
        if ( workingString == "á½¼" ) { workingString = "Ï‰`"; }
        if ( workingString == "á¾¥" ) { workingString = "Ï‰á¿¾Â´Íº"; }
        if ( workingString == "á½¥" ) { workingString = "Ï‰á¿¾Â´"; }
        if ( workingString == "á½§" ) { workingString = "Ï‰á¿¾á¿€"; }
        if ( workingString == "á¾§" ) { workingString = "Ï‰á¿¾á¿€Íº"; }
        if ( workingString == "á¾¦" ) { workingString = "Ï‰á¾¿á¿€Íº"; }
        if ( workingString == "á½¦" ) { workingString = "Ï‰á¾¿á¿€"; }
        if ( workingString == "á¿¼" ) { workingString = "Î©Íº"; }
        if ( workingString == "á½©" ) { workingString = "Î©á¿¾"; }
        if ( workingString == "á¾©" ) { workingString = "Î©á¿¾Íº"; }
        if ( workingString == "á½¨" ) { workingString = "Î©á¾¿"; }
        if ( workingString == "á¾¨" ) { workingString = "Î©á¾¿Íº"; }
        if ( workingString == "á¾¯" ) { workingString = "Î©á¿¾á¿€Íº"; }
        if ( workingString == "á½¯" ) { workingString = "Î©á¿¾á¿€"; }
        if ( workingString == "á¾®" ) { workingString = "Î©á¾¿á¿€Íº"; }
        if ( workingString == "á½®" ) { workingString = "Î©á¾¿á¿€"; }
        if ( workingString == "á¿º" ) { workingString = "Î©`"; }
        if ( workingString == "á½«" ) { workingString = "Î©á¿¾`"; }
        if ( workingString == "á¾«" ) { workingString = "Î©á¿¾`Íº"; }
        if ( workingString == "á½ª" ) { workingString = "Î©á¾¿`"; }
        if ( workingString == "á¾ª" ) { workingString = "Î©á¾¿`Íº"; }
        if ( workingString == "Î" ) { workingString = "Î©Â´"; }
        if ( workingString == "á½­" ) { workingString = "Î©á¿¾Â´"; }
        if ( workingString == "á¾­" ) { workingString = "Î©á¿¾Â´Íº"; }
        if ( workingString == "á½¬" ) { workingString = "Î©á¾¿Â´"; }
        if ( workingString == "á¾¬" ) { workingString = "Î©á¾¿Â´Íº"; }          

        if ( workingString == "Î­" ) { workingString = "ÎµÂ´"; }
        if ( workingString == "á½²" ) { workingString = "Îµ`"; }        
        if ( workingString == "á¼" ) { workingString = "Îµá¾¿"; }
        if ( workingString == "á¼‘" ) { workingString = "Îµá¿¾"; }        
        if ( workingString == "á¼”" ) { workingString = "Îµá¾¿Â´"; }        
        if ( workingString == "á¼“" ) { workingString = "Îµá¿¾`"; }
        if ( workingString == "Îˆ" ) { workingString = "Î•Â´"; }
        if ( workingString == "á¿ˆ" ) { workingString = "Î•`"; }        
        if ( workingString == "á¼˜" ) { workingString = "Î•á¾¿"; }
        if ( workingString == "á¼™" ) { workingString = "Î•á¿¾"; }        
        if ( workingString == "á¼œ" ) { workingString = "Î•á¾¿Â´"; }        
        if ( workingString == "á¼" ) { workingString = "Î•á¿¾Â´"; }  
        
        if ( workingString == "Î¯" ) { workingString = "Î¹Â´"; }
        if ( workingString == "á¼°" ) { workingString = "Î¹á¾¿"; }
        if ( workingString == "á¿–" ) { workingString = "Î¹á¿€"; }
        if ( workingString == "á¼±" ) { workingString = "Î¹á¿¾"; }
        if ( workingString == "á¼´" ) { workingString = "Î¹á¾¿Â´"; }
        if ( workingString == "ÏŠ" ) { workingString = "Î¹Â¨"; }
        if ( workingString == "Î" ) { workingString = "Î¹Â´Â¨"; }
        if ( workingString == "á¼²" ) { workingString = "Î¹á¾¿`"; }
        if ( workingString == "á¼³" ) { workingString = "Î¹á¿¾`"; }
        if ( workingString == "á¿’" ) { workingString = "Î¹`Â¨"; }
        if ( workingString == "á½¶" ) { workingString = "Î¹`"; }
        if ( workingString == "á¼µ" ) { workingString = "Î¹á¿¾Â´"; }
        if ( workingString == "á¿—" ) { workingString = "Î¹á¿€Â¨"; }
        if ( workingString == "á¼·" ) { workingString = "Î¹á¿¾á¿€"; }
        if ( workingString == "á¼¶" ) { workingString = "Î¹á¾¿á¿€"; }
        if ( workingString == "Îª" ) { workingString = "Î™Â¨"; }
        if ( workingString == "á¼¹" ) { workingString = "Î™á¿¾"; }
        if ( workingString == "á¼¿" ) { workingString = "Î™á¿¾á¿€"; }
        if ( workingString == "á¿š" ) { workingString = "Î™`"; }
        if ( workingString == "á¼»" ) { workingString = "Î™á¿¾`"; }
        if ( workingString == "ÎŠ" ) { workingString = "Î™Â´"; }
        if ( workingString == "á¼½" ) { workingString = "Î™á¿¾Â´"; }
        if ( workingString == "á¼¸" ) { workingString = "Î™á¾¿"; }
        if ( workingString == "á¼¾" ) { workingString = "Î™á¾¿á¿€"; }
        if ( workingString == "á¼º" ) { workingString = "Î™á¾¿`"; }
        if ( workingString == "á¼¼" ) { workingString = "Î™á¾¿Â´"; }        

        if ( workingString == "ÏŒ" ) { workingString = "Î¿Â´"; }
        if ( workingString == "á½¸" ) { workingString = "Î¿`"; }        
        if ( workingString == "á½€" ) { workingString = "Î¿á¾¿"; }
        if ( workingString == "á½" ) { workingString = "Î¿á¿¾"; }        
        if ( workingString == "á½ƒ" ) { workingString = "Î¿á¿¾`"; }        
        if ( workingString == "á½…" ) { workingString = "Î¿á¿¾Â´"; }
        if ( workingString == "ÎŒ" ) { workingString = "ÎŸÂ´"; }
        if ( workingString == "á¿¸" ) { workingString = "ÎŸ`"; }        
        if ( workingString == "á½ˆ" ) { workingString = "ÎŸá¾¿"; }
        if ( workingString == "á½‰" ) { workingString = "ÎŸá¿¾"; }        
        if ( workingString == "á½Œ" ) { workingString = "ÎŸá¾¿Â´"; }        
        if ( workingString == "á½" ) { workingString = "ÎŸá¿¾Â´"; }

        if ( workingString == "Ï" ) { workingString = "Ï…Â´"; }
        if ( workingString == "á½" ) { workingString = "Ï…á¾¿"; }
        if ( workingString == "á¿¦" ) { workingString = "Ï…á¿€"; }
        if ( workingString == "á½‘" ) { workingString = "Ï…á¿¾"; }
        if ( workingString == "á½”" ) { workingString = "Ï…á¾¿Â´"; }
        if ( workingString == "Ï‹" ) { workingString = "Ï…Â¨"; }
        if ( workingString == "Î°" ) { workingString = "Ï…Â´Â¨"; }
        if ( workingString == "á½’" ) { workingString = "Ï…á¾¿`"; }
        if ( workingString == "á½“" ) { workingString = "Ï…á¿¾`"; }
        if ( workingString == "á¿¢" ) { workingString = "Ï…`Â¨"; }
        if ( workingString == "á½º" ) { workingString = "Ï…`"; }
        if ( workingString == "á½•" ) { workingString = "Ï…á¿¾Â´"; }
        if ( workingString == "á¿§" ) { workingString = "Ï…á¿€Â¨"; }
        if ( workingString == "á½—" ) { workingString = "Ï…á¿¾á¿€"; }
        if ( workingString == "á½–" ) { workingString = "Ï…á¾¿á¿€"; }
        if ( workingString == "Î«" ) { workingString = "Î¥Â¨"; }
        if ( workingString == "á½™" ) { workingString = "Î¥á¿¾"; }
        if ( workingString == "á½Ÿ" ) { workingString = "Î¥á¿¾á¿€"; }
        if ( workingString == "á¿ª" ) { workingString = "Î¥`"; }
        if ( workingString == "á½›" ) { workingString = "Î¥á¿¾`"; }
        if ( workingString == "ÎŽ" ) { workingString = "Î¥Â´"; }
        if ( workingString == "á½" ) { workingString = "Î¥á¿¾Â´"; }

        if ( workingString == "á¿¬" ) { workingString = "Î¡á¿¾"; }
        if ( workingString == "á¿¥" ) { workingString = "Ïá¿¾"; }        

        if ( currentCursor <= finishCursorStart ) { finishCursorStart = finishCursorStart + (workingString.length - 1); }
        if ( currentCursor <= finishCursorEnd ) { finishCursorEnd = finishCursorEnd + (workingString.length - 1); }
        currentCursor = currentCursor + (workingString.length - 1);

        finishString = finishString + workingString;    
    }
    return;
}






/* ********************************************************************************************
   * combineGreekCharacters (object)
   *
   *
   * 
   * 
   * 
   * ******************************************************************************************** */

function combineGreekCharacters(control) {

    var COMBINABLE = "Î‘Î±Î—Î·Î©Ï‰Î•ÎµÎ™Î¹ÎŸÎ¿Î¡ÏÎ¥Ï…";
    var VOWELS = "Î‘Î±Î—Î·Î©Ï‰Î•ÎµÎ™Î¹ÎŸÎ¿Î¥Ï…";
    var CAPITALS = "Î‘Î—Î©Î•Î™ÎŸÎ¡Î¥";
    var LONG_VOWELS = "Î‘Î±Î—Î·Î©Ï‰Î™Î¹Î¥Ï…";
    var ROUGH_BREATHING = "Î‘Î±Î—Î·Î©Ï‰Î•ÎµÎ™Î¹ÎŸÎ¿Î¡ÏÎ¥Ï…";
    var SMOOTH_BREATHING = "Î‘Î±Î—Î·Î©Ï‰Î•ÎµÎ™Î¹ÎŸÎ¿Ï…";
    var IOTA = "Î‘Î±Î—Î·Î©Ï‰";
    var DIERESIS = "Î¥Ï…Î™Î¹";
    var TERMINAL = "\n\r,;. :Â·;"
    
    startString = finishString;
    finishString = "";
    currentCursor = 0;
    var keepGoing = true;

    while (startString != "") {

        keepGoing = true;
        workingString = "";
        removeOne();

        if (startString != "") {        
        // there's at least one more character in the string
        
            if (COMBINABLE.indexOf(workingString) > -1 ) {
            // the current character could be combined with other characters

                while ( (keepGoing == true) && (startString != "") ) {

                    if ( (startString.charAt(0) == "Â´") || (startString.charAt(0) == "`") ) {
                    // the next character is / or \

                        if ( (VOWELS.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('Â´') == -1)  && (workingString.indexOf('`') == -1) && (workingString.indexOf('á¿€') == -1) ) {
                        // the current string starts with a vowel and it does not have any of the three accents (/, \, or =)

                            if ( (CAPITALS.indexOf(workingString.charAt(0)) > -1) ) {
                            // the current string starts with a capital letter

                                if ( (DIERESIS.indexOf(workingString.charAt(0)) > -1) ) {
                                // the current string starts with a letter that receives a dieresis
	  
	      if (workingString.indexOf('Â¨') > -1) {
                                    // the current string contains a dieresis
	          keepGoing = false;
	      } else {
                                    // the current string does not contain a dieresis
	          removeOne();
	      }
	  } else {
                                    if (IOTA.indexOf(workingString.charAt(0)) > -1) {
                                    // the current string starts with a letter that receives an iota
	      
	          if (  (workingString.indexOf('Íº') > -1) && (workingString.indexOf('á¾¿') == -1)  && (workingString.indexOf('á¿¾') == -1)  ) {
	          // the current string contains an iota and no breathing
	              keepGoing = false;
	          } else {
	              removeOne();     
	          }
	      } else {
                                    // the current string starts with a letter that does not receive a dieresis or an iota		      
                                        removeOne();	      
	      }
	  }
                            } else {
                            // the current string does NOT start with a capital letter
                                removeOne();
                            }
                        } else {
                            keepGoing = false;
                        }
                    } else {
                        if ( (startString.charAt(0) == "á¿€") ) {
                        // the next character is =

                            if ( (LONG_VOWELS.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('Â´') == -1)  && (workingString.indexOf('`') == -1) && (workingString.indexOf('á¿€') == -1) ) {
                            // the current string starts with a long vowel and it does not have any of the three accents (/, \, or =)
                            
                                if ( (CAPITALS.indexOf(workingString.charAt(0)) > -1) ) {
                                // the current string starts with a capital letter
	  
                                     if (  (DIERESIS.indexOf(workingString.charAt(0)) > -1)  ) {
                                     // the current string starts with a letter that receives a dieresis

	           if (  (  (workingString.indexOf('á¾¿') > -1)  || (workingString.indexOf('á¿¾') > -1) || (startString.charAt(1) == 'á¾¿') || (startString.charAt(1) == 'á¿¾') )  && (workingString.indexOf('Â¨') == -1)  ) {
                                         // the current string contains a breathing mark (already or coming up next) and no dieresis

	               if (  (SMOOTH_BREATHING.indexOf(workingString.charAt(0)) == -1) ) {
	               // the current string starts with a letter that does not receive a smooth breathing		               
	               
	                   if (  ( (workingString.indexOf('á¿¾') > -1) || (startString.charAt(1) == 'á¿¾') )  ) {
    	                       removeOne();
	                   } else {
	                       keepGoing = false;	                                  
	                   }
	               } else {
	                   removeOne();		               
	               }
	           } else {
	               keepGoing = false;		           
	           }       
	       } else {
                                        if (  (IOTA.indexOf(workingString.charAt(0)) > -1)  ) {

                                            if (      (((workingString.indexOf('á¾¿') > -1)  || (workingString.indexOf('á¿¾') > -1) || (startString.charAt(1) == 'á¾¿') || (startString.charAt(1) == 'á¿¾')))     || ((( (workingString.indexOf('á¾¿') == -1)  && (workingString.indexOf('á¿¾') == -1) && (startString.charAt(1) == 'Íº') && (workingString.indexOf('Íº') == -1) && (  (startString.charAt(2) == 'á¾¿') || (startString.charAt(2) == 'á¿¾') ))))    ) {
                                            // the current string contains a breathing mark (already or coming up next) 
                                                removeOne();  	              
	              } else {
	                  keepGoing = false;		              
	              }
	          } else {
                                            keepGoing = false;
	          }
	       }
	  } else {
                                    removeOne();  
	  }
                            } else {
                                keepGoing = false;	                            
                            }
                        } else {
                        // the next character is not an accent mark
                        
                            if ( (startString.charAt(0) == "á¾¿") || (startString.charAt(0) == "á¿¾") ) {
                            // the next character is ) or (
                            
                                if (  (ROUGH_BREATHING.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('á¾¿') == -1)  && (workingString.indexOf('á¿¾') == -1) && (workingString.indexOf('Â¨') == -1)  ) {
                                // the current string starts with a letter that receives a rough breathing (vowels and rho) and has no breathing mark and has no dieresis
                                    if ( startString.charAt(0) == "á¿¾" ) {
                                    // the next character is (
                                        removeOne();
	      } else {
                                    // the next character is )
                                        if (  (SMOOTH_BREATHING.indexOf(workingString.charAt(0)) > -1)   ) {
                                        // the current string starts with a letter that receives a smooth breathing (same except for capital upsilon and capital rho)
                                            removeOne();                                        
	          } else {
                                            keepGoing = false;
	          }
                                    }
                                } else { 
                                    keepGoing = false;                    
                                }
                            } else {
                            // the next character is not an accent or a breathing mark

                                if ( (startString.charAt(0) == "Íº") || (startString.charAt(0) == "Â¨") ) {
                                // the next character is | or +
	  
                                    if ( startString.charAt(0) == "Íº" ) {
                                    // the next character is |
	      
	          if ( (IOTA.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('Íº') == -1)  ) {
	          // the current string starts with a letter that receives an iota and has no iota
	          
                                            if (CAPITALS.indexOf(workingString.charAt(0)) > -1)  {
                                            // the current string starts with a capital letter
	              
	                  if (  ( (workingString.indexOf('Â´') == -1)  && (workingString.indexOf('`') == -1) && (workingString.indexOf('á¿€') == -1) )   ||  ( (workingString.indexOf('á¾¿') > -1)  || (workingString.indexOf('á¿¾') > -1) || startString.charAt(1) == 'á¾¿' || startString.charAt(1) == 'á¿¾' )     ) {    
	                  // the current string either has no accent mark or it has a breathing mark (already or coming up)
	                  
	                      removeOne();
	                  } else {
	                  // the current string contains an accent mark without a breathing mark (already or coming up next)
	                  
	                      keepGoing = false;	                      
	                  }
	              } else {
	              // the current string starts with a non-capital letter
	                  removeOne();
	              }   
	          } else {
                                            keepGoing = false;  
	          }
	      } else  {
                                    // the next character is +
	      
	          if ( (DIERESIS.indexOf(workingString.charAt(0)) > -1) && (workingString.indexOf('Â¨') == -1) && (workingString.indexOf('á¾¿') == -1)  && (workingString.indexOf('á¿¾') == -1)  ) {
	          // the current strings starts with a letter that receives a dieresis and has no dieresis and has no breathing mark
	          
                                            if (CAPITALS.indexOf(workingString.charAt(0)) > -1) {
	              // the current string starts with a capital letter

  	                  if (  (workingString.indexOf('Â´') == -1)  && (workingString.indexOf('`') == -1) && (workingString.indexOf('á¿€') == -1)  ) {
                                                // the current string does not have any of the three accents (/, \, or =)
	                      removeOne();
	                  } else {
	                      keepGoing = false;
	                  }
	              } else {
	                  removeOne();
	              }
	          } else {
	              keepGoing = false;
	          }
	      }
	  } else {
	      keepGoing = false;
	  }
                            }
                        }
                    }     
                } // keep checking the next characters
       
                if (workingString.length > 1) { combineSingleCharacter(control); }

            } else {
            // this character cannot be combined with other characters

                if (workingString == 'Ïƒ' && TERMINAL.indexOf(startString.charAt(0)) > -1) {
                // this character is lowercase sigma and the next character 
                
                    workingString = 'Ï‚'; 
                } else {
	                if (workingString == 'Ïƒ' && startString.charAt(0) == "Ì£" && TERMINAL.indexOf(startString.charAt(1)) > -1) {
	                // this character is lowercase sigma and the next character 
	                	                workingString = 'Ï‚'; 
	                }
				}

            }
        } // don't do anything if this character was the end of the string
            
        finishString = finishString + workingString;
    }
    return;
}









/* ********************************************************************************************
   * combineSingleCharacter (object)
   *
   * This method receives a group of Latin characters in
   * beta code that BetaToUnicode has determined constitute
   * a single legitimate Unicode character; it returns the
   * Unicode character represented by that string of characters.
   * ******************************************************************************************** */

function combineSingleCharacter(control) {
    if (  (currentCursor - (workingString.length - 1) <= finishCursorStart) && (currentCursor >= finishCursorStart) ) {
    // the finish cursor is located at the end of any of the characters in the working string
        finishCursorStart = currentCursor - (workingString.length - 1);
    } else {
        if (currentCursor < finishCursorStart) {
        // the finish cursor is located after the end of any of the characters in the working string
            finishCursorStart = finishCursorStart - (workingString.length - 1);
        }
    }
    
    if (  (currentCursor - (workingString.length - 1) <= finishCursorEnd) && (currentCursor >= finishCursorEnd) ) {
    // the finish cursor is located at the end of any of the characters in the working string
        finishCursorEnd = currentCursor - (workingString.length - 1);
    } else {
        if (currentCursor < finishCursorEnd) {
        // the finish cursor is located after the end of any of the characters in the working string
            finishCursorEnd = finishCursorEnd - (workingString.length - 1);
        }
    }
	
    currentCursor = currentCursor - (workingString.length - 1);

    if (workingString.indexOf('Â´') != -1) {
    // if the string contains /
    
        if (workingString.indexOf('á¾¿') != -1) {
        // if the string contains )
                            
            if (workingString.indexOf('Íº') != -1) {
            // if the string contains |
                if (workingString.charAt(0) == "Î±") { workingString = "á¾„"; }            
                if (workingString.charAt(0) == "Î‘") { workingString = "á¾Œ"; }                            
                if (workingString.charAt(0) == "Î·") { workingString = "á¾”"; }            
                if (workingString.charAt(0) == "Î—") { workingString = "á¾œ"; } 
                if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¤"; }            
                if (workingString.charAt(0) == "Î©") { workingString = "á¾¬"; }                 
            } else {
                if (workingString.charAt(0) == "Î±") { workingString = "á¼„"; }
                if (workingString.charAt(0) == "Î‘") { workingString = "á¼Œ"; }   
                if (workingString.charAt(0) == "Î·") { workingString = "á¼¤"; }            
                if (workingString.charAt(0) == "Î—") { workingString = "á¼¬"; } 
                if (workingString.charAt(0) == "Ï‰") { workingString = "á½¤"; }            
                if (workingString.charAt(0) == "Î©") { workingString = "á½¬"; }                                 
                if (workingString.charAt(0) == "Îµ") { workingString = "á¼”"; }
                if (workingString.charAt(0) == "Î•") { workingString = "á¼œ"; }                
                if (workingString.charAt(0) == "Î¹") { workingString = "á¼´"; }
                if (workingString.charAt(0) == "Î™") { workingString = "á¼¼"; }                
                if (workingString.charAt(0) == "Î¿") { workingString = "á½„"; }
                if (workingString.charAt(0) == "ÎŸ") { workingString = "á½Œ"; }                                
                if (workingString.charAt(0) == "Ï…") { workingString = "á½”"; }                
            }
        } else {
            if (workingString.indexOf('á¿¾') != -1) {
            // if the string contains (

                if (workingString.indexOf('Íº') != -1) {
                // if the string contains |
                    if (workingString.charAt(0) == "Î±") { workingString = "á¾…"; }
                    if (workingString.charAt(0) == "Î‘") { workingString = "á¾"; } 
                    if (workingString.charAt(0) == "Î·") { workingString = "á¾•"; }            
                    if (workingString.charAt(0) == "Î—") { workingString = "á¾"; } 
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¥"; }            
                    if (workingString.charAt(0) == "Î©") { workingString = "á¾­"; }                     
                } else {
                    if (workingString.charAt(0) == "Î±") { workingString = "á¼…"; }
                    if (workingString.charAt(0) == "Î‘") { workingString = "á¼"; }
                    if (workingString.charAt(0) == "Î·") { workingString = "á¼¥"; }            
                    if (workingString.charAt(0) == "Î—") { workingString = "á¼­"; } 
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á½¥"; }            
                    if (workingString.charAt(0) == "Î©") { workingString = "á½­"; }                     
                    if (workingString.charAt(0) == "Îµ") { workingString = "á¼•"; }
                    if (workingString.charAt(0) == "Î•") { workingString = "á¼"; }                
                    if (workingString.charAt(0) == "Î¹") { workingString = "á¼µ"; }
                    if (workingString.charAt(0) == "Î™") { workingString = "á¼½"; }                    
                    if (workingString.charAt(0) == "Î¿") { workingString = "á½…"; }
                    if (workingString.charAt(0) == "ÎŸ") { workingString = "á½"; }                                    
                    if (workingString.charAt(0) == "Ï…") { workingString = "á½•"; }                    
                    if (workingString.charAt(0) == "Î¥") { workingString = "á½"; }                    
                }           
            } else {
            // if the string contains no breathing mark

                if (workingString.indexOf('Íº') != -1) {
                // if the string contains a |
                    if (workingString.charAt(0) == "Î±") { workingString = "á¾´"; }
                    if (workingString.charAt(0) == "Î·") { workingString = "á¿„"; }            
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á¿´"; }            
                } else {
                    if (workingString.indexOf('Â¨') != -1) {
                    // if the string contains contains +
                        if (workingString.charAt(0) == "Î¹") { workingString = "Î"; }                       
                        if (workingString.charAt(0) == "Ï…") { workingString = "Î°"; }                 
                    } else {
                    // if the string contains no | and no +
                        if (workingString.charAt(0) == "Î±") { workingString = "Î¬"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "Î†"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "Î®"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "Î‰"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "ÏŽ"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "Î"; }                         
                        if (workingString.charAt(0) == "Îµ") { workingString = "Î­"; }
                        if (workingString.charAt(0) == "Î•") { workingString = "Îˆ"; } 
                        if (workingString.charAt(0) == "Î¹") { workingString = "Î¯"; }
                        if (workingString.charAt(0) == "Î™") { workingString = "ÎŠ"; }                        
                        if (workingString.charAt(0) == "Î¿") { workingString = "ÏŒ"; }
                        if (workingString.charAt(0) == "ÎŸ") { workingString = "ÎŒ"; }                         
                        if (workingString.charAt(0) == "Ï…") { workingString = "Ï"; }                        
                        if (workingString.charAt(0) == "Î¥") { workingString = "ÎŽ"; }                                                
                    }                
                }                
            }
        }
	    
    } else {
    
        if (workingString.indexOf('`') != -1) {
        // if the string contains a \
        
            if (workingString.indexOf('á¾¿') != -1) {
            // if the string contains a )
            
                if (workingString.indexOf('Íº') != -1) {
                // if the string contains a |
                
                    if (workingString.charAt(0) == "Î±") { workingString = "á¾‚"; }
                    if (workingString.charAt(0) == "Î‘") { workingString = "á¾Š"; }    
                    if (workingString.charAt(0) == "Î·") { workingString = "á¾’"; }            
                    if (workingString.charAt(0) == "Î—") { workingString = "á¾š"; } 
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¢"; }            
                    if (workingString.charAt(0) == "Î©") { workingString = "á¾ª"; }                      	                
                } else {
	                
                    if (workingString.charAt(0) == "Î±") { workingString = "á¼‚"; }
                    if (workingString.charAt(0) == "Î‘") { workingString = "á¼Š"; }    
                    if (workingString.charAt(0) == "Î·") { workingString = "á¼¢"; }            
                    if (workingString.charAt(0) == "Î—") { workingString = "á¼ª"; } 
                    if (workingString.charAt(0) == "Ï‰") { workingString = "á½¢"; }            
                    if (workingString.charAt(0) == "Î©") { workingString = "á½ª"; }                      	                                    
                    if (workingString.charAt(0) == "Îµ") { workingString = "á¼’"; }
                    if (workingString.charAt(0) == "Î•") { workingString = "á¼š"; }   
                    if (workingString.charAt(0) == "Î¹") { workingString = "á¼²"; }
                    if (workingString.charAt(0) == "Î™") { workingString = "á¼º"; }                       
                    if (workingString.charAt(0) == "Î¿") { workingString = "á½‚"; }
                    if (workingString.charAt(0) == "ÎŸ") { workingString = "á½Š"; }                      
                    if (workingString.charAt(0) == "Ï…") { workingString = "á½’"; }
                }
            
            } else {
	            
                if (workingString.indexOf('á¿¾') != -1) {
                // if the string contains a (
	               
                    if (workingString.indexOf('Íº') != -1) {
                    // if the string contains a |                      
                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¾ƒ"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¾‹"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¾“"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¾›"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á¾£"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á¾«"; }                           
                    } else {
                    // if the strings contains no iota
	                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¼ƒ"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¼‹"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¼£"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¼«"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á½£"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á½«"; }                        
                        if (workingString.charAt(0) == "Îµ") { workingString = "á¼“"; }
                        if (workingString.charAt(0) == "Î•") { workingString = "á¼›"; }                
                        if (workingString.charAt(0) == "Î¹") { workingString = "á¼³"; }
                        if (workingString.charAt(0) == "Î™") { workingString = "á¼»"; }                        
                        if (workingString.charAt(0) == "Î¿") { workingString = "á½ƒ"; }
                        if (workingString.charAt(0) == "ÎŸ") { workingString = "á½‹"; }                              
                        if (workingString.charAt(0) == "Ï…") { workingString = "á½“"; }   
                        if (workingString.charAt(0) == "Î¥") { workingString = "á½›"; }   
                    }
                } else {
                // if the string contains no breathing mark

                    if (workingString.indexOf('Íº') != -1) {
                    // if the string contains |
                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¾²"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¿‚"; }            
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á¿²"; }            
                    } else {
                    
                        if (workingString.indexOf('Â¨') != -1) {
                        // if the string contains + 
                        
                            if (workingString.charAt(0) == "Î¹") { workingString = "á¿’"; }   
                            if (workingString.charAt(0) == "Ï…") { workingString = "á¿¢"; }

                        } else {
                        // if the string contains no | or + 
                        
                            if (workingString.charAt(0) == "Î±") { workingString = "á½°"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¾º"; }  
                            if (workingString.charAt(0) == "Î·") { workingString = "á½´"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¿Š"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á½¼"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á¿º"; }                             
                            if (workingString.charAt(0) == "Îµ") { workingString = "á½²"; }
                            if (workingString.charAt(0) == "Î•") { workingString = "á¿ˆ"; }  
                            if (workingString.charAt(0) == "Î¹") { workingString = "á½¶"; }
                            if (workingString.charAt(0) == "Î™") { workingString = "á¿š"; }                              
                            if (workingString.charAt(0) == "Î¿") { workingString = "á½¸"; }
                            if (workingString.charAt(0) == "ÎŸ") { workingString = "á¿¸"; }                                                          
                            if (workingString.charAt(0) == "Ï…") { workingString = "á½º"; }
                            if (workingString.charAt(0) == "Î¥") { workingString = "á¿ª"; }                            
                        }                    
                    }           
                }
            }  
        } else {
    
            if (workingString.indexOf('á¿€') != -1) {
            // if the string contains a =
            
                if (workingString.indexOf('á¾¿') != -1) {
                // if the string contains a )
                
                    if (workingString.indexOf('Íº') != -1) {
                    // if the string contains a |                      
                        if (workingString.charAt(0) == "Î±") { workingString = "á¾†"; }                
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¾Ž"; } 
                        if (workingString.charAt(0) == "Î·") { workingString = "á¾–"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¾ž"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¦"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á¾®"; }                                                     
                    } else {
                        if (workingString.charAt(0) == "Î±") { workingString = "á¼†"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¼Ž"; }                  
                        if (workingString.charAt(0) == "Î·") { workingString = "á¼¦"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¼®"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á½¦"; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á½®"; }                                                                             
                        if (workingString.charAt(0) == "Î¹") { workingString = "á¼¶"; }
                        if (workingString.charAt(0) == "Î™") { workingString = "á¼¾"; }                                          
                        if (workingString.charAt(0) == "Ï…") { workingString = "á½–"; }
                    }
                } else {
	                
                    if (workingString.indexOf('á¿¾') != -1) {
                    // if the string contains a (                  
	                
                        if (workingString.indexOf('Íº') != -1) {
                        // if the string contains a |                      

                            if (workingString.charAt(0) == "Î±") { workingString = "á¾‡"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¾"; }
                            if (workingString.charAt(0) == "Î·") { workingString = "á¾—"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¾Ÿ"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á¾§"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á¾¯"; }                             
                        } else {
                            if (workingString.charAt(0) == "Î±") { workingString = "á¼‡"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¼"; } 
                            if (workingString.charAt(0) == "Î·") { workingString = "á¼§"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¼¯"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á½§"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á½¯"; }                                                         
                            if (workingString.charAt(0) == "Î¹") { workingString = "á¼·"; }
                            if (workingString.charAt(0) == "Î™") { workingString = "á¼¿"; }                            
                            if (workingString.charAt(0) == "Ï…") { workingString = "á½—"; }                
                            if (workingString.charAt(0) == "Î¥") { workingString = "á½Ÿ"; }                                            
                        } 
                    } else {
                    // if the string contains no breathing marks
                    
                        if (workingString.indexOf('Íº') != -1) {
                        // if the string contains a |                      
                            if (workingString.charAt(0) == "Î±") { workingString = "á¾·"; }
                            if (workingString.charAt(0) == "Î·") { workingString = "á¿‡"; }            
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á¿·"; }                              
                        } else {
	                        
                            if (workingString.indexOf('Â¨') != -1) {
                            // if the string contains + 

                               if (workingString.charAt(0) == "Î¹") { workingString = "á¿—"; }
                               if (workingString.charAt(0) == "Ï…") { workingString = "á¿§"; }
                            } else {
                            // if the string contains no | or +                         
                                if (workingString.charAt(0) == "Î±") { workingString = "á¾¶"; }
                                if (workingString.charAt(0) == "Î·") { workingString = "á¿†"; }            
                                if (workingString.charAt(0) == "Ï‰") { workingString = "á¿¶"; }  	  
                                if (workingString.charAt(0) == "Î¹") { workingString = "á¿–"; }	  
                                if (workingString.charAt(0) == "Ï…") { workingString = "á¿¦"; }                
                            }
                        }                     
                    }                
                }
            } else {
            // if the string contains no accent marks
            
                if (workingString.indexOf('á¾¿') != -1) {
                // if the string contains )
            
                    if (workingString.indexOf('Íº') != -1) {
                    // if the string contains a |
                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¾€"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¾ˆ"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¾"; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¾˜"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á¾ "; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á¾¨"; }                          
                    } else {
                    // if the string contains no | and no +
                    
                        if (workingString.charAt(0) == "Î±") { workingString = "á¼€"; }
                        if (workingString.charAt(0) == "Î‘") { workingString = "á¼ˆ"; }
                        if (workingString.charAt(0) == "Î·") { workingString = "á¼ "; }            
                        if (workingString.charAt(0) == "Î—") { workingString = "á¼¨"; } 
                        if (workingString.charAt(0) == "Ï‰") { workingString = "á½ "; }            
                        if (workingString.charAt(0) == "Î©") { workingString = "á½¨"; }                           
                        if (workingString.charAt(0) == "Îµ") { workingString = "á¼"; }
                        if (workingString.charAt(0) == "Î•") { workingString = "á¼˜"; } 
                        if (workingString.charAt(0) == "Î¹") { workingString = "á¼°"; }
                        if (workingString.charAt(0) == "Î™") { workingString = "á¼¸"; }                        
                        if (workingString.charAt(0) == "Î¿") { workingString = "á½€"; }
                        if (workingString.charAt(0) == "ÎŸ") { workingString = "á½ˆ"; }                          
                        if (workingString.charAt(0) == "Ï…") { workingString = "á½"; }
                    }        
                } else {
                    if (workingString.indexOf('á¿¾') != -1) {
                    // if the string contains (
     
                        if (workingString.indexOf('Íº') != -1) {
                        // if the string contains a |                      
                        
                            if (workingString.charAt(0) == "Î±") { workingString = "á¾"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¾‰"; }   
                            if (workingString.charAt(0) == "Î·") { workingString = "á¾‘"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¾™"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á¾¡"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á¾©"; }                             
                        } else {
                        // if the string contains no iota                      
                        
                            if (workingString.charAt(0) == "Î±") { workingString = "á¼"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¼‰"; }
                            if (workingString.charAt(0) == "Î·") { workingString = "á¼¡"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¼©"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á½¡"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á½©"; }                              
                            if (workingString.charAt(0) == "Îµ") { workingString = "á¼‘"; }
                            if (workingString.charAt(0) == "Î•") { workingString = "á¼™"; } 
                            if (workingString.charAt(0) == "Î¹") { workingString = "á¼±"; }
                            if (workingString.charAt(0) == "Î™") { workingString = "á¼¹"; }                            
                            if (workingString.charAt(0) == "Î¿") { workingString = "á½"; }
                            if (workingString.charAt(0) == "ÎŸ") { workingString = "á½‰"; }               
                            if (workingString.charAt(0) == "Î¡") { workingString = "á¿¬"; }                                                        
                            if (workingString.charAt(0) == "Ï") { workingString = "á¿¥"; }                
                            if (workingString.charAt(0) == "Ï…") { workingString = "á½‘"; }                
                            if (workingString.charAt(0) == "Î¥") { workingString = "á½™"; }
                        }         
                    } else {
                    // if the string contains no breathing marks
                    
                        if (workingString.indexOf('Íº') != -1) {
                        // if the string contains an iota
                        
                            if (workingString.charAt(0) == "Î±") { workingString = "á¾³"; }
                            if (workingString.charAt(0) == "Î‘") { workingString = "á¾¼"; }  
                            if (workingString.charAt(0) == "Î·") { workingString = "á¿ƒ"; }            
                            if (workingString.charAt(0) == "Î—") { workingString = "á¿Œ"; } 
                            if (workingString.charAt(0) == "Ï‰") { workingString = "á¿³"; }            
                            if (workingString.charAt(0) == "Î©") { workingString = "á¿¼"; }                            
                        } else {
                            if (workingString.indexOf('Â¨') != -1) {
                            // if the string contains a dieresis

                                if (workingString.charAt(0) == "Î¹") { workingString = "ÏŠ"; }
                                if (workingString.charAt(0) == "Î™") { workingString = "Îª"; } 
                                if (workingString.charAt(0) == "Ï…") { workingString = "Ï‹"; }
                                if (workingString.charAt(0) == "Î¥") { workingString = "Î«"; }	  
	  
                            } // if there are no marks at all, then do nothing
                        }
                    }
                }
            }
        }
    }
    return;
}









/* ********************************************************************************************
   * removeOne ()
   *
   *
   * 
   * 
   * 
   * ******************************************************************************************** */

function removeOne() {
    workingString = workingString + startString.substr(0,1);
    startString = startString.substr(1, startString.length - 1);
    currentCursor = currentCursor + 1;
return;
}
