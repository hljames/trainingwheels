// processing block object
var blocks = {
    shapes: [
        "rect(x, y, w, h);", 
        "ellipse(x, y, w, h);", 
        "triangle(x1, y1, x2, y2, x3, y3);",
        "line(x1, y1, x2, y2);",
        "point(x, y);",
        "arc(x, y, w, h, start, stop);",
        "bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2);",
        "quad(x1, y1, x2, y2, x3, y3, x4, y4);",
    ],
    complexShapes: [
        "beginShape();",
        "endShape();",
        "vertex();",
        "curveVertex();",
        "bezierVertex();",
    ],
    colors: [
        "background(r, g, b);",
        "fill(r, g, b);",
        "noFill();",
        "stroke(r, b, b);",
        "strokeWeight(thickness);",
        "noStroke();",
        "color(r, g, b);",
        "blendColor(c1, c2, MODE);",
        "lerpColor(c1, c2, amount);"
    ],
    text: [
        "text(text, x, y);",
        "createFont(name, size)",
        "textFont(font, size);",
        "textSize(size);",
    ],
    transform: [
        "rotate(angle);",
        "translate(x, y);",
        "scale(amount);",
    ],
    environment: [
        "width;",
        "height",
        "draw = function() { };",
    ],
    mouse: [
        "mouseX",
        "mouseY",
        "pmouseX",
        "pmouseY",
        "mouseButton",
        "mouseIsPressed",
        "mouseClicked = function() { };",
        "mouseReleased = function () { };",
        "mouseMoved = function() { };",
        "mouseDragged = function() { };",
        "mouseOver = function() { };",
        "mouseOut = function() { };"
    ],
    keyboard: [
        "key",
        "keyCode",
        "keyIsPressed",
        "keyPressed = function() { };",
        "keyReleased = function() { };",
        "keyTyped = function() { };"
    ],
    math: [
        "random(low, high);",
        "dist(x1, y1, x2, y2);",
        "constrain(value, min, max);",
        "min(num1, num2);",
        "max(num1, num2);",
        "abs(num);",
        "log(num);",
        "pow(num, exponent);",
        "sq(num);",
        "sqrt(num);",
        "round(num);",
        "ceil(num);",
        "floor(num);",
        "PVector(x, y)"
    ],
    trigonometry: [
        "cos(degrees);",
        "sin(degrees);",
        "tan(degrees);",
    ],
    dateTime: [
        "day();",
        "month();",
        "year();",
        "hour();",
        "minute();",
        "second();",
        "millis()"
    ],
    debugging: [
        "debug(arg1, arg2)",
        "println(data);",
        "print(data);"
    ],
    javascript: [
        "var drawWinston = function() { };",
        "var array = [0,1,2,3,4,];",
        "if (m < 20) { };",
        "for (var i = 0; i < 8; i++) { };",
        "while (m < 250) { };",
        "function () { };",
        "var m = ;",
        "loop();"
    ]
},
    // give basic menu rect, ellipse, and fill
    basic = [blocks.shapes[0], blocks.shapes[1], blocks.colors[1]],
    // give more menu three columns
    more = {
        // rect, ellipse, triangle, line, text
        one: [
            blocks.shapes[0], 
            blocks.shapes[1], 
            blocks.shapes[2], 
            blocks.shapes[4],  
            blocks.text[0]
        ],
        // background, fill, noFill, stroke, strokeWeight, color
        two: [
            blocks.colors[0],
            blocks.colors[1],
            blocks.colors[2],
            blocks.colors[3],
            blocks.colors[4],
            blocks.colors[6]
        ],
        //var, random, if, function, mouseX, mouseY
        three: [
            blocks.javascript[6],
            blocks.math[0],
            blocks.javascript[2],
            blocks.javascript[7],
            blocks.mouse[0],
            blocks.mouse[1]
        ]

    },
    // set replacement values for variables after dragging
    values = {
        'x,': "100,",
        'y,': "150,",
        'w,': "200,",
        'h,': "100,",
        'x1,': "100,",
        'y1,': "100,",
        'x2,': "300,",
        'y2,': "300,",
        'x3,': "200,",
        'x4,': "300,",
        'start,': "1,",
        'stop,': "270,",
        'cx1,': "262,",
        'cy1,': "138,",
        'cx2,': "100,",
        'cy2,': "287,",
        'r,': "255,",
        'g,': "182,",
        'b,': "193,",
        'thickness,': "10,",
        'c1,': "from,",
        'c2,': "to,",
        'MODE,': "ADD,",
        'amount,': "0.33,",
        'name,': "cursive,",
        'size,': "10,",
        'text,': '\"Hailey\",',
        'font,': "cursive,",
        'angle,': "20,",
        'low,': "0,",
        'high,': "10,",
        'value,': "mouseX,",
        'min,': "30,",
        'max,': "70,",
        'num1,': "5,",
        'num2,': "9,",
        'num,': -"3.5,",
        'exponent,': "3,",
        'degrees,': "20,",
        'arg1,': "Some stuff:,",
        'arg2,': "50,",
        'data,': "About to debug!,",
        'x)': "100)",
        'y)': "150)",
        'w)': "200)",
        'h)': "100)",
        'x1)': "100)",
        'y1)': "100)",
        'x2)': "300)",
        'y2)': "300)",
        'x3)': "200)",
        'x4)': "300)",
        'start)': "1)",
        'stop)': "270)",
        'cx1)': "262)",
        'cy1)': "138)",
        'cx2)': "100)",
        'cy2)': "287)",
        'r)': "255)",
        'g)': "182)",
        'b)': "193)",
        'thickness)': "10)",
        'c1)': "from)",
        'c2)': "to)",
        'MODE)': "ADD)",
        'amount)': "0.33)",
        'name)': "cursive)",
        'size)': "10)",
        'text)': "Hailey)",
        'font)': "cursive)",
        'angle)': "20)",
        'low)': "0)",
        'high)': "10)",
        'value)': "mouseX)",
        'min)': "30)",
        'max)': "70)",
        'num1)': "5)",
        'num2)': "9)",
        'num)': "-3.5)",
        'exponent)': "3)",
        'degrees)': "20)",
        'arg1)': "Some stuff:)",
        'arg2)': "50)",
        'data)': "About to debug!)"   
    },
    // html for cake project
    tryhtml = '<div>textSize(40);&nbsp;</div><div>fill(255, 0, 255);</div><div>text("Decorate the Cake!", 30, 50);</div><div>fill(122, 120, 120);</div><div>ellipse(200, 360, 350, 150);</div><div><br></div><div>fill(0, 255, 234);</div><div>rect(75, 225, 250, 150, 10);</div><div>rect(75, 225, 250, 50, 10);</div><div><br></div>',
    solutionhtml = '<div>textSize(40);&nbsp;</div><div>fill(255, 0, 255);</div><div>text("Decorate the Cake!", 30, 50);</div><div><br></div><div>fill(122, 120, 120);</div><div>ellipse(200, 360, 350, 150);</div><div><br></div><div><br></div><div>fill(0, 255, 234);</div><div>rect(75, 225, 250, 150, 10);</div><div>rect(75, 225, 250, 50, 10);</div><div><br></div><div><br></div><div>fill(162, 0, 255);</div><div>var candlex = 100;</div><div>for (var x = 0; x &lt; 3; x++) {</div><div>rect(candlex, 175, 20, 80, 10);</div><div>candlex = candlex + 90;</div><div>}</div><div><br></div><div><br></div><div>fill(255, 68, 0);</div><div>var redx = 110;</div><div>for (var x = 0; x &lt; 3; x++) {</div><div>ellipse(redx, 170, 20, 30);</div><div>redx = redx + 90;</div><div>}</div><div>fill(255, 170, 0);</div><div>var yellowx = 110;</div><div>for (var x = 0; x &lt; 3; x++) {</div><div>ellipse(yellowx, 170, 10, 20);</div><div>yellowx = yellowx + 90;</div><div>}</div><div><br></div><div>fill(255, 0, 0);</div><div>ellipse(80, 275, 25, 20);</div><div><br></div><div>var topx = 100;</div><div>for (var x = 0; x &lt; 11; x++) {</div><div>ellipse(topx, 280, 25, 20);</div><div>topx = topx + 20;</div><div>}</div><div>ellipse(320, 275, 25, 20);</div><div><br></div><div>ellipse(80, 350, 25, 20);</div><div>var bottomx = 100;</div><div>for (var x = 0; x &lt; 11; x++) {</div><div>ellipse(bottomx, 355, 25, 20);</div><div>bottomx = bottomx + 20;</div><div>}</div><div>ellipse(320, 350, 25, 20);</div>'
window.onload = function(){

    //first attempt at an error message output (not yet functional)

    /*(function () {
        var old = console.log;
        var logger = document.getElementById('mylog');
        console.log = function (message) {
            if (typeof message == 'object') {
                logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
            } else {
                logger.innerHTML += message + '<br />';
            }
        }
    })();
    })();*/
    // initialize variables for menu html
    var basichtml = '',
        morehtml1 = '',
        morehtml2 = '',
        morehtml3 = '',
        advancedhtml = '';

    // fill in basichtml from basic menu array
    for (var i = 0; i < basic.length; i++) {
        basichtml = basichtml + '<div><span class="code" contenteditable="false">' + basic[i] + '</span></div>';
    };

    // fill in columns of more menu
    for (var i = 0; i < more.one.length; i++) {
        morehtml1 = morehtml1 + '<div><span class="code" contenteditable="false">' + more.one[i] + '</span></div>';
    };
    for (var i = 0; i < more.two.length; i++) {
        morehtml2 = morehtml2 + '<div><span class="code" contenteditable="false">' + more.two[i] + '</span></div>';
    };
    for (var i = 0; i < more.three.length; i++) {
        morehtml3 = morehtml3 + '<div><span class="code" contenteditable="false">' + more.three[i] + '</span></div>';
    };

    // for each category of blocks
    for (var property in blocks) {
        if (blocks.hasOwnProperty(property)) {
            advancedhtml = '';
            n = 1;
            // iterate through blocks in category
            for (var j in blocks[property]) {
                advancedhtml = 
                    advancedhtml + 
                    '<div><span class="code" contenteditable="false">'
                    + blocks[property][j] + 
                    '</span></div>';
                // change to a new column every six blocks
                if (j % 5 == 0 && j != 0) {
                    $("#" + property + n).html(advancedhtml);
                    n++;
                    advancedhtml = '';
                }
                // add html to column in category tab
                else {
                    $("#" + property + n).html(advancedhtml);
                }
            }; 
        }
    }
    // add menu html to tab panes
    $("#basic").html(basichtml);
    $("#moreOne").html(morehtml1);
    $("#moreTwo").html(morehtml2);
    $("#moreThree").html(morehtml3);

    // place project code in editor, show the solution and instruction buttons
    $("#try").click(function (event) {
        $("#editor").html(tryhtml);
        $("#cakeInstructions").css("display","inline-block");
        $("#solution").css("display","inline-block");

    });

    // place solution code in editor
    $("#solution").click(function (event) {
        $("#editor").html(solutionhtml);

    });

    // run the code on the canvas when the user clicks the run button
    $("#run").click(function (event) {
        // get rid of nonbreaking spaces in html
        var newhtml = $("#editor").html();
        console.log(newhtml);
        newhtml = newhtml.replace(/&nbsp;/g, '<br/>');
        // remove markup tags
        newhtml = newhtml.replace(/<\/?[^>]+(>|$)/g, '');
        newhtml = newhtml.replace(/&lt;/g, '<');

        // keep the canvas the defined size, add newhtml
        //couldn't get this to work with jQuery

        document.getElementById("script").text = "size(400, 400);" + newhtml;


        Processing.reload();
    });

    // selects the entire element (instead of just text)
    $("body").on("mousedown", ".code", function(){
        var selection = $(this).selectText();
        $(this).selectText();
    })
    $("body").on("dragend", ".code", function(e){
        // get rid of pink background
        $("#editor").children().css("background-color", "transparent");
        // replace variables with numbers/data
        var newcode = $("#editor").html();
        for (var key in values) {
            var newcode = newcode.replace(key, values[key]);
        }
        $('#editor').html(newcode);

    });

    // bring the whole node when dragging
    $.fn.selectText = function () {
        // clears current selected text
        clearSelection();

        return $(this).each(function (index, el) {
            var range = document.createRange();
            range.selectNode(el);
            window.getSelection().addRange(range);
        });
    }

    // clears currently selected text when user clicks on code span
    function clearSelection() {
        window.getSelection().removeAllRanges();
        return false;
    }};

//documentation on createRange and selecteNode
//https://developer.mozilla.org/en-US/docs/Web/API/Range/selectNode
//http://jsfiddle.net/cevf8zwh/6/