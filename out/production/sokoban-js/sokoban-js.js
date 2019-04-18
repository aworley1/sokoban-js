if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'sokoban-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'sokoban-js'.");
}
this['sokoban-js'] = function (_, Kotlin) {
  'use strict';
  var unboxChar = Kotlin.unboxChar;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var toBoxedChar = Kotlin.toBoxedChar;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var plus = Kotlin.kotlin.collections.plus_qloxvw$;
  var flatten = Kotlin.kotlin.collections.flatten_u0ad8z$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var throwCCE = Kotlin.throwCCE;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var Unit = Kotlin.kotlin.Unit;
  var EventListener = Kotlin.org.w3c.dom.events.EventListener_gbr1zf$;
  Direction.prototype = Object.create(Enum.prototype);
  Direction.prototype.constructor = Direction;
  SquareType.prototype = Object.create(Enum.prototype);
  SquareType.prototype.constructor = SquareType;
  IllegalMoveException.prototype = Object.create(Exception.prototype);
  IllegalMoveException.prototype.constructor = IllegalMoveException;
  function Direction(name, ordinal, code, verticalMovement, horizontalMovement) {
    Enum.call(this);
    this.code = toBoxedChar(code);
    this.verticalMovement = verticalMovement;
    this.horizontalMovement = horizontalMovement;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Direction_initFields() {
    Direction_initFields = function () {
    };
    Direction$UP_instance = new Direction('UP', 0, 85, -1, 0);
    Direction$DOWN_instance = new Direction('DOWN', 1, 68, 1, 0);
    Direction$LEFT_instance = new Direction('LEFT', 2, 76, 0, -1);
    Direction$RIGHT_instance = new Direction('RIGHT', 3, 82, 0, 1);
    Direction$Companion_getInstance();
  }
  var Direction$UP_instance;
  function Direction$UP_getInstance() {
    Direction_initFields();
    return Direction$UP_instance;
  }
  var Direction$DOWN_instance;
  function Direction$DOWN_getInstance() {
    Direction_initFields();
    return Direction$DOWN_instance;
  }
  var Direction$LEFT_instance;
  function Direction$LEFT_getInstance() {
    Direction_initFields();
    return Direction$LEFT_instance;
  }
  var Direction$RIGHT_instance;
  function Direction$RIGHT_getInstance() {
    Direction_initFields();
    return Direction$RIGHT_instance;
  }
  function Direction$Companion() {
    Direction$Companion_instance = this;
  }
  Direction$Companion.prototype.of_s8itvh$ = function (code) {
    var $receiver = Direction$values();
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (unboxChar(element.code) === code) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  Direction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Direction$Companion_instance = null;
  function Direction$Companion_getInstance() {
    Direction_initFields();
    if (Direction$Companion_instance === null) {
      new Direction$Companion();
    }
    return Direction$Companion_instance;
  }
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Direction$values() {
    return [Direction$UP_getInstance(), Direction$DOWN_getInstance(), Direction$LEFT_getInstance(), Direction$RIGHT_getInstance()];
  }
  Direction.values = Direction$values;
  function Direction$valueOf(name) {
    switch (name) {
      case 'UP':
        return Direction$UP_getInstance();
      case 'DOWN':
        return Direction$DOWN_getInstance();
      case 'LEFT':
        return Direction$LEFT_getInstance();
      case 'RIGHT':
        return Direction$RIGHT_getInstance();
      default:throwISE('No enum constant challenge_three.Direction.' + name);
    }
  }
  Direction.valueOf_61zpoe$ = Direction$valueOf;
  function Board(squares) {
    Board$Companion_getInstance();
    this.squares = squares;
  }
  function Board$toArray$lambda(it) {
    return it.first;
  }
  function Board$toArray$lambda$lambda(it) {
    return it.col;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Board.prototype.toArray = function () {
    var $receiver = this.squares;
    var destination = LinkedHashMap_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var key = element.row;
      var tmp$_0;
      var value = destination.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init_0();
        destination.put_xwzc9p$(key, answer);
        tmp$_0 = answer;
      }
       else {
        tmp$_0 = value;
      }
      var list = tmp$_0;
      list.add_11rb$(element);
    }
    var sortedRows = sortedWith(toList(destination), new Comparator$ObjectLiteral_0(compareBy$lambda_0(Board$toArray$lambda)));
    var destination_0 = ArrayList_init(collectionSizeOrDefault(sortedRows, 10));
    var tmp$_1;
    tmp$_1 = sortedRows.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      var $receiver_0 = sortedWith(item.second, new Comparator$ObjectLiteral(compareBy$lambda(Board$toArray$lambda$lambda)));
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_3;
      tmp$_3 = $receiver_0.iterator();
      while (tmp$_3.hasNext()) {
        var item_0 = tmp$_3.next();
        destination_1.add_11rb$(item_0.toString());
      }
      tmp$_2.call(destination_0, joinToString(destination_1, ''));
    }
    return destination_0;
  };
  Board.prototype.get_vux9f0$ = function (row, column) {
    var tmp$;
    var $receiver = this.squares;
    var singleOrNull$result;
    singleOrNull$break: do {
      var tmp$_0;
      var single = null;
      var found = false;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.row === row && element.col === column) {
          if (found) {
            singleOrNull$result = null;
            break singleOrNull$break;
          }
          single = element;
          found = true;
        }
      }
      if (!found) {
        singleOrNull$result = null;
        break singleOrNull$break;
      }
      singleOrNull$result = single;
    }
     while (false);
    tmp$ = singleOrNull$result;
    if (tmp$ == null) {
      throw new IllegalMoveException('Not possible to move off the board');
    }
    return tmp$;
  };
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var Any = Object;
  Board.prototype.getPlayerSquare = function () {
    var tmp$, tmp$_0;
    var single = null;
    var found = false;
    tmp$ = this.squares.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.type.isPlayer) {
        if (found)
          throw IllegalArgumentException_init('Collection contains more than one matching element.');
        single = element;
        found = true;
      }
    }
    if (!found)
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    return (tmp$_0 = single) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  Board.prototype.move_oawyj1$ = function (direction) {
    var playerStart = this.getPlayerSquare();
    var nextSquare = this.getSquareInDirection_0(playerStart, direction);
    var board = this.moveBox_0(nextSquare, direction);
    return board.movePlayer_0(playerStart, direction);
  };
  Board.prototype.movePlayer_0 = function (from, direction) {
    var to = this.getSquareInDirection_0(from, direction);
    return this.removeSquare_0(from).removeSquare_0(to).addSquare_0(from.removePlayer()).addSquare_0(to.addPlayer());
  };
  Board.prototype.moveBox_0 = function (from, direction) {
    if (!from.type.isBox)
      return this;
    var to = this.getSquareInDirection_0(from, direction);
    return this.removeSquare_0(from).removeSquare_0(to).addSquare_0(from.removeBox()).addSquare_0(to.addBox());
  };
  Board.prototype.getSquareInDirection_0 = function (square, direction) {
    return this.get_vux9f0$(square.row + direction.verticalMovement | 0, square.col + direction.horizontalMovement | 0);
  };
  Board.prototype.removeSquare_0 = function (square) {
    var $receiver = this.squares;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (!(element === square))
        destination.add_11rb$(element);
    }
    return new Board(destination);
  };
  Board.prototype.addSquare_0 = function (square) {
    return new Board(plus(this.squares, square));
  };
  function Board$Companion() {
    Board$Companion_instance = this;
  }
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var checkIndexOverflow = Kotlin.kotlin.collections.checkIndexOverflow_za3lpa$;
  Board$Companion.prototype.from_mhpeer$ = function (input) {
    var destination = ArrayList_init(collectionSizeOrDefault(input, 10));
    var tmp$, tmp$_0;
    var index = 0;
    tmp$ = input.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_1 = destination.add_11rb$;
      var rowIndex = checkIndexOverflow((tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      var destination_0 = ArrayList_init(item.length);
      var tmp$_2, tmp$_0_0;
      var index_0 = 0;
      tmp$_2 = iterator(item);
      while (tmp$_2.hasNext()) {
        var item_0 = unboxChar(tmp$_2.next());
        var tmp$_3 = destination_0.add_11rb$;
        var colIndex = (tmp$_0_0 = index_0, index_0 = tmp$_0_0 + 1 | 0, tmp$_0_0);
        var square = toBoxedChar(item_0);
        tmp$_3.call(destination_0, new Square(SquareType$Companion_getInstance().from_s8itvh$(unboxChar(square)), rowIndex, colIndex));
      }
      tmp$_1.call(destination, destination_0);
    }
    var squares = flatten(destination);
    return new Board(squares);
  };
  Board$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Board$Companion_instance = null;
  function Board$Companion_getInstance() {
    if (Board$Companion_instance === null) {
      new Board$Companion();
    }
    return Board$Companion_instance;
  }
  Board.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Board',
    interfaces: []
  };
  Board.prototype.component1 = function () {
    return this.squares;
  };
  Board.prototype.copy_7nd4im$ = function (squares) {
    return new Board(squares === void 0 ? this.squares : squares);
  };
  Board.prototype.toString = function () {
    return 'Board(squares=' + Kotlin.toString(this.squares) + ')';
  };
  Board.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.squares) | 0;
    return result;
  };
  Board.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.squares, other.squares))));
  };
  function Square(type, row, col) {
    if (type === void 0)
      type = SquareType$EMPTY_getInstance();
    this.type = type;
    this.row = row;
    this.col = col;
  }
  Square.prototype.toString = function () {
    return this.type.toString();
  };
  Square.prototype.addPlayer = function () {
    var tmp$;
    switch (this.type.name) {
      case 'EMPTY':
        tmp$ = this.copy_yct8hp$(SquareType$PLAYER_getInstance());
        break;
      case 'STORAGE_LOCATION':
        tmp$ = this.copy_yct8hp$(SquareType$STORAGE_LOCATION_WITH_PLAYER_getInstance());
        break;
      case 'WALL':
        throw new IllegalMoveException('Cannot add a player to a wall');
      case 'PLAYER':
        throw IllegalArgumentException_init('Cannot add a player to a player');
      case 'STORAGE_LOCATION_WITH_PLAYER':
        throw IllegalArgumentException_init('Cannot add a player to a player');
      case 'BOX':
        throw IllegalArgumentException_init('Cannot add a player to a box');
      case 'STORAGE_LOCATION_WITH_BOX':
        throw IllegalArgumentException_init('Cannot add a player to a box');
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Square.prototype.removePlayer = function () {
    var tmp$;
    switch (this.type.name) {
      case 'EMPTY':
        throw IllegalArgumentException_init('Cannot remove a player from this square');
      case 'STORAGE_LOCATION':
        throw IllegalArgumentException_init('Cannot remove a player from this square');
      case 'WALL':
        throw IllegalArgumentException_init('Cannot remove a player from this square');
      case 'PLAYER':
        tmp$ = this.copy_yct8hp$(SquareType$EMPTY_getInstance());
        break;
      case 'STORAGE_LOCATION_WITH_PLAYER':
        tmp$ = this.copy_yct8hp$(SquareType$STORAGE_LOCATION_getInstance());
        break;
      case 'BOX':
        throw IllegalArgumentException_init('Cannot remove a player from this square');
      case 'STORAGE_LOCATION_WITH_BOX':
        throw IllegalArgumentException_init('Cannot remove a player from this square');
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Square.prototype.addBox = function () {
    var tmp$;
    switch (this.type.name) {
      case 'EMPTY':
        tmp$ = this.copy_yct8hp$(SquareType$BOX_getInstance());
        break;
      case 'STORAGE_LOCATION':
        tmp$ = this.copy_yct8hp$(SquareType$STORAGE_LOCATION_WITH_BOX_getInstance());
        break;
      case 'WALL':
        throw new IllegalMoveException('Cannot add a box to a wall');
      case 'PLAYER':
        throw IllegalArgumentException_init('Cannot add a box to a player');
      case 'STORAGE_LOCATION_WITH_PLAYER':
        throw IllegalArgumentException_init('Cannot add a box to a player');
      case 'BOX':
        throw new IllegalMoveException('Cannot add a box to a box');
      case 'STORAGE_LOCATION_WITH_BOX':
        throw new IllegalMoveException('Cannot add a box to a box');
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Square.prototype.removeBox = function () {
    var tmp$;
    switch (this.type.name) {
      case 'BOX':
        tmp$ = this.copy_yct8hp$(SquareType$EMPTY_getInstance());
        break;
      case 'STORAGE_LOCATION_WITH_BOX':
        tmp$ = this.copy_yct8hp$(SquareType$STORAGE_LOCATION_getInstance());
        break;
      case 'EMPTY':
        throw IllegalArgumentException_init('No box to remove');
      case 'STORAGE_LOCATION':
        throw IllegalArgumentException_init('No box to remove');
      case 'WALL':
        throw IllegalArgumentException_init('No box to remove');
      case 'PLAYER':
        throw IllegalArgumentException_init('No box to remove');
      case 'STORAGE_LOCATION_WITH_PLAYER':
        throw IllegalArgumentException_init('No box to remove');
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    return tmp$;
  };
  Square.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Square',
    interfaces: []
  };
  Square.prototype.component1 = function () {
    return this.type;
  };
  Square.prototype.component2 = function () {
    return this.row;
  };
  Square.prototype.component3 = function () {
    return this.col;
  };
  Square.prototype.copy_yct8hp$ = function (type, row, col) {
    return new Square(type === void 0 ? this.type : type, row === void 0 ? this.row : row, col === void 0 ? this.col : col);
  };
  Square.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.row) | 0;
    result = result * 31 + Kotlin.hashCode(this.col) | 0;
    return result;
  };
  Square.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.row, other.row) && Kotlin.equals(this.col, other.col)))));
  };
  function SquareType(name, ordinal, code, isPlayer, isBox) {
    Enum.call(this);
    this.code = toBoxedChar(code);
    this.isPlayer = isPlayer;
    this.isBox = isBox;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SquareType_initFields() {
    SquareType_initFields = function () {
    };
    SquareType$EMPTY_instance = new SquareType('EMPTY', 0, 32, false, false);
    SquareType$PLAYER_instance = new SquareType('PLAYER', 1, 112, true, false);
    SquareType$WALL_instance = new SquareType('WALL', 2, 35, false, false);
    SquareType$STORAGE_LOCATION_instance = new SquareType('STORAGE_LOCATION', 3, 42, false, false);
    SquareType$STORAGE_LOCATION_WITH_PLAYER_instance = new SquareType('STORAGE_LOCATION_WITH_PLAYER', 4, 80, true, false);
    SquareType$BOX_instance = new SquareType('BOX', 5, 98, false, true);
    SquareType$STORAGE_LOCATION_WITH_BOX_instance = new SquareType('STORAGE_LOCATION_WITH_BOX', 6, 66, false, true);
    SquareType$Companion_getInstance();
  }
  var SquareType$EMPTY_instance;
  function SquareType$EMPTY_getInstance() {
    SquareType_initFields();
    return SquareType$EMPTY_instance;
  }
  var SquareType$PLAYER_instance;
  function SquareType$PLAYER_getInstance() {
    SquareType_initFields();
    return SquareType$PLAYER_instance;
  }
  var SquareType$WALL_instance;
  function SquareType$WALL_getInstance() {
    SquareType_initFields();
    return SquareType$WALL_instance;
  }
  var SquareType$STORAGE_LOCATION_instance;
  function SquareType$STORAGE_LOCATION_getInstance() {
    SquareType_initFields();
    return SquareType$STORAGE_LOCATION_instance;
  }
  var SquareType$STORAGE_LOCATION_WITH_PLAYER_instance;
  function SquareType$STORAGE_LOCATION_WITH_PLAYER_getInstance() {
    SquareType_initFields();
    return SquareType$STORAGE_LOCATION_WITH_PLAYER_instance;
  }
  var SquareType$BOX_instance;
  function SquareType$BOX_getInstance() {
    SquareType_initFields();
    return SquareType$BOX_instance;
  }
  var SquareType$STORAGE_LOCATION_WITH_BOX_instance;
  function SquareType$STORAGE_LOCATION_WITH_BOX_getInstance() {
    SquareType_initFields();
    return SquareType$STORAGE_LOCATION_WITH_BOX_instance;
  }
  SquareType.prototype.toString = function () {
    return String.fromCharCode(unboxChar(this.code));
  };
  function SquareType$Companion() {
    SquareType$Companion_instance = this;
  }
  SquareType$Companion.prototype.from_s8itvh$ = function (square) {
    var $receiver = SquareType$values();
    var tmp$, tmp$_0;
    var single = null;
    var found = false;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      if (unboxChar(element.code) === square) {
        if (found)
          throw IllegalArgumentException_init('Array contains more than one matching element.');
        single = element;
        found = true;
      }
    }
    if (!found)
      throw new NoSuchElementException_init('Array contains no element matching the predicate.');
    return (tmp$_0 = single) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  };
  SquareType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SquareType$Companion_instance = null;
  function SquareType$Companion_getInstance() {
    SquareType_initFields();
    if (SquareType$Companion_instance === null) {
      new SquareType$Companion();
    }
    return SquareType$Companion_instance;
  }
  SquareType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SquareType',
    interfaces: [Enum]
  };
  function SquareType$values() {
    return [SquareType$EMPTY_getInstance(), SquareType$PLAYER_getInstance(), SquareType$WALL_getInstance(), SquareType$STORAGE_LOCATION_getInstance(), SquareType$STORAGE_LOCATION_WITH_PLAYER_getInstance(), SquareType$BOX_getInstance(), SquareType$STORAGE_LOCATION_WITH_BOX_getInstance()];
  }
  SquareType.values = SquareType$values;
  function SquareType$valueOf(name) {
    switch (name) {
      case 'EMPTY':
        return SquareType$EMPTY_getInstance();
      case 'PLAYER':
        return SquareType$PLAYER_getInstance();
      case 'WALL':
        return SquareType$WALL_getInstance();
      case 'STORAGE_LOCATION':
        return SquareType$STORAGE_LOCATION_getInstance();
      case 'STORAGE_LOCATION_WITH_PLAYER':
        return SquareType$STORAGE_LOCATION_WITH_PLAYER_getInstance();
      case 'BOX':
        return SquareType$BOX_getInstance();
      case 'STORAGE_LOCATION_WITH_BOX':
        return SquareType$STORAGE_LOCATION_WITH_BOX_getInstance();
      default:throwISE('No enum constant challenge_three.SquareType.' + name);
    }
  }
  SquareType.valueOf_61zpoe$ = SquareType$valueOf;
  var toChar = Kotlin.toChar;
  function processSokobanMove(input, move) {
    var tmp$, tmp$_0;
    var board = Board$Companion_getInstance().from_mhpeer$(input);
    tmp$ = Direction$Companion_getInstance().of_s8itvh$(toChar(String.fromCharCode(move | 0).toUpperCase().charCodeAt(0)));
    if (tmp$ == null) {
      return board.toArray();
    }
    var direction = tmp$;
    try {
      tmp$_0 = board.move_oawyj1$(direction).toArray();
    }
     catch (ex) {
      if (Kotlin.isType(ex, IllegalMoveException)) {
        tmp$_0 = board.toArray();
      }
       else
        throw ex;
    }
    return tmp$_0;
  }
  function hasPlayerWon(board) {
    return !contains(joinToString(board, ''), 98);
  }
  function IllegalMoveException(message) {
    Exception_init(this);
    this.message_nytkct$_0 = message;
    this.name = 'IllegalMoveException';
  }
  Object.defineProperty(IllegalMoveException.prototype, 'message', {
    get: function () {
      return this.message_nytkct$_0;
    }
  });
  IllegalMoveException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IllegalMoveException',
    interfaces: [Exception]
  };
  function Game() {
    Game_instance = this;
    this.board = emptyList();
  }
  Game.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Game',
    interfaces: []
  };
  var Game_instance = null;
  function Game_getInstance() {
    if (Game_instance === null) {
      new Game();
    }
    return Game_instance;
  }
  function main$lambda$lambda(it) {
    var tmp$;
    var textArea = Kotlin.isType(tmp$ = document.getElementById('board'), HTMLTextAreaElement) ? tmp$ : throwCCE();
    Game_getInstance().board = split(textArea.value, ['\n']);
    printBoard(Game_getInstance().board);
    return Unit;
  }
  function main$lambda$lambda_0(it) {
    var tmp$;
    var event = Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE();
    switch (event.keyCode) {
      case 38:
        setNewBoard(event, 117);
        break;
      case 40:
        setNewBoard(event, 100);
        break;
      case 37:
        setNewBoard(event, 108);
        break;
      case 39:
        setNewBoard(event, 114);
        break;
    }
    printBoard(Game_getInstance().board);
    return Unit;
  }
  function main$lambda(it) {
    printBoard(Game_getInstance().board);
    var updateBoardEventListener = EventListener(main$lambda$lambda);
    addClickEventListener('right', createMoveEventListener(114));
    addClickEventListener('left', createMoveEventListener(108));
    addClickEventListener('up', createMoveEventListener(117));
    addClickEventListener('down', createMoveEventListener(100));
    addClickEventListener('readBoard', updateBoardEventListener);
    window.addEventListener('keydown', main$lambda$lambda_0);
    return Unit;
  }
  function main() {
    var initialBoard = listOf(['############################', '#                          #', '#  *     p            *    #', '#                          #', '#              b           #', '#                          #', '#  b       ######          #', '#          #    #          #', '#          #  * #          #', '#          # b* #    b     #', '#  b       #    #          #', '#          ## ###          #', '#                   # #    #', '#                   #*#    #', '#                   ###    #', '############################']);
    Game_getInstance().board = initialBoard;
    window.onload = main$lambda;
  }
  function createMoveEventListener$lambda(closure$direction) {
    return function (it) {
      Game_getInstance().board = processSokobanMove(Game_getInstance().board, closure$direction);
      printBoard(Game_getInstance().board);
      return Unit;
    };
  }
  function createMoveEventListener(direction) {
    return EventListener(createMoveEventListener$lambda(direction));
  }
  function addClickEventListener(elementId, eventListener) {
    var tmp$;
    (tmp$ = document.getElementById(elementId)) != null ? (tmp$.addEventListener('click', eventListener), Unit) : null;
  }
  function setNewBoard(event, c) {
    event.preventDefault();
    Game_getInstance().board = processSokobanMove(Game_getInstance().board, c);
  }
  function makeSquare(storageLocation, image) {
    var squareClass = storageLocation ? 'square storage-location' : 'square';
    var $receiver = document.createElement('span');
    $receiver.className = squareClass;
    var square = $receiver;
    if (image != null) {
      var tmp$;
      var $receiver_0 = Kotlin.isType(tmp$ = document.createElement('img'), HTMLImageElement) ? tmp$ : throwCCE();
      $receiver_0.src = image;
      square.appendChild($receiver_0);
    }
    return square;
  }
  function printBoard(board) {
    var $receiver = document.createElement('h1');
    $receiver.textContent = 'YOU HAVE WON!!!';
    var youHaveWon = $receiver;
    var sokobanDiv = document.getElementById('sokoban');
    var destination = ArrayList_init(collectionSizeOrDefault(board, 10));
    var tmp$;
    tmp$ = board.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var destination_0 = ArrayList_init(item.length);
      var tmp$_1;
      tmp$_1 = iterator(item);
      loop_label: while (tmp$_1.hasNext()) {
        var item_0 = unboxChar(tmp$_1.next());
        var tmp$_2 = destination_0.add_11rb$;
        var char = toBoxedChar(item_0);
        var transform$result;
        transform$break: do {
          switch (unboxChar(char)) {
            case 112:
              transform$result = makeSquare(false, 'dog.svg');
              break transform$break;
            case 35:
              transform$result = makeSquare(false, 'bricks.svg');
              break transform$break;
            case 42:
              transform$result = makeSquare(true, null);
              break transform$break;
            case 80:
              transform$result = makeSquare(true, 'dog.svg');
              break transform$break;
            case 98:
              transform$result = makeSquare(false, 'bone.svg');
              break transform$break;
            case 66:
              transform$result = makeSquare(true, 'bone.svg');
              break transform$break;
            default:transform$result = makeSquare(false, null);
              break transform$break;
          }
        }
         while (false);
        tmp$_2.call(destination_0, transform$result);
      }
      tmp$_0.call(destination, destination_0);
    }
    var boardArray = destination;
    sokobanDiv != null ? (sokobanDiv.innerHTML = '') : null;
    if (hasPlayerWon(board))
      sokobanDiv != null ? sokobanDiv.appendChild(youHaveWon) : null;
    var tmp$_3;
    tmp$_3 = boardArray.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      var row = document.createElement('div');
      var tmp$_4;
      tmp$_4 = element.iterator();
      while (tmp$_4.hasNext()) {
        var element_0 = tmp$_4.next();
        row.appendChild(element_0);
      }
      sokobanDiv != null ? sokobanDiv.appendChild(row) : null;
    }
  }
  Object.defineProperty(Direction, 'UP', {
    get: Direction$UP_getInstance
  });
  Object.defineProperty(Direction, 'DOWN', {
    get: Direction$DOWN_getInstance
  });
  Object.defineProperty(Direction, 'LEFT', {
    get: Direction$LEFT_getInstance
  });
  Object.defineProperty(Direction, 'RIGHT', {
    get: Direction$RIGHT_getInstance
  });
  Object.defineProperty(Direction, 'Companion', {
    get: Direction$Companion_getInstance
  });
  var package$challenge_three = _.challenge_three || (_.challenge_three = {});
  package$challenge_three.Direction = Direction;
  Object.defineProperty(Board, 'Companion', {
    get: Board$Companion_getInstance
  });
  package$challenge_three.Board = Board;
  package$challenge_three.Square = Square;
  Object.defineProperty(SquareType, 'EMPTY', {
    get: SquareType$EMPTY_getInstance
  });
  Object.defineProperty(SquareType, 'PLAYER', {
    get: SquareType$PLAYER_getInstance
  });
  Object.defineProperty(SquareType, 'WALL', {
    get: SquareType$WALL_getInstance
  });
  Object.defineProperty(SquareType, 'STORAGE_LOCATION', {
    get: SquareType$STORAGE_LOCATION_getInstance
  });
  Object.defineProperty(SquareType, 'STORAGE_LOCATION_WITH_PLAYER', {
    get: SquareType$STORAGE_LOCATION_WITH_PLAYER_getInstance
  });
  Object.defineProperty(SquareType, 'BOX', {
    get: SquareType$BOX_getInstance
  });
  Object.defineProperty(SquareType, 'STORAGE_LOCATION_WITH_BOX', {
    get: SquareType$STORAGE_LOCATION_WITH_BOX_getInstance
  });
  Object.defineProperty(SquareType, 'Companion', {
    get: SquareType$Companion_getInstance
  });
  package$challenge_three.SquareType = SquareType;
  package$challenge_three.processSokobanMove_ilwz0q$ = processSokobanMove;
  package$challenge_three.hasPlayerWon_mhpeer$ = hasPlayerWon;
  package$challenge_three.IllegalMoveException = IllegalMoveException;
  Object.defineProperty(package$challenge_three, 'Game', {
    get: Game_getInstance
  });
  package$challenge_three.main = main;
  package$challenge_three.makeSquare_ifx8ge$ = makeSquare;
  package$challenge_three.printBoard_mhpeer$ = printBoard;
  main();
  Kotlin.defineModule('sokoban-js', _);
  return _;
}(typeof this['sokoban-js'] === 'undefined' ? {} : this['sokoban-js'], kotlin);
