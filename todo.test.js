import React from "react";
import { render,screen } from '@testing-library/react';
import Todo from './todo'
import userEvent from "@testing-library/user-event";
test('initial check to whether input taker is present in document using testid',()=>{
    render(<Todo />)
    const result=screen.getByTestId('input')
    expect(result).toBeInTheDocument()
})

test('to check input taker is present in document using placeholder text',()=>{
    render(<Todo />)
    const result=screen.getByPlaceholderText("Enter task here")
    expect(result).toBeInTheDocument()
})


test('to check tasks are visible on screen',()=>{
    render(<Todo initialtask={"Eat"} />)
    render(<Todo Task={"sleep"} />)
    const result=screen.getAllByTestId('display')
    expect(result[0]).toBeVisible("Eat")
    expect(result[1]).toBeVisible("sleep")
})

test('to check remove button is disabled if there are no tasks',()=>{
    render(<Todo />)
    const removebutton=screen.getByText("RemoveAll")
    expect(removebutton).toBeDisabled();

})

test('to check if the tasks are empty when clicked remove all',()=>{
    render(<Todo />)
    const removebutton=screen.getByText("RemoveAll")
    userEvent.click(removebutton)
    const result=screen.getByTestId('display')
    expect(result).toBeEmptyDOMElement()

})