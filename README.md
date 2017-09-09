Training Wheels is built to be a bridge between two computer programming languages: Scratch and Processing.js,
a coding learning language created by Khan Academy based on manipulating a canvas (see khanacademy.com).
As a teacher, I've seen how difficult it is for students to make the jump between a draggable block language
like Scratch and a typed language like Processing -- too many get frustrated by syntax errors and give up.
Training Wheels is an attempt to solve that problem by allowing students to drag pieces of processing code into
an editor and then run the code on a canvas. 

The user interface includes three parts: a button menu, an editor, and a canvas. 

The button menu is generated dynamically through javascript from an object containing almost all the common
pieces of javascript code. There are three parts to the menu: basic, more, and advanced. Basic contains a few 
pieces of code (advisably less than 5) visible to the student. More contains three columns of code, also customizable
by the teacher from the backend. Advanced contains tabs with icons representing the thirteen subcategories of blocks,
also filled dynamically from the blocks object. 

The editor is where the student drags the code. The variables in the code change to numbers or data upon being dropped
in the editor. The pink background is allowed removed upon dragging. 

The canvas is where the code is run, and is similar to the 400x400 canvas on the Khan Academy website, though it
should be noted the canvas does not support animations as used by the draw function (at least not yet!). 

The page also includes an example project that motivates the students to decorate a birthday cake, as well as 
providing solution code. 

That's all folks!
