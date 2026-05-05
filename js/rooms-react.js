/* React room cards island */
(function roomsReactIsland() {
  if (!window.React || !window.ReactDOM) return;
  const e = React.createElement;
  let root = null;

  function RoomCardItem(props) {
    const room = props.room;
    const selected = props.selected;
    const onSelect = props.onSelect;
    const dotClass =
      room.status === "available"
        ? "s-available"
        : room.status === "occupied"
        ? "s-occupied"
        : "s-soon";
    const timeText =
      room.status === "occupied"
        ? "Free at " + room.nextFree
        : room.status === "soon"
        ? room.nextFree
        : "Free now";

    return e(
      "div",
      {
        className: "rli" + (selected ? " selected" : ""),
        onClick: function onClick() {
          onSelect(room);
        },
      },
      e("div", { className: "rli-dot " + dotClass }),
      e(
        "div",
        { className: "rli-body" },
        e("div", { className: "rli-name" }, room.name),
        e("div", { className: "rli-meta" }, room.building + " · Floor " + room.floor),
        room.session ? e("div", { className: "rli-session" }, '"' + room.session + '"') : null,
        e(
          "div",
          { className: "rli-equip" },
          room.equip.slice(0, 3).map(function mapTag(eq, idx) {
            return e("span", { className: "rli-tag", key: room.id + "-" + idx }, eq);
          })
        )
      ),
      e(
        "div",
        { className: "rli-right" },
        e(
          "div",
          null,
          e("div", { className: "rli-cap" }, room.cap),
          e("div", { className: "rli-cap-lbl" }, "seats")
        ),
        e("div", { className: "rli-time" }, timeText)
      )
    );
  }

  function RoomList(props) {
    return e(
      React.Fragment,
      null,
      props.rooms.map(function mapRoom(room) {
        return e(RoomCardItem, {
          key: room.id,
          room: room,
          selected: props.selectedRoomId === room.id,
          onSelect: props.onSelect,
        });
      })
    );
  }

  window.renderRoomListReact = function renderRoomListReact(container, rooms, selectedRoomId, onSelect) {
    if (!container) return false;
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(
      e(RoomList, {
        rooms: rooms,
        selectedRoomId: selectedRoomId,
        onSelect: onSelect,
      })
    );
    return true;
  };
})();
