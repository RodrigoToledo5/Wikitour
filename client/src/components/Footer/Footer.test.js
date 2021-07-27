import React from 'react';
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'
import Footer from './Footer'

test('render content', ()=>{
    const component = render(<Footer/>)
    const element= component.getByText("Created by Rodrigo Toledo")
    expect(element).toBeDefined();
})

