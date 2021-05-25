from random import randint

def checkIfMatch(theGuess, theWord):
    if theGuess in theWord:
        return True
    else:
        return False
  
def updateBoard(theBoard, theGuess, theWord):
    count = 0
    
    for i in theWord:
        if i == theGuess:
            theBoard[count] = i
            count += 1
        else:
            count += 1
    return " ".join(theBoard)

def drawCharacter(wrongGuesses):
    start =  " ___\n     |\n     |\n     |\n     |\n     _"
    missOne = "  ___\n  o  |\n     |\n     |\n     |\n     _"
    missTwo = "  ___\n  o  |\n  |  |\n     |\n     |\n     _"
    missThree = "  ___\n  o  |\n  |\ |\n     |\n     |\n     _"
    missFour = "  ___\n  o  |\n /|\ |\n     |\n     |\n     _"
    missFive = "  ___\n  o  |\n /|\ |\n   \ |\n     |\n     _"
    gameOver = "  ___\n  o  |\n /|\ |\n / \ |\n     |\n     _"
    if wrongGuesses == 6:
        return gameOver
    elif len(wrongGuesses) == 0:
        return(start)
    elif len(wrongGuesses) == 1:
        return missOne
    elif len(wrongGuesses) == 2:
        return missTwo
    elif len(wrongGuesses) == 3:
        return missThree
    elif len(wrongGuesses) == 4:
        return missFour
    elif len(wrongGuesses) == 5:
        return missFive

wordList = ["apple", "cherry", "pear", "strawberry"]
word = wordList[randint(0, len(wordList) - 1)]

gameBoard = list(len(word)*("-"))
print("(" + " ".join(gameBoard) + ")")
newGameBoard = ""

guessMatch = []
guessMiss = []

while True:
    print("Misses: " + ", ".join(guessMiss))
    userInput = input("Make a guess: \n")

    numOfOccur = word.count(userInput)

    if userInput == word:
        print("Congrats! The word was " + userInput + "!")
        break

    elif len(guessMiss) >= 5:
            print(drawCharacter(6))
            print("GAME OVER!")
            break

    elif userInput in guessMatch or userInput in guessMiss:
        print("You have already made this guess. Try again.")

    else:
        if checkIfMatch(userInput, word) == True:

            guessMatch.append(userInput)

            newGameBoard = updateBoard(gameBoard, userInput, word)
            print("There was " + str(numOfOccur) + " " + userInput + "(s).")

            print("( " + newGameBoard + " )")

        else:
            guessMiss.append(userInput)

            print("(" + " ".join(gameBoard) + ")")
            print(drawCharacter(guessMiss))
            print("There was no " + userInput + " (s). Try Again!")