package challenge_three

import org.w3c.dom.events.EventListener
import org.w3c.dom.events.KeyboardEvent
import kotlin.browser.document
import kotlin.browser.window
import kotlin.dom.appendText

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

    var board = initialBoard

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

        document.getElementById("right")?.addEventListener("click", rightEventListener)
        document.getElementById("left")?.addEventListener("click", leftEventListener)
        document.getElementById("up")?.addEventListener("click", upEventListener)
        document.getElementById("down")?.addEventListener("click", downEventListener)

        window.addEventListener("keydown", {
            val event = it as KeyboardEvent
            when (event.keyCode) {
                38 -> board = processSokobanMove(board, 'u')
                40 -> board = processSokobanMove(board, 'd')
                37 -> board = processSokobanMove(board, 'l')
                39 -> board = processSokobanMove(board, 'r')
            }
            printBoard(board)
        })

    }

    printBoard(board)
    console.log("Hi!")

}

fun printBoard(board: List<String>) {
    val pre = document.createElement("pre").appendText(board.joinToString("\n"))

    val sokobanDiv = document.getElementById("sokoban")
    sokobanDiv?.innerHTML = ""
    sokobanDiv?.appendChild(pre)
}