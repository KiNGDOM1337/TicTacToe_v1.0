// Variables
// =========

    const readline = require('readline');
    const rl = readline.createInterface({input: process.stdin, output: process.stdout});

    playerBool = true;

    var player1 = "";
    var player2 = "";

    var a = " ";
    var b = " ";
    var c = " ";
    var d = " ";
    var e = " ";
    var f = " ";
    var g = " ";
    var h = " ";
    var i = " ";

    var input = "";
    var inputArray = [];
    var removedInput = "";


// Functions
// =========

    function showTitle() {
        console.clear();   
        console.log("             =================");
        console.log("             = x TicTacToe o =");
        console.log("             =================");
        console.log("");
    }


// Help-Section
// ------------

    function description() {
        console.log("                Description");
        console.log("                ===========");
        console.log("\n");
        console.log("      Battlefield           Commands");
        console.log("      -----------           --------");
        console.log("");
        console.log("        Columns        back  - undo turn");
        console.log("                       exit  - leave game");
        console.log("         |   |         help  - description");
        console.log("       --+---+--       quit  - leave game");
        console.log(" Rows    |   |         run   - start a match");
        console.log("       --+---+--");
        console.log("         |   |         try first letters only");       
        console.log("\n");
        console.log("               Location Input");
        console.log("               --------------");
        console.log("");
        console.log("     First Choose A Row, Then A Column:");
        console.log("");
        console.log("       1 1           2 3           3 2");
        console.log("");
        console.log("    x |   |         |   |         |   |  ");
        console.log("    --+---+--     --+---+--     --+---+--");
        console.log("      |   |         |   | x       |   |  ");
        console.log("    --+---+--     --+---+--     --+---+--");
        console.log("      |   |         |   |         | x |  ");
        console.log("");
        console.log("");
        console.log("");

        runOrExit();
    }

        function runOrExit() {
            rl.question("run or exit game\n> ", (benutzerEingabe) => {
                if (benutzerEingabe === "run" || benutzerEingabe === "r") {
                    console.clear();
                    showTitle();
                    chooseSymbol();
                } else if (benutzerEingabe === "exit" || benutzerEingabe === "quit" || benutzerEingabe === "e" || benutzerEingabe === "q") {
                    quit();
                } else {
                    console.clear();
                    showTitle();
                    console.log("\n");
                    description();
                    runOrExit();
                }
            })
        }


// Menu
// ----

    function mainMenu() {
        rl.question("run game or ask for help \n> ", (benutzerEingabe) => {
            if (benutzerEingabe === "run" || benutzerEingabe === "r") {
                console.clear();
                showTitle();
                chooseSymbol();              
            } else if (benutzerEingabe === "help" || benutzerEingabe === "h") {
                showTitle();
                console.log("\n");
                description();                
            } else if (benutzerEingabe === "exit" || benutzerEingabe === "quit" || benutzerEingabe === "e" || benutzerEingabe === "q") {
                quit();
    
            } else {
                showTitle();
                mainMenu();
            }
        });     
    }

    function chooseSymbol() {
        // console.clear();
        // showTitle();

        rl.question("Player1: x or o?\n> ", (benutzerEingabe) => {
            if (benutzerEingabe === "x") {
                player1 = "x";
                player2 = "o";

                updateScene();
                console.log("\n");
                turn();
            } else if (benutzerEingabe === "o") {
                player1 = "o";
                player2 = "x";

                updateScene();
                console.log("\n");
                turn();
            } else if (benutzerEingabe === "back" || benutzerEingabe === "b") {
                showTitle(); 
                mainMenu();
            } else if (benutzerEingabe === "exit" || benutzerEingabe === "quit" || benutzerEingabe === "e" || benutzerEingabe === "q") {
                quit();

            } else {
                console.clear();
                showTitle();
                chooseSymbol();
            }
        })
    }

    function showPlayerSymbols() {
        console.log("");
        console.log("Player1: " + player1);
        console.log("Player2: " + player2);
        console.log("\n");
    }


// Turn Control
// ------------

    function turn() {
        if (playerBool === true) {

            rl.question("Player1, set your " + player1 + ": ", (benutzerEingabe) => {
            if (benutzerEingabe === "1 1" && a === " ") { 
                input = benutzerEingabe;             
                a = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "1 2" && b === " ") {
                input = benutzerEingabe; 
                b = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "1 3" && c === " ") {
                input = benutzerEingabe; 
                c = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "2 1" && d === " ") {
                input = benutzerEingabe; 
                d = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "2 2" && e === " ") {
                input = benutzerEingabe; 
                e = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "2 3" && f === " ") {
                input = benutzerEingabe; 
                f = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "3 1" && g === " ") {
                input = benutzerEingabe; 
                g = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "3 2" && h === " ") {
                input = benutzerEingabe; 
                h = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "3 3" && i === " ") {
                input = benutzerEingabe; 
                i = player1;
                playerBool = false;
                
                updateScene();
                checkWin();
                checkpoint();
            } else if (benutzerEingabe === "back" || benutzerEingabe === "b") {                
                if (inputArray.length == 0) { 
                    reset();
                    console.clear();
                    showTitle();
                    chooseSymbol();
                    } else {                      
                        undo();
                        changePlayerBool();
                        updateScene();
                        console.log("\n");
                        turn();
                    }

            } else {          
                updateScene();
                console.log("\n");
                console.log("location is not empty or wrong input,\ntry again!");
                console.log("");
                turn();
            }
            });


        } else if (playerBool === false) {
            rl.question("Player2, set your " + player2 + ": ", (benutzerEingabe) => {
                if (benutzerEingabe === "1 1" && a === " ") {
                    input = benutzerEingabe; 
                    a = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "1 2" && b === " ") {
                    input = benutzerEingabe; 
                    b = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "1 3" && c === " ") {
                    input = benutzerEingabe; 
                    c = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "2 1" && d === " ") {
                    input = benutzerEingabe; 
                    d = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "2 2" && e === " ") {
                    input = benutzerEingabe; 
                    e = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "2 3" && f === " ") {
                    input = benutzerEingabe; 
                    f = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "3 1" && g === " ") {
                    input = benutzerEingabe; 
                    g = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "3 2" && h === " ") {
                    input = benutzerEingabe; 
                    h = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "3 3" && i === " ") {
                    input = benutzerEingabe; 
                    i = player2;
                    playerBool = true;
                    
                    updateScene();
                    checkWin();
                    checkpoint();
                } else if (benutzerEingabe === "back" || benutzerEingabe === "b") {                
                    if (inputArray.length == 0) { 
                        reset();
                        console.clear();
                        showTitle();
                        chooseSymbol();
                        } else {                      
                            undo();
                            changePlayerBool();
                            updateScene();
                            console.log("\n");
                            turn();
                        }
    
                } else {          
                    updateScene();
                    console.log("\n");
                    console.log("location is not empty or wrong input,\ntry again!");
                    console.log("");
                    turn();
                }
                });
        }
    }


// Canvas Refresh
// ==============

    function updateBattlefield() {
        console.log("                 " + a + " | " + b + " | " + c);
        console.log("                 --+---+--");
        console.log("                 " + d + " | " + e + " | " + f);
        console.log("                 --+---+--");
        console.log("                 " + g + " | " + h + " | " + i);
    }

    function updateScene() {
        console.clear();
        showTitle();
        showPlayerSymbols()
        updateBattlefield();
    }


// UNDO Section

    function checkpoint() {
        inputArray.unshift(input);
    }

    function changePlayerBool() {
        if (playerBool === true) {
            playerBool = false;
        } else if (playerBool === false) {
            playerBool = true;
        }
    }

    function undo() {
        removedInput = inputArray.shift(inputArray[0]);

        if (removedInput === "1 1") {                
            a = " ";
        } else if (removedInput === "1 2") {                
            b = " ";
        } else if (removedInput === "1 3") {                
            c = " ";
        } else if (removedInput === "2 1") {                
            d = " ";
        } else if (removedInput === "2 2") {                
            e = " ";
        } else if (removedInput === "2 3") {                
            f = " ";
        } else if (removedInput === "3 1") {                
            g = " ";
        } else if (removedInput === "3 2") {                
            h = " ";
        } else if (removedInput === "3 3") {                
            i = " ";
        } else {
            console.log("Impossible");
        }
    }


// Win Conditions
// ==============

    // row1 = a, b, c;
    // row2 = d, e, f;
    // row3 = g, h, i;
    // column1 = a, d, g;
    // column2 = b, e, h;
    // column3 = c, f, i;
    // diagonal1 = a, e, i;
    // diagonal2 = c, e, g;

    function checkWin() {
        if (a === "x" && b === "x" && c === "x" || a === "o" && b === "o" && c === "o" ) { 
            
            checkPlayer();      
            playAgain();
        } else if (d === "x" && e === "x" && f === "x" || d === "o" && e === "o" && f === "o") {

            checkPlayer();      
            playAgain();
        } else if (g === "x" && h === "x" && i === "x" || g === "o" && h === "o" && i === "o") {

            checkPlayer();      
            playAgain();
        } else if (a === "x" && d === "x" && g === "x" || a === "o" && d === "o" && g === "o") {

            checkPlayer();      
            playAgain();
        } else if (b === "x" && e === "x" && h === "x" || b === "o" && e === "o" && h === "o") {

            checkPlayer();      
            playAgain();
        } else if (c === "x" && f === "x" && i === "x" || c === "o" && f === "o" && i === "o") {

            checkPlayer();      
            playAgain();
        } else if (a === "x" && e === "x" && i === "x" || a === "o" && e === "o" && i === "o") {

            checkPlayer();      
            playAgain();
        } else if (c === "x" && e === "x" && g === "x" || c === "o" && e === "o" && g === "o") {

            checkPlayer();      
            playAgain();
        } else if (a !== " " && b !== " " && c !== " " && d !== " " && e !== " " && f !== " " && g !== " " && h !== " " && i !== " ") {
            showTitle();
            showPlayerSymbols();
            updateBattlefield();
            console.log("");
            console.log("                   DRAW!");
            console.log("\n");
            playAgain();
        } else {
            console.log("\n");
            turn();
        }
    }

    function checkPlayer() {
        if (playerBool === false) {
            console.log("");
            console.log("                  PLAYER1");
            console.log("                   WINS!");
            console.log("\n");
        } else { 
            console.log("");
            console.log("                  PLAYER2");
            console.log("                   WINS!");
            console.log("\n");
        } 
    }


// Restart Game
// ============

    function playAgain() {
        rl.question("play again?\n> ", (benutzerEingabe) => {
            if (benutzerEingabe === "yes" || benutzerEingabe === "y"  ||  benutzerEingabe === "YES" || benutzerEingabe === "Y") {
                reset();
                console.clear();
                showTitle();

                chooseSymbol();
            } else if (benutzerEingabe === "no" || benutzerEingabe === "n" || benutzerEingabe === "NO" || benutzerEingabe === "N") {
                quit();
            } else {
                updateScene();
                checkWin();
                
                playAgain();
            }
        })
    }

    function reset() {
        playerBool = true;
        player1, player2 = "";
        a = " ";
        b = " ";
        c = " ";
        d = " ";
        e = " ";
        f = " ";
        g = " ";
        h = " ";
        i = " ";

        inputArray = [];
        removedInput = "";
    }

// Quit Game
// =========

    function quit() {
        console.clear();
        rl.close();
    }


// RUN

    showTitle();
    mainMenu();