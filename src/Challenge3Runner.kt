package challenge_three

import challenge_three.Game.board
import org.w3c.dom.Element
import org.w3c.dom.HTMLImageElement
import org.w3c.dom.HTMLTextAreaElement
import org.w3c.dom.events.EventListener
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.browser.window

object Game {
    var board: List<String> = emptyList()
}

fun main() {
    val initialBoard = listOf(
            "#######################",
            "#pb                *  #",
            "#                  #  #",
            "# b                #  #",
            "#         *        #  #",
            "#                  #  #",
            "#                  #  #",
            "#######################"
    )

    Game.board = initialBoard

    window.onload = {
        printBoard(board)

        val rightEventListener = EventListener {
            board = processSokobanMove(board, 'r')
            printBoard(board)
        }
        val leftEventListener = EventListener {
            board = processSokobanMove(board, 'l')
            printBoard(board)
        }
        val upEventListener = EventListener {
            board = processSokobanMove(board, 'u')
            printBoard(board)
        }
        val downEventListener = EventListener {
            board = processSokobanMove(board, 'd')
            printBoard(board)
        }

        val updateBoardEventListener = EventListener {
            val textArea = document.getElementById("board") as HTMLTextAreaElement
            board = textArea.value.split("\n")
            printBoard(board)
        }

        document.getElementById("right")?.addEventListener("click", rightEventListener)
        document.getElementById("left")?.addEventListener("click", leftEventListener)
        document.getElementById("up")?.addEventListener("click", upEventListener)
        document.getElementById("down")?.addEventListener("click", downEventListener)
        document.getElementById("readBoard")?.addEventListener("click", updateBoardEventListener)

        window.addEventListener("keydown", {
            val event = it as KeyboardEvent
            when (event.keyCode) {
                38 -> setNewBoard(event, 'u')
                40 -> setNewBoard(event, 'd')
                37 -> setNewBoard(event, 'l')
                39 -> setNewBoard(event, 'r')
            }
            printBoard(board)
        })

    }

    printBoard(board)
    console.log("Hi!")

}

private fun setNewBoard(event: KeyboardEvent, c: Char) {
    event.preventDefault()
    board = processSokobanMove(board, c)
}

fun makeWallSquare(): Element {
    val wall = document.createElement("div").apply { className = "Square" }
    val wallImage = (document.createElement("img") as HTMLImageElement).apply { src = "bricks.svg" }
    wall.appendChild(wallImage)
    return wall
}

fun makePlayerSquare(): Element {
    val player = document.createElement("div").apply { className = "Square" }
    val playerImage = (document.createElement("img") as HTMLImageElement).apply { src = "dog.svg" }
    player.appendChild(playerImage)

    return player
}

fun makeEmptySquare() = document.createElement("div").apply { className = "Square" }

fun printBoard(board: List<String>) {
    val sokobanDiv = document.getElementById("sokoban")

    val boardArray = board.map {row ->
        row.map {char ->
            when (char) {
                'p' -> makePlayerSquare()
                '#' -> makeWallSquare()
                else -> makeEmptySquare()
            }
        }
    }


    sokobanDiv?.innerHTML = ""
    boardArray.forEach {
        val span = document.createElement("span")
        it.forEach {
            span.appendChild(it)
            console.log(span)
        }
        sokobanDiv?.appendChild(span)
    }
}