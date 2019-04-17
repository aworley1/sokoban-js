package challenge_three

import challenge_three.Game.board
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

fun printBoard(board: List<String>) {
    val player = document.createElement("div").apply { className = "PlayerSquare" }
    val playerImage = (document.createElement("img") as HTMLImageElement).apply { src = "dog.svg" }
    player.appendChild(playerImage)

    val spans = board.flatMap {
        val span = document.createElement("span")
        it.map {
            val div = when (it) {
                'p' -> player
                else -> document.createElement("div").apply { className = "EmptySquare" }
            }
            span.appendChild(div)
            span
        }
    }

//    val pre = document.createElement("pre").appendText(board.joinToString("\n"))

    val sokobanDiv = document.getElementById("sokoban")

    sokobanDiv?.innerHTML = ""
    spans.forEach {
        sokobanDiv?.appendChild(it)
    }
//    sokobanDiv?.appendChild(pre)
}