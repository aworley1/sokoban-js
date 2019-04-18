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
            "############################",
            "#                          #",
            "#  *     p            *    #",
            "#                          #",
            "#              b           #",
            "#                          #",
            "#  b       ######          #",
            "#          #    #          #",
            "#          #  * #          #",
            "#          # b* #    b     #",
            "#  b       #    #          #",
            "#          ## ###          #",
            "#                   # #    #",
            "#                   #*#    #",
            "#                   ###    #",
            "############################"

    )

    Game.board = initialBoard

    window.onload = {
        printBoard(board)

        val updateBoardEventListener = EventListener {
            val textArea = document.getElementById("board") as HTMLTextAreaElement
            board = textArea.value.split("\n")
            printBoard(board)
        }

        addClickEventListener("right", createMoveEventListener('r'))
        addClickEventListener("left", createMoveEventListener('l'))
        addClickEventListener("up", createMoveEventListener('u'))
        addClickEventListener("down", createMoveEventListener('d'))
        addClickEventListener("readBoard", updateBoardEventListener)

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
}

private fun createMoveEventListener(direction: Char): EventListener {
    return EventListener {
        board = processSokobanMove(board, direction)
        printBoard(board)
    }
}

private fun addClickEventListener(elementId: String, eventListener: EventListener) {
    document.getElementById(elementId)?.addEventListener("click", eventListener)
}

private fun setNewBoard(event: KeyboardEvent, c: Char) {
    event.preventDefault()
    board = processSokobanMove(board, c)
}

fun makeSquare(storageLocation: Boolean, image: String?): Element {
    val squareClass = if (storageLocation) "square storage-location" else "square"
    val square = document.createElement("span").apply { className = squareClass }

    image?.let { square.appendChild((document.createElement("img") as HTMLImageElement).apply { src = image }) }

    return square
}

fun printBoard(board: List<String>) {
    val youHaveWon = document.createElement("h1").apply { textContent = "YOU HAVE WON!!!" }
    val sokobanDiv = document.getElementById("sokoban")

    val boardArray = board.map { row ->
        row.map { char ->
            when (char) {
                'p' -> makeSquare(false, "dog.svg")
                '#' -> makeSquare(false, "bricks.svg")
                '*' -> makeSquare(true, null)
                'P' -> makeSquare(true, "dog.svg")
                'b' -> makeSquare(false, "bone.svg")
                'B' -> makeSquare(true, "bone.svg")
                else -> makeSquare(false, null)
            }
        }
    }

    sokobanDiv?.innerHTML = ""
    if (hasPlayerWon(board)) sokobanDiv?.appendChild(youHaveWon)
    boardArray.forEach {
        val row = document.createElement("div")
        it.forEach {
            row.appendChild(it)
        }
        sokobanDiv?.appendChild(row)
    }
}
