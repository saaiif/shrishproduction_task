import React from "react";
import EditableText from "../../components/edit";
import "./service.css";

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Services we provide",
      name: "CREATIVE DESIGN",
      name2: "QUALITY PRINT",
      name3: "EFFECTIVE ADS",
      instructions: [
        'LOGOS',
'BROUCHER',
'FLYER',
'MENUCARD',
'CATALOGUES',
'CARD',
'WEBDESIGNING',
'ANIMATION',
'HOARDING',
'FLYER',
'MENUCARD',
'CATALOGUES',
'CARD',
'BUSINESS CARDS',
'THROPIES',
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    console.log("handleClick", event.target.name);
    eval(this[event.target.name]).bind(this)(event);
  }
  render() {
  return (
    <div>
      <div className="background">
        <div className="wrapper">
          <div className="serHeading">
            <h1>
              <EditableText
                value={this.state.title}
                editClassName="form-control"
              />
            </h1>
          </div>

{/* First Part */}

          <div className="panel pricing-table">
            <div className="pricing-plan">

            <div className="serviceCons">
              <i class="fas fa-layer-group"></i>
            </div>
            <h1 className="pricing-header">
              <EditableText
                value={this.state.name}
                editClassName="form-control"
              />
            </h1>

            <div className="row">
              <div className="col-12 list">
                <ul className="list-unstyled">
                  {this.state.instructions.map((entry) => (
                    <li>
                      <EditableText
                        value={entry}
                        editClassName="form-control"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
</div>
            {/* Second Prt */}

            <div className="pricing-plan middleMan">
              <div className="serviceCons">
                <i class="fas fa-print"></i>
              </div>
              <h1 className="pricing-header">
                <EditableText
                  value={this.state.name2}
                  editClassName="form-control"
                />
              </h1>

            <div className="row">
                <div className="col-12 list">
                <ul className="list-unstyled">
                  {this.state.instructions.map((entry) => (
                    <li>
                      <EditableText
                        value={entry}
                        editClassName="form-control"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
</div>

{/* Third part */}
            <div className="pricing-plan">
              <div className="serviceCons">
                <i class="fas fa-volume-up"></i>
              </div>
              <h1 className="pricing-header">
                <EditableText
                  value={this.state.name3}
                  editClassName="form-control"
                />
              </h1>

              <div className="row">
                <div className="col-12 list">
                  <ul className="list-unstyled pricing-features">
                    {this.state.instructions.map((entry) => (
                      <li className="pricing-features-item">
                        <EditableText
                          value={entry}
                          editClassName="form-control"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="pricing-plan">
              <div className="serviceCons">
                <i class="fas fa-volume-up"></i>
              </div>
              <h2 className="pricing-header">effective ads</h2>
              <ul className="pricing-features">
                <li className="pricing-features-item">menucard</li>
                <li className="pricing-features-item">catalogues</li>
                <li className="pricing-features-item">Id card</li>
                <li className="pricing-features-item">Logos</li>
                <li className="pricing-features-item">broucher</li>
                <li className="pricing-features-item">Flyer</li>
                <li className="pricing-features-item">web designing</li>
                <li className="pricing-features-item">Animation</li>
                <li className="pricing-features-item">Hoarding</li>
              </ul>
            </div> */}

          </div>
        </div>
      </div>
    </div>
  );
}
}
