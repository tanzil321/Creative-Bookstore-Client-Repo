import React from 'react';

const Blog = () => {
    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 '>
      <div className='max-w-xl sm:mx-auto lg:max-w-2xl'>
        <div className='max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12'>
          <h2 className='max-w-lg text-center mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gold-900 sm:text-4xl md:mx-auto'>
            Todays Questions !!
          </h2>
          <p className='text-base text-center text-gray-400 md:text-lg'>
            Here is our some questions about Course related. Assessment, instruction, and practice that motivate every student to mastery.
          </p>
        </div>
      </div>
      <div className='max-w-screen-xl sm:mx-auto '>
        <div className='grid grid-cols-1 px-10 py-5 mx-auto shadow-lg bg-zinc-400  gap-16 row-gap-8 lg:grid-cols-1 '>
          <div className='space-y-8 '>
            <div>
              <p className='mb-4 text-2xl font-medium text-gold-'>
              What are the different ways to manage a state in a React application?
              </p>
              <p className='text-gray-700'>
              
              1. Local (UI) state – Local state is data we manage in one or another component.Local state is most often managed in React using the useState hook. <br />
              2. Global (UI) state – Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
              3. Server state – Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
              4. URL state – Data that exists on our URLs, including the pathname and query parameters.

URL state is often missing as a category of state, but it is an important one.
In many cases, a lot of major parts of our application rely upon accessing URL state. <br />
              
                <br />
                Here, we break down the most important distinctions and discuss the different ways to manage a state in a React application.
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              How does prototypical inheritance work?
              </p>
              <p className='text-gray-700'>
              Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.
                <br />
                <br />
                How does ut work? : ChildObject.__proto__ = ParentObject
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              What is a unit test? Why should we write unit tests?
              </p>
              <p className='text-gray-700'>
              Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages. <br /> <br />

Unit testing is a component of test-driven development (TDD), a pragmatic methodology that takes a meticulous approach to building a product by means of continual testing and revision. This testing method is also the first level of software testing, which is performed before other testing methods such as integration testing. Unit tests are typically isolated to ensure a unit does not rely on any external code or functions. Testing can be done manually but is often automated.
           
              </p>
            </div>
            <div>
              <p className='mb-4 text-2xl font-medium'>
              React vs. Angular vs. Vue?
              </p>
              <p className='text-gray-700 text-xl font-bold'>
              React JS 
              </p>
              <p className='text-gray-700'>Customizable - The crucial difference between the library and framework is about control. This is where React is ahead of Angular- it is highly customizable. You are in control and you incorporate the parts of the library you need, unlike Angular, which does not allow much modification.</p>
              <p className='text-gray-700 text-xl font-bold'>
              Angular JS 
              </p>
              <p className='text-gray-700'>
              Angular is a robust framework that has all the needed functionalities packed into its official library. And since it is from Google, you can be assured of the quality of code and high-end security features. Web development with Angular JS requires fewer imports of third-party libraries, significantly reducing app development costs.
              </p>
              <p className='text-gray-700 text-xl font-bold'>
              Vue JS 
              </p>
              <p className='text-gray-700'>
              Vue is best utilized in cases of lightweight yet high performance, intuitive apps as the applications are quickly ready for the market without compromising on the performance or functionalities. Let us take a quick look at what makes Vue JS a lucrative choice for businesses.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    );
};

export default Blog;