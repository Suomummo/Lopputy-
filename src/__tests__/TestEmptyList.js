import {  render, screen } from '@testing-library/react';
import SavedTimes from '../SavedTimes';

test('testing empty list', () => {
    render(<SavedTimes name = "SavedTimes 1"/>);

    let text = screen.getByText(/Saved Times/i)
    expect(text).toBeInTheDocument();
    text = screen.getByText(/No times saved!/i)
    expect(text).toBeInTheDocument();
})