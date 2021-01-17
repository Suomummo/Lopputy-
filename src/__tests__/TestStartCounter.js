import { fireEvent, render, screen, wait, waitFor } from '@testing-library/react';
import Counter from '../Counter';

jest.useFakeTimers();
test('testing startcounter', () => {
    render(<Counter name = "Counter 1"/>);
    const button = screen.getByText(/Start/i);
    fireEvent.click(button)
    expect(screen.getByText(/Counting!/i)).toBeInTheDocument();
})