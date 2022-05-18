- 클래스형 컴포넌트 vs 함수형 컴포넌트 비교
: 클래스형 컴포넌트는 상태값을 가질 수 있고, 리액트 컴포넌트의 생명 주기 함수를 작성할 수 있다. 그러나 함수형 컴포넌트는 이 모든 일을 할 수 없다. 이 둘의 차이점은 상태값과 LifeCycle를 가질 수 있느냐 없느냐이다.
함수형 컴포넌트는 JSX를 return문을 사용해서 반환하며 state를 사용할 수 없고, 생명 주기 함수를 작성할 수 없다.
 클래스형 컴포넌트는 class 키워드로 시작하면서 Component로 상속 받는다. 또한 render() 함수를 사용해서 JSX를 반환하고, props를 조회할 때 this 키워드 사용한다. defaultProps 설정 시에는 클래스 내부에 static 키워드와 함께 선언한다.


- 렌더링? 마운트?
    렌더링(rendering)
    render는 DOM생성을 위해 함수가 호출될 때(혹은 클래스 기반 메서드가 호출될 때)이다.
    리액트 컴포넌트가 렌더링을 수행하는 시점은 다음과 같다.
    Props가 변경되었을 때
    State가 변경되었을 때
    forceUpdate() 를 실행하였을 때
    부모 컴포넌트가 렌더링되었을 때

    마운트(Mount)
    mount는 리액트가 처음으로 구성요소를 렌더링하고 실제로 초기 DOM을 빌드할 떄이다.
    컴포넌트가 생성되서 마운트를 위한 함수 componentDidMount() 가 호출되기까지의 과정은 아래와 같다.
    1)  constructor
      -  컴포넌트 클래스의 생성자. 컴포넌트가 만들어질 때 마다 호출됩니다.
      -  주로 this.state의 초기값 설정(setState는 사용 불가능합니다. 그냥 초기화입니다.), 이벤트 처리 함수 바인딩 시 사용됩니다.
    2)  getDerivedStateFromProps
      -  props와 state의 동기화(값 설정) 를 위하여 호출합니다. v16.3 이후 만들어졌습니다.
      -  Component의 Instance에 접근할 수 없습니다. 
      -  부모 컴포넌트가 다시 렌더링할 때 호출됩니다.  
    3)  render
      -  해당 함수 내 리턴 코드를 통해 DOM의 기능과 모양 정보가 담긴 React 요소를 리턴합니다.
      -  컴포넌트의 state를 변경하면 안됩니다. 
    4)  componentDidMount
      -  컴포넌트 생성 ~ 렌더링(render 종료) 까지 진행된 후 호출되는 함수입니다.

    컴포넌트가 render될 때에는 mount과정을 거친다. 하지만 props나 state가 변경되어 render될 때에는 mount를 거치지 않는다.