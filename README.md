# This chapter is part learning 'Component Styling' in react

## Scss를 사용하기 앞서

Sass에서는 두 가지 확장자 .scss와 .sass를 지원

.scss는 기존 css와 비슷해서 더 많이 쓰임

node-sass라는 라이브러리 설치(2021-01-20 version 5.0.0)

```
yarn add node-sass
```

Create React App으로 프로젝트를 시작했을 경우 독랍성으로 인해 sass-loader에서는 ^4.0.0 번대의 버전을 지원

```
yarn add node-sass@4.14.1
```

## Create React App의 숨겨진 세부 설정 꺼내기

! eject하기 전 git commit이 되어 있지 않으면 작동안함
```
yarn eject
```

실행 이후 재시작이 안될 경우 'node_modules' 폴더 전체 삭제 이후
```
yarn install
```
Tip
.Sass 파일에서 라이브러리를 불러올 때 @import '\~/library/styles' 앞에 '\~'을 붙여주면 'node_modules' 폴더를 탐색

## 유용한 Sass 라이브러리 2가지

반응형 디자인을 쉽게 만들어 주는 [include-media](https://eduardoboucas.github.io/include-media/)
매우 편리한 색상 팔레트 [open-color](https://www.npmjs.com/package/open-color)

## webpack.config sass-loader 수정

```
...
 {
    test: sassRegex,
    exclude: sassModuleRegex,
    use: getStyleLoaders({
    importLoaders: 3,
    sourceMap: isEnvProduction
        ? shouldUseSourceMap
        : isEnvDevelopment,
    }).concat({
    loader: require.resolve("sass-loader"),
    options: {
        sassOptions: {
        includePaths: [paths.appSrc + "/styles"],
        },
        sourceMap: isEnvProduction && shouldUseSourceMap,
        prependData: `@import "utils";`,
    },
}),
...
```

## CSS Module

CSS Module은 CSS를 불러와서 사용할 때 클래스 이름을 고유한 값, 즉 파일이름-클래스이름-해시값 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름을 중첩되는 것을 방지해 주는 기술

사용법

```
CSSModule.module.css

/* 자동으로 고유해질 것이므로 흔히 사용되는 단어를 클래스 이름으로 마음대로 사용 가능 */

.wrapper {
  background: black;
  padding: 1rem;
  color: white;
  font-size: 2rem;
}

.inverted {
  color: black;
  background: white;
  border: 1px solid black;
}
/* 글로벌 CSS를 작성하고 싶다면 */

:global .something {
  font-weight: 800;
  color: aqua;
}

```

```
CSSModule.jsx

import React from "react";
import styles from "./CSSModule.module.css";
function CSSModule() {
  return (
    <div>
      <div className={`${styles.wrapper} ${styles.inverted}`}>
        안녕하세요, 저는 <span className="something">CSS Module 입니다.</span>
      </div>
    </div>
  );
}

export default CSSModule;

```

### **classnames**

**classnames**는 CSS 클래스를 조건부로 설정할 때 **매우** 유용한 라이브러리.
CSS Module을 사용할 때 이 라이브러리를 사용하면 여러 클래스를 적용할 때 매우 편리하다.

```
yarn add classnames
```

사용법

```
import classNames form "classnames";

classNames("one", "two"); => 'one two'
classNames("one", {two: true}); => 'one two'
classNames("one", {two: false}); => 'one'
classNames("one", ["two", three]); => 'one two'
const myClass = "hello";
classNames("one", myClass, {myCondition: true}); => 'one hello myCondition';
```

### **CSS-in-JS** 컴포넌트 스타일링의 또 다른 패러다임은 Javascript 파일 안에 Style을 선언하는 방식

개발자들이 가장 많이 선호한다는 **styled-components** 사용
대체 라이브러리는 **emotion**이 존재

이 라이브러리를 사용하면 Javascript 파일 하나에 스타일까지 작성할 수 있기 때문에, .css, .scss 확장자를 가진 스타일 파일을 따로 만들지 않아도 되는 이점이 존재

[라이브러리 종류 확인](https://github.com/MicheleBertoli/css-in-js)

\([react-icons](https://react-icons.netlify.com/) 라이브러리가 존재하는데 리액트에서 다양하고 예쁜 아이콘을 사용 할 수 있도록 도와주는 라이브러리\)

```
yarn add styled-components
```

사용법

```
StyledComponent.jsx

const Box = styled.div`
  background: ${(props) => props.color || "blue"};
  padding: 1rem;
  display: flex;
`;

const Button = styled.button`
  background: white;
  color: blue;
  border-radius: 4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
  ${(props) =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }

  function StyledComponent() {
  return (
    <Box color="black">
      <Button>안녕하세요</Button>
      <Button inverted={true}>테두리만</Button>
    </Box>
  );
}
`;
```

`을 사용하여 만든 문자열에 스타일 정보를 넣어주는 문법을 **Tagged 템플릿 리터럴**이라고 한다.
CSS-in-JS를 사용하면 템플릿 안에 Javascript 객체나 함수를 절달할 때 온전히 추출할 수 있다.

```
일반적인 템플릿
`hello ${{foo: 'bar'}} ${()=> 'world'}!`
//결과: "hello [object object] () => 'world'!"


Tagged 템플릿
function tagged(...arg)
{
  console.log(args);
}
tagged`hello ${{foo: 'bar'}} ${()=> 'world'}!`

//결과
(3) [Array(3), {…}, ƒ]
0: (3) ["hello ", " ", "!", raw: Array(3)]
1: {foo: "bar"}
2: ()=> 'world'

```
