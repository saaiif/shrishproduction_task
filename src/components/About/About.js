import React from "react";
import EditableText from "../../components/edit";
import "./about.css";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "About Us",
      instructions: [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.Id cum tempora",
        "aspernatur possimus harum ut minima nihil suscipit quibusdam ? Harum",
        "culpa.Voluptatum nam minima possimus hic, esse eum deleniti",
        " porro?.Fam locavore kickstarter distillery.Mixtape chillwave tumeric",
        " sriracha taximy chia microdosing tilde DIY.XOXO fam indxgo juiceramps ",
        "cornhole raw denim forage brooklyn.Everyday carry + 1 seitan poutine",
        "tumeric.Gastropub blue bottle austin listicle pour - over, neutra jean",
        "shorts keytar banjo tattooed umami cardigan.",
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
      <div className="AboutMain">
        <section class="text-gray-700 body-font overflow-hidden">
          <div class="container px-5 meToo">
            <div class="lg:w-1/2  flex flex-wrap">
              <div class="lg:w-4/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
                <h1>
                  <EditableText
                    value={this.state.name}
                    editClassName="form-control"
                  />
                </h1>

                <div className="row">
                  <div className="col-12">
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
                <div class="flex">
                  <button className="abtBtn">our works</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
