#React Router 예제(v3)
https://velopert.com/2937

Apache, Nginx 등의 웹 서버에서 각 페이지마다 다른 디렉토리 및 파일을 제공하는 것과 달리, react-router는 어떤 경로로 들어오던 똑같은 html파일과 자바스크립트 파일을 제공

### CLI
1. yarn add create-react-app
2. create-react-app react-router-tutorial
3. yarn add prop-types 
   
서버 올리기
4. yarn add express
5. yarn build
6. node server


### src/index.js
- Router: 라우터의 속성을 정의하고 내부에서 라우트 설정
- Route: 설정한 경로에서 어떤 컴포넌트를 렌더링 할 지 정하는 컴포넌트, Route 컴포넌트의 자식에 또 다른 Route 컴포넌트를 넣으면 해당 자식 컴포넌트는 부모 라우트의 서브 라우트가 됨
- IndexRoute: Route에서 서브Route가 주어지지 않았을 때, 즉 특정 Route의 /경로로 들어왔을 때, 이 Route에서 지정한 컴포넌트를 보여줌
- browserHistory: HTML5dml History API를 사용하여 브라우저의 URL 변화를 주시하고, 조작함

### src/components/Header.js
- 설정 될라우트 경로는 to 값을 통해 설정
- Cannot read property 'object' of undefined 나올거임(CLI 3번을 입력하고, router: PropTypes.object로 변경)
- :id(params.id}를 통해 /post/10 이면 10을 가져옴
