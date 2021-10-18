
let isWhite= confirm("Is the color white?");
let isMaroon= confirm("Is the color maroon?");
if (isWhite== true && isMaroon== true) console.log("All Molloy Colors");
if (isWhite== false && isMaroon== true || isWhite== true && isMaroon== false) console.log("Half Molloy Colors");
if (isWhite== false && isMaroon== false) console.log("No Molloy Colors")