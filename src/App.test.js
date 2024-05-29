import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('카운터는 0부터 시작합니다.', () => {
    render(<App />);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(0);
});

test('감소버튼의 텍스트를 확인합니다.', () => {
    render(<App />);

    const buttonElement = screen.getByTestId('minus-button');
    expect(buttonElement).toHaveTextContent('-');
});

test('증가버튼의 텍스트를 확인합니다.', () => {
    render(<App />);

    const buttonElement = screen.getByTestId('plus-button');
    expect(buttonElement).toHaveTextContent('+');
});

test('+ 버튼을 누르면, 카운터가 1 증가합니다.', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('plus-button');
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(1);
});

test('- 버튼을 누르면, 카운터가 1 감소합니다.', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('minus-button');
    fireEvent.click(buttonElement);
    const counterElement = screen.getByTestId('counter');
    expect(counterElement).toHaveTextContent(-1);
});

test('온/오프 버튼의 색을 확인합니다.', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('on/off-button');
    expect(buttonElement).toHaveStyle({ backgroundColor: 'blue' });
});

test('온/오프 버튼 클릭시 +, - 버튼을 비활성화합니다.', () => {
    render(<App />);
    const onOffButtonElement = screen.getByTestId('on/off-button');
    fireEvent.click(onOffButtonElement);
    const plusButtonElement = screen.getByTestId('plus-button');
    expect(plusButtonElement).toBeDisabled();
});
