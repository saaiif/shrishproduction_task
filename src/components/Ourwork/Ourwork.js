import React from "react";
import "./Ourwork.css";
function Draggable(props) {
  const { children, onDragStart, onDragEnd, value, className = "" } = props;
  function handleDragStart(e) {
    if (typeof onDragStart === "function") onDragStart(e, value);
  }
  function handleDragEnd(e) {
    if (typeof onDragEnd === "function") onDragEnd(e);
  }
  return (
    <div
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={className}
      draggable
    >
      {children}
    </div>
  );
}

function Droppable(props) {
  const { children, onDragOver, onDrop, className = "", value } = props;
  function handleDragOver(e) {
    e.preventDefault();
    if (typeof onDragOver === "function") onDragOver(e);
  }
  function handleDrop(e) {
    e.preventDefault();
    if (typeof onDrop === "function") onDrop(e, value);
  }
  return (
    <div onDragOver={handleDragOver} onDrop={handleDrop} className={className}>
      {children}
    </div>
  );
}

const DEG = randInt(360);
const FLEX = false;

const LIST = [...Array(8).keys()].map((e) => {
  return `https://picsum.photos/125?${randInt()}`;
});

function Ourwork() {
  const [index, setIndex] = React.useState();
  const [list, setList] = React.useState([...LIST]);
  const btn = React.useRef();

  function handleUpload(e) {
    if (typeof btn === "object" && btn !== null) {
      const { current } = btn;
      if (typeof current === "object" && current !== null) {
        current.click();
      }
    }
  }

  function handleChange(e) {
    e.preventDefault();
    setList([...list, URL.createObjectURL(e.target.files[0])]);
  }

  function handleDragStart(e, i) {
    setIndex(i);
  }

  function handleDragEnd(e) {
    setIndex();
  }

  function handleDragOver(e) { }

  function handleDrop(e, i) {
    if (typeof index === "number" && typeof i === "number") {
      const a = index < i ? index : i;
      const b = index < i ? i : index;
      setList([
        ...list.slice(0, a),
        list[b],
        ...list.slice(a + 1, b),
        list[a],
        ...list.slice(b + 1),
      ]);
    }
  }

  return (
    <FlexContainer deg={DEG} flex={FLEX}>
      <div className="container bkg">
        <div className="h1 text-center text-white text-shadow pt-10 titleSize">
          OUR <b>MAGICAL WORKS</b>
        </div>
        <div className="p-3">
          <div className="form-row">
            {list.map((e, i) => {
              return (
                <div className="col-4">
                  <Droppable
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    value={i}
                  >
                    <Draggable
                      onDragStart={handleDragStart}
                      onDragEnd={handleDragEnd}
                      value={i}
                    >
                      <div className="myImg">
                        <img
                          key={i}
                          src={e}
                          className="w-100 border p-1 m-2 shadow-sm"
                          style={{ maxHeight: 150, objectFit: "contain" }}
                        />
                      </div>
                    </Draggable>
                  </Droppable>
                </div>
              );
            })}
          </div>
          <div className="text-center mb-3 mt-6">
            <button
              className="btn btn-success btn-sm pl-3 pr-3 rounded-pill shadow"
              onClick={handleUpload}
            >
              Add More
            </button>
            <input
              className="d-none"
              type="file"
              ref={btn}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </FlexContainer>
  );
}

function FlexContainer(props) {
  const { children, deg = randInt(360), bg, style = {}, flex = true } = props;
  const classNames = [
    "align-content-center align-items-center justify-content-center flex-wrap w-100 v-100 vh-100",
  ];
  if (flex) classNames.push("d-flex");
  return (
    <div className={classNames.join(" ")} style={style}>
      {children}
    </div>
  );
}

function Details(props) {
  const { summary = "details", children, className = "" } = props;
  return (
    <details className={className}>
      <summary>{summary}</summary>
      <div className="mt-3 animated faster slideInDown">{children}</div>
    </details>
  );
}

function PreCode(props) {
  const { ugly, className = "", children } = props;

  if (typeof children === "object" && children !== null) {
    if (ugly) {
      return <PreCode {...props}>{JSON.stringify(children)}</PreCode>;
    }
    return <PreCode {...props}>{JSON.stringify(children, null, 2)}</PreCode>;
  }

  return (
    <pre className={`p-3 bg-dark text-white rounded shadow ${className}`}>
      <code>{children}</code>
    </pre>
  );
}

function randInt(n = 10) {
  return Math.floor(Math.random() * n);
}

export default Ourwork;
