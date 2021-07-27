import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import userEvent from '@testing-library/user-event'
import {fireEvent, render,screen} from '@testing-library/react'
import Landing from './Landing';
import {Router} from 'react-router-dom';
import { createMemoryHistory } from 'history'

test('render content',async ()=>{
    
    const history = createMemoryHistory()
    const component = render(
        <Router history={history}>
            <Landing/>
        </Router>
    )
    const leftClick = { button: 0 };
    userEvent.click(screen.getByText(/Go/i), leftClick)

    const element= component.getByText("Go")
    screen.debug();
    expect(element).toBeDefined();

    let A = await screen.findByText(/Go/i)
})
