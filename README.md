# This chapter is part learning 'Component Styling' in react

## Create React App의 숨겨진 세부 설정 꺼내기

! eject하기 전 git commit이 되어 있지 않으면 작동안함

yarn eject

실행 이후 재시작이 안될 경우 'node_modules' 폴더 전체 삭제 이후

yarn install

Tip
\*.Sass 파일에서 라이브러리를 불러올 때 @import '~library/styles' 앞에 '~'을 붙여주면 'node_modules' 폴더를 탐색

## 유용한 Sass 라이브러리 2가지

반응형 디자인을 쉽게 만들어 주는 [include-media](https://eduardoboucas.github.io/include-media/)
매우 편리한 색상 팔레트 [open-color](https://www.npmjs.com/package/open-color)
