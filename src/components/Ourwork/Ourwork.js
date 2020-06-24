import React from "react";
import "./Ourwork.css";
function Draggable(props) {
  const { children, onDragStart, onDragEnd, value} = props;
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
      // className={className}
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

const LIST = [...Array(11).keys()].map((e) => {
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
      <div className="bkg">
        <div className="h1 text-center text-white text-shadow titleSize">
          OUR <b>MAGICAL WORKS</b>
        </div>
        {/* className="p-3" */}
        <div>
          <div className="moa">
            {list.map((e, i) => {
              return (
                <div>
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
                      <div>
                        <img
                          key={i}
                          src={e}
                          style={{minWidth:"150px", objectFit:"contain"}}
                        />
                      </div>
                    </Draggable>
                  </Droppable>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-6 addBtn">
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
  const { children, deg = randInt(360), bg } = props;
  const classNames = [

  ];
  // if (flex) classNames.push("d-flex");
  return (
    <div >
      {children}
    </div>
  );
}

function Details(props) {
  const { summary = "details", children, className = "" } = props;
  return (
    <details>
      <summary>{summary}</summary>
      <div>{children}</div>
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
    <pre >
      <code>{children}</code>
    </pre>
  );
}

function randInt(n = 10) {
  return Math.floor(Math.random() * n);
}

export default Ourwork;
