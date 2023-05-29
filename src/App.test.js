import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";


describe("App component", () => {


    //Test 1
    //we utilize snapshots to check whether all the nodes render as we expect them to. 
    //Snapshot will look like a structured HTML file of that container
    it("renders magnificent monkeys", () => {
      // since screen does not have the container property, we'll destructure render to obtain container for this test
      const { container } = render(<App />);
      expect(container).toMatchSnapshot();
    });
    


    //Test 2
    //simulate a click event. Then we check if the heading changed. 
    //toMatch is one of the various assertions we could have made.
    it("renders radical rhinos after button click", async () => {

       //get user interactions with page with "userEvent" & begins simulation with .setup() from react testing library
      const user = userEvent.setup();
  
     //Render's App component
      render(<App />);

      //Get the DOM element by role.
      const button = screen.getByRole("button", { name: "Click Me" });
  
        //Tell user to click button
        //.click() is asynchronous
      await user.click(button);
  
      //What to expect?
      //Expect <h1> tag below button, to change to a case insensitive string = 'radical rhinos'
      expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
    });
    
  });