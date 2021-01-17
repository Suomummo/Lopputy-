import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../Counter';

test('testing save item', () => {
    render(<Counter name = "Counter 1"/>);

    const button = screen.getByText('Save');
    expect(button).toBeInTheDocument();
    const input = screen.getByPlaceholderText(/Title/i);
    expect(input).toBeInTheDocument();
    userEvent.type(input, 'testvalue');
    userEvent.click(button);

    let item = screen.getByRole('listitem', {value: 'testvalue'})
    expect(item).toBeInTheDocument();
})