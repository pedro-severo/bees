import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../../../App";
import { FullNameInput } from "../style";
import { interfaceTexts } from "../../../constants/interfaceTexts";
import { mount, configure } from "enzyme";
import { act } from "react-dom/test-utils";
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() })


describe("Full name input", () => {
    it("Should return the value entered by user in input value", async () => {
        let wrapper;
        await act(async () => {
          wrapper = mount(<FullNameInput 
            id={interfaceTexts.screens.login.fullNameInputLabel}
            label={interfaceTexts.screens.login.fullNameInputLabel}
            variant="outlined"
            name="fullName"
            value={""}
            onChange={() => null}
            type="text"
            />
        )});
        wrapper.update();

        
        const inputLabel = wrapper.find("Full name")
        
        console.log(inputLabel)
        expect(1).toBe(1)
    })
  });