import Hero from "./css/hero.module.css";
import React from "react";

const Story = () => {
    return (
        <div className={`${Hero.storyMain} flex flex-col lg:flex-row justify-center w-full p-4`}>
            <div className="mt-8 flex flex-col items-center lg:items-start lg:w-1/2">
                <img className={`${Hero.storyImg} w-64 lg:w-72`} src="./images/about2.jpeg" alt="image one" />
                <img className={`${Hero.storyImg} w-64 lg:w-72 ml-0 lg:ml-28 -mt-6`} src="./images/about2.jpeg" alt="image two" />
                <img className={`${Hero.storyImg} w-64 lg:w-72 -mt-6`} src="./images/about3.jpeg" alt="image three" />
            </div>

            <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
                <h5 className="text-2xl font-bold">Our Story...........</h5>
                <h3 className="text-2xl">About Fortrust Digital Consulting</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Vel orci blandit vivamus urna. Nunc laoreet laoreet massa at. Urna sem nam in sit sed vitae. Convallis lectus id est pretium morbi sit adipiscing. Pellentesque tellus sit enim elementum scelerisque gravida nec. Diam orci nibh ultrices eget accumsan dui luctus id auctor. Arcu leo sagittis aenean feugiat mattis porttitor eros elit risus. Lobortis non nec in amet urna. Neque donec aliquam vivamus viverra morbi. Donec orci sit amet est velit ultricies nisl lorem. Rutrum nunc natoque diam sed curabitur in donec turpis enim
                </p>

                <p>
                    Aenean faucibus auctor sagittis ornare ac sapien. Laoreet aenean porta convallis amet pellentesque porttitor odio dui. Erat sit platea vitae in parturient egestas etiam. Ornare vitae orci maecenas adipiscing dolor facilisis habitasse mattis. Eget magna neque eget eleifend velit viverra sem praesent ultricies. Facilisi diam luctus tortor fusce parturient proin nulla. Integer mi elit amet mollis gravida sapien mollis. Tempor bibendum phasellus magna odio nisi quam non lectus nullam. Ut et duis et nibh imperdiet quis. Amet vitae quisque donec id vitae eu odio.
                </p>

                <p>
                    Odio pharetra pretium nec purus. Praesent vel tellus non et. Fusce fusce vulputate lacus morbi pulvinar tellus. Molestie malesuada enim volutpat diam neque ut consequat. Nunc massa risus quis aliquet sem enim pellentesque sed lacus. Donec vitae turpis sit sit sit massa vulputate ultrices odio. Pharetra fringilla gravida urna nibh mattis maecenas ut habitant.
                </p>
            </div>
        </div>
    );
}

export default Story;
