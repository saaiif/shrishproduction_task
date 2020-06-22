import React from 'react'

import './about.css'

const About = () => {
    return (
        <div className="AboutMain">
            <section class="text-gray-700 body-font overflow-hidden">
                <div class="container px-5 meToo">
                    <div class="lg:w-1/2  flex flex-wrap">

                        <div class="lg:w-4/4 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ">
                            {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">ABOUT <b>US</b></h1>
                            <p class="leading-relaxed">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<b> Id cum tempora, aspernatur possimus</b> harum ut minima nihil suscipit quibusdam? Harum, culpa. Voluptatum nam minima possimus hic, esse eum deleniti porro?.Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. <b>XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn</b>. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin <b>listicle pour-over</b>, neutra jean shorts keytar banjo tattooed umami cardigan.
                            </p>

                            <div class="flex">
                                <button className="abtBtn">our works</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default About
