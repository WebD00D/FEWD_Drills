import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <section>
      <h1>Frontend Web Development </h1>
      <h3>Study Guide for the Fundamentals</h3>
    </section>

    <section>
      <h4>HTML</h4>
      <div>
          <ol>
            <li>Describe the difference between an element, tag, and attribute</li>
            <li>Explaining what is meant when people say HTML is about <i>structure</i> (vs. style or behavior)</li>
            <li>What is semantic HTML?</li>
            <li>Using Chrome Dev tools, inspect a web page and change the text of a page element</li>
            <li>What is A11y? </li>
            {/* <small>https://a11yproject.com/checklist</small> */}
          </ol>
      </div>
    </section>

    <section>
      <h4>CSS</h4>
      <div>
          <ol>
            <li>Describing the different parts of a CSS ruleset (the selector, the declaration block, declarations, properties, values)</li>
            <li>Explaining what is meant when people say CSS is about presentation (vs. structure or behavior)</li>
            <li>Explaining the box model?</li>
            <li>Write a class that will make an element have the following property values:
              <ul>
                <li>Is a 100 x 100px square</li>
                <li>Has a solid 2px wide border that has #CCCCCC as its color</li>
                <li>Display text inside it that is centered vertically and horizontally</li>
                <li>This text should have 2px of letter spacing, have a font size of 10px, and should be all uppercase</li>
                <li>When hovered over, the element's border color should switch to #252525</li>
                <li>Extra Credit: Make the border color have a smooth transition</li>
                <li><div className="css-question-four">example</div></li>
              </ul>
            </li>
            <li>Explain static, relative, absolute, and fixed positioning
              <ul>
                <li>* A common beginner mistake is to start setting the display property on all your CSS classes. Don't do this. Often, the default settings will be what you need. Only explicitly set the display property if you have a specific reason to do so.</li>
              </ul>
            </li>

            <li>Using Flexbox, explain or re-create this:
            <ul>
              <li>
              <div className="flex-sample">
                <div className="flex-sample-box">1</div>
                <div className="flex-sample-box">2</div>
                <div className="flex-sample-box">3</div>
              </div>
              </li>
            </ul>
            </li>

          </ol>
      </div>
    </section>


    <section>
      <h4>Forms</h4>
      <div>
          <ol>
            <li>Using Chrome Dev tools, insepct the form below. Note the elements, and any specific attributes they may have</li>
          </ol>
          <form action="/">
            <fieldset>
              <legend>Basic Info:</legend>
              <label htmlFor="name">Name</label><br />
              <input name="name" type="text"  /><br/>
              <label htmlFor="age">Age</label><br />
              <input name="age" type="number"  /><br/>
              <label htmlFor="city">City</label><br />
              <select name="city">
                <option>Los Angeles</option>
                <option>San Francisco</option>
                <option>Austin</option>
                <option>New York City</option>
              </select> <br />
              <label htmlFor="newsletter">Subscribe to newsletter</label><br/>
              <input name="newsletter" type="checkbox" /><br />
              <button type="submit">Submit</button>


            </fieldset>
          </form>
      </div>
    </section>


    <section>
      <h4>Responsive Layouts</h4>
      <div>
          <ol>
            <li>Describe what <i>responsive</i> means in web dev terms</li>
            <li>What are media queries and why are they important to responsive layouts?</li>

          </ol>
      </div>
    </section>


    <section>
      <h4>JavaScript</h4>
      <div>
          <ol>
            <li>What is a variable?</li>
            <li>Describe the difference between <code>let</code> and <code>const</code></li>
            <li>Write a variable that holds the data type of <code>String</code> </li>
            <li>Write a variable that holds the data type of <code>Number</code> </li>
            <li>Write a variable that holds the data type of <code>Boolean</code> </li>
            <li>Write a variable that holds the data type of an <code>Object</code> </li>
            <li>Write a variable that holds the data type of an <code>Array</code> </li>
            <li>Explain the difference between <code>null</code> and <code>undefined</code></li>
            <li>What is a function?</li>
            <li>Declare and invoke a function called <code>runThisCode</code></li>
            <li>Write an ES5 Function called <code>sayHello</code> that takes a <i>Name</i> argument and logs out <pre>"Hello, [name]!"</pre></li>
            <li>Write the same function using ES6</li>
            <li>Template literals, why are they better than traditional string concatenation? </li>
            <li>Basic math (PMDAS)</li>
            <li>What is <i>control flow</i>?</li>
            <li>What does it mean to be "truthy"?</li>
            <li>What are conditionals?</li>
            <li>What is the ternary operator?</li>
            <li>Create an array with 8 grocery list items</li>
            <li>Verify your grocery list has 8 items on it</li>
            <li>Log out the 2nd item in your grocery list array</li>
            <li>Add another item to your grocery list</li>
            <li>Sort your grocery list alphabetically</li>
            <li>Map over the list and return each item inside an <code>li</code> element</li>
            <li>Using a template literal, append your array of list items to an ordered list</li>
            <li>Write a <code>for</code> loop, that logs out the numbers 1-10</li>
            <li>What's the difference between global scope and local scope?</li>
            <li>Why are globals scary?</li>
            <li>Create a Student object with name, age, and grade properties</li>
            <li>Add a function to the student object that logs out <pre>Hello, my name is [name], and I'm in grade [grade].</pre></li>
            <li>What is the DOM?</li>
            <li>What is jQuery?</li>
            <li>Write a function that handles the click event for an element with the id of "btnClickMe"</li>
            <li>What is event delegation? Show an example.</li>
            <li>What's spaghetti code?</li>
            <li>What's a user story? Why would you use these?</li>
            <li>What's a function stub?</li>


          </ol>
      </div>
    </section>

  </div>
)

export default IndexPage
