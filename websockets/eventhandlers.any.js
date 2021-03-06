// META: script=websocket.sub.js

function testEventHandler(name) {
  test(function() {
    var ws = new WebSocket("ws://" + __SERVER__NAME + ":" + __PORT + "/" + __PATH,
                           "echo")
    assert_equals(ws["on" + name], null);
    ws["on" + name] = function() {};
    ws["on" + name] = 2;
    assert_equals(ws["on" + name], null);
  }, "Event handler for " + name + " should have [TreatNonCallableAsNull]")
}
["open", "error", "close", "message"].forEach(testEventHandler);
