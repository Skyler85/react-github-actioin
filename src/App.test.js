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
    expect(buttonElement).toHaveStyle({ backgroundColor: 'white' });
});

// test('온/오프 버튼 클릭시 +, - 버튼을 비활성화합니다.', () => {
//     render(<App />);
//     const onOffButtonElement = screen.getByTestId('on/off-button');
//     fireEvent.click(onOffButtonElement);
//     const plusButtonElement = screen.getByTestId('plus-button');
//     expect(plusButtonElement).toBeDisabled();
// });

test('온/오프 버튼 클릭시 화면을 새로고침 합니다.', () => {
    // 1. 원래의 window.location.reload 저장
    const originalReload = window.location.reload;

    // 2. 기존의 window.location 객체 삭제
    delete window.location;

    // 3. 새로운 window.location 객체 만들기
    window.location = { reload: jest.fn() };

    render(<App />);
    const onOffButtonElement = screen.getByTestId('on/off-button');
    fireEvent.click(onOffButtonElement);

    // 4. reload 함수가 호출되었는지 확인
    expect(window.location.reload).toHaveBeenCalled();

    // 5. 원래의 reload 함수 복원
    window.location.reload = originalReload;
});
