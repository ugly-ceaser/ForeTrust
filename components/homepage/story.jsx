import React from 'react';

const Story = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-4 lg:p-10">
      {/* Left Side: Overlapping Image*/}
      <div className="relative lg:w-1/2 flex flex-col items-center lg:items-start">
        <div className="w-64 lg:w-72 mb-8 relative z-10">
          <img
            src="/images/heroImg1.webp"
            alt="Image One"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-64 lg:w-72 lg:-mt-10 ml-10 lg:ml-14 transform translate-x-6 lg:translate-x-12 relative z-20">
          <img
            src="/images/heroImg1.webp"
            alt="Image Two"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-64 lg:w-72 mt-12 sm:mt-7 lg:-mt-8 relative z-10">
  <img
    src="/images/heroImg1.webp"
    alt="Image Three"
    className="rounded-lg shadow-md"
  />
</div>

      </div>

      {/* Right Side: Title, Subtitle, and Paragraphs */}
      <div className="lg:w-1/2 lg:pl-16 mt-10 lg:mt-0">
      <div className="sm:text-center lg:text-left">
          <h5 className="text-3xl font-bold mb-4">Our Story...........</h5>
          <h3 className="text-2xl text-teal-700 font-semibold mb-6">
            About Fortrust Digital Consulting
          </h3>
        </div>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel orci blandit vivamus urna. Nunc laoreet laoreet massa at. Urna sem nam in sit sed vitae. Convallis lectus id est pretium morbi sit adipiscing. Pellentesque tellus sit enim elementum scelerisque gravida nec. Diam orci nibh ultrices eget accumsan dui luctus id auctor.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Arcu leo sagittis aenean feugiat mattis porttitor eros elit risus. Lobortis non nec in amet urna. Neque donec aliquam vivamus viverra morbi. Donec orci sit amet est velit ultricies nisl lorem. Rutrum nunc natoque diam sed curabitur in donec turpis enim Aenean faucibus auctor sagittis ornare ac sapien.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Laoreet aenean porta convallis amet pellentesque porttitor odio dui. Erat sit platea vitae in parturient egestas etiam. Ornare vitae orci maecenas adipiscing dolor facilisis habitasse mattis. Eget magna neque eget eleifend velit viverra sem praesent ultricies. Facilisi diam luctus tortor fusce parturient proin nulla.
        </p>
        
      </div>
    </div>
  );
};

export default Story;
