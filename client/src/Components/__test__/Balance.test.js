import React from 'react';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import Balance from '../Balance';

afterEach(cleanup);

it('renders', () => {
    const { asFragment } = render(<Balance />);
    expect(asFragment()).toMatchSnapshot();
});

if("Finds the balance", () => {
    const { getByTestId, getByText } = render(<Balance />);

    expect(getByTestId("h3tag")).toHaveTextContent(300);
    
});