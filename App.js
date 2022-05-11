import Hello from './Hello';
import Counter from './Counter';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <Hello name="이유정" age="12" univ="명지" hobby="요리" favfood="떡볶이, 마라탕, 닭발, 곱창" favcolor="짙은 녹색" music="초록을거머쥔우리는 - 잔나비"/>
      <Counter />
    </Wrapper>

  );
}

export default App;