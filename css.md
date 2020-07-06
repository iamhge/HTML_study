# CSS

## 기본 문법
### Selector
1. 스타일을 적용하고자 하는 HTML element를 선택한다.
2. selector에 스타일을 적용한다.
```
h1 { color:red; font-size:12px; }
```
* h1 -> selector(셀렉터)
* color, font-size -> property(프로퍼티)
* red, 12px -> property value(값)
* color:red;, font-size:12px; -> declaration(선언)
* { ... } -> declaration block(선언 블록)

### HTML과 CSS의 연동
* CSS를 가지고 있지 않은 HTML은 브라우저에서 기본으로 적용하는 CSS에 의해 렌더링된다.

#### link style
* HTML에서 외부에 있는 CSS 파일을 로드하는 방식
* 추천

#### Embedding style
* HTML 내부에 CSS를 포함시키는 방식
```
<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 { color: red; }
      p  { background: aqua; }
    </style>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

#### inline style
* HTML 요소의 style 프로퍼티에 CSS를 기술하는 방식
```
<!DOCTYPE html>
<html>
  <body>
    <h1 style="color: red">Hello World</h1>
    <p style="background: aqua">This is a web page.</p>
  </body>
</html>
```

### reset CSS
* 모든 웹 브라우저는 default 스타일을 가지고 있지만, 각각 브라우저에 따라 스타일이 상이하므로, 주의가 필요
* 제각각인 default 스타일을 하나로 통일시켜주기 위해 reset CSS 사용
ex) Eric Meyar's reset, normalize.css
