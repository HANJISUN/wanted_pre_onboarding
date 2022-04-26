# 원티드 프리온보딩

## 🌐 Build Link

https://hanjisun.github.io/wanted_pre_onboarding/  
<br />

## 📝 원티드 프리온보딩 과제 목표

✅ 조금 느리더라도 모든 컴포넌트 구현하기    
✅ 일관성 있는 코드 작성하기    
✅ 친절한 커밋 메시지 작성하기   
✅ EsLint, Prettier 사용해 코팅 컨벤션 적용해보기  
✅ 과제를 통해 새로운 기술 하나 익히기 → Styled Components  

<br />

# 🧐 구현 방법 및 이유

## 1️⃣ Toggle

<br />

💡 **구현 방법**

글자가 있는 토글 스위치 버튼이라고 생각했습니다. 그래서 Styled Components의 가장 큰 무기인 props를 사용하기 위해 state를 선언하고, useState를 사용해 상태관리를 해주었습니다. 선언한 state를 props로 전달하여 삼항 연산자로 스타일 속성을 제어하였습니다.

```
const [isClicked, setIsClicked] = useState(false);
```

- 왼쪽 버튼을 클릭했을 때 isChecked === false 로 변경해주고, ToggleActiveBar는 왼쪽에 위치, ToggleButton 텍스트는 활성화 색상으로 변경해준다.

- 오른쪽 버튼을 클릭했을 때 isChecked === true로 변경해주고, ToggleActiveBar는 오른쪽에 위치, ToggleButton 텍스트는 활성화 색상으로 변경해준다.  
  <br />

🤯😊 **후기(어려웠던 점/좋았던 점 등)**  
라이브러리를 사용하지 않고 구현해본 적이 없어서 어떻게 시작해야할지 감도 잡히지 않았습니다. 그래서 먼저 다른 개발자들이 생성한 토글 버튼의 형태를 살펴봤습니다. 대부분의 경우 input 태그에 ::before, ::after, content를 통해 토글버튼을 구성한 것을 확인할 수 있었습니다. 형태를 먼저 이해한 후 props로 state의 상태에 따라 값을 변경되도록 구현할 수 있었습니다.  
<br />

## 2️⃣ Tab

<br />

💡 **구현 방법**
리스트가 추가/제거되어도 배열의 값만 수정하면 되도록 TabButton 리스트를 tabMenu 배열로 만들었고, map을 사용해 탭을 생성해주었습니다. 그리고, onClick 이벤트가 발생하면 useState를 사용해 클릭한 요소의 인덱스 값을 state에 저장하여 ActiveBar가 클릭한 tap의 위치로 이동할 수 있게 하였습니다. 마지막으로 state의 값과 해당 버튼의 인덱스 값과 같으면 isClicked를 true로 설정하여 해당 탭의 텍스트 컬러가 변경될 수 있게 구현하였습니다.

```
const [isTabClicked, setIsTabClicked] = useState(0);
```

- isTabClicked = index이고, isTabClicked === index ? true 라면, true 상태인 탭의 텍스트 컬러를 활성화 상태로 변경해주고, ActiveBar를 translateX(calc(100% \* isTabClicked) 만큼 이동시킨다.

- translateX(0) → 가장 왼쪽 탭, translateX(100%) → (가장 왼쪽 탭에서 ActiveBar 길이만큼(100%)이동한 가운데 탭, translateX(200%) → (가장 왼쪽 탭에서 ActiveBar 길이만큼(200%)이동한 가장 오른쪽 탭으로 이동하게 설정해주었습니다.

<br />

🤯😊 **후기(어려웠던 점/좋았던 점 등)**  
처음에는 탭 아래의 줄을 고정시켜야 한다는 생각에 position: fixed 속성을 주어 ActiveBar가 제대로 작동하지 않았는데 해당 속성을 제거하고 난 뒤 제대로 작동하게 만들 수 있었습니다. 그리고 Toggle에서 이미 translateX()를 사용해보았지만, 가장 오른쪽 탭으로 이동할 경우 어떻게 처리를 해주어야 할지 바로 감을잡지 못했습니다. Tab을 구현하며 다시 한 번 transformd에 대해 공부하게 되었고 확실하게 익힐 수 있는 기회가 되었습니다.  
<br />

## 3️⃣ Slider

<br />

💡 **구현 방법**  
input의 type을 range로 주어 SliderBar를 조정하여 범위 내의 숫자를 선택할 수 있도록 하였고, 기본 범위를 min: 1, max: 100으로 하여 과제 가이드라인과 동일하게 설정해주었습니다. 그리고 onChange함수를 이용해 값이 변경될 때마다 sliderState의 상태값을 상단에서 숫자로 확인할 수 있도록 구현하였습니다. SliderBar 범위 구간 포인트 점인 SliderPointDot과 해당 구간을 클릭하여 slider의 범위를 이동시킬 수 있는 SliderBtn에 사용할 구간을 배열에 저장하고, map을 사용해 각각, SliderPointDot과 SliderBtn으로 생성해주었습니다.

```
const SliderBarInput = styled.input`
  -webkit-appearance: none;
  position: absolute;
  width: 400px;
  height: 5px;
  background: linear-gradient(
    to right,
    var(--primary) 1%,
    var(--primary) ${props => props.value}%,
    var(--secondary) ${props => props.value}%,
    var(--secondary) 100%
  );
  border-radius: 50px;
  z-index: 20;
  cursor: pointer;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 23px;
    height: 23px;
    background: var(--primary);
    border: solid 3px white;
    border-radius: 100%;
    box-shadow: 0 1px 1px 0 #a5a5a5;
  }
`;
```

스타일 부분은 우선 slider에 -webkit-appearance를 통해 기본 테마 속성을 none처리 후, linear-gradient를 사용해 상태값에 따라 slider의 색상도 해당 값을 나타내도록 구현였습니다. 또한 -webkit-slider-thumb로 가상 요소 선택자를 사용해 Slider 바의 기준점을 버튼 처럼 만들어주었습니다.

```
background-color: ${props =>
    props.currentState < props.value ? "var(--secondary)" : "var(--primary)"};
```

SliderPointDot의 색상도 slider의 상태에 맞게 변경될 수있도록 구현하였습니다.

<br />

🤯😊 **후기(어려웠던 점/좋았던 점 등)**  
체감상 가장 어려운 과제였습니다. 엎친데 덮친격으로 요구사항 분석을 잘못하여 점점 코드는 산을 향해 갔고, 역시나 기능은 동작하지 않았습니다. 이게 맞는데 왜 동작하지 않지? 라는 생각에 휩싸여 3일이 넘게 같은 코드만 붙잡고 있었습니다. 마지막으로 처음부터 구현해보자는 생각에 요구사항을 다시 분석하기 시작했고, 요구사항 분석에서 문제가 있었다는 것을 깨닫게 되었습니다. 1%, 25%, ..., 100% 구간을 보여주는 SliderPointDot을 버튼 생각했고, SliderBar 위에 있는 SliderPointDot이 버튼 동작도 하면서, 동시에 SliderBar가 움직일때 채워주어야 하고, 둘은 방해받지 않아야 하는데, 구현이 되지 않아 애를 먹었습니다. 과제 가이드라인을 다시 살펴본 후에야 잘못 파악했다는 점을 깨닫게 되었고, 기능을 구현할 수 있었습니다.
슬라이더는 항상 라이브러리를 이용했어서 -webkit-appearance, -webkit-slider-thumb라는 개념조차도 모르고 있었는데 이번 기회를 통해 배울 수 있었습니다.  
<br />

## 4️⃣ Input

<br />

💡 **구현 방법**  
email은 onChange로 값이 변경될 때 마다 state에 저장하도록 구현했고, input 오른쪽의 체크 아이콘은 state이 변경될 때마다 이메일 유효성을 검사하여 true인 경우 아이콘 색이 활성화 되도록 구현하였습니다. 그리고, input 하단의 errorMessage는 input의 포커스가 사라졌을 때, 이메일 유효성 검사를 진행할 수 있도록 onBlur를 사용하여 구현하였습니다.
password는 input의 type을 password로 두고, 눈모양 아이콘을 클릭하여 비밀번호 보기를 선택하면, type을 text로 바꿔주어 비밀번호를 확인할 수 있게 삼항연산자로 구현하였습니다.

<br />

🤯😊 **후기(어려웠던 점/좋았던 점 등)**  
이메일 유효성 검사를 onChange함수에 걸어주어 가이드라인과 다르게 이메일 인풋창에 텍스트를 입력하자마자 에러 메시지가 노출되었습니다. 사용자가 입력을 완료하고 input의 포커스가 사라졌을 때, 이메일 유효성 검사를 진행할 수 있도록 onBlur를 사용하여 해결하였습니다.
그리고 텍스트를 입력하기 위해 input을 클릭해 포커스되면 파란색 테두리가 두껍게 생겼습니다. 이 부분을 가이드라인과 동일하게 맞추고 싶었는데 방법을 몰라 조금 어려웠습니다. 결국 input:focus { outline: none; } 처리해주고, 원하는 스타일을 설정해 해결하였습니다.

<br />

## 5️⃣ Dropdown

<br />

💡 **구현 방법**  
div로 SeleteBox만들고, 그 안에 p태그로 selectedValue를 나타내도록 구현하였습니다. SeleteBox를 클릭했을 때 isDroped === true면 DropBox가 펼쳐지고, isDroped === false면 닫히도록 구현하였습니다. 그리고, DropBox는 select태그 대신 div태그를 사용하여 input창을 넣을 수 있게 하였습니다. 그리고 SeleteList 중 검색 결과가 없어도 DropBox에 노출되는
All Symbols를 제외한 나머지는 SeleteList 배열을 사용하여, input 검색 결과에 따라 유동적으로 리스트가 노출되도록 구현하였습니다. 또한, SeleteBox와 DropBox 이외의 외부 영역을 클릭했을 경우 DropBox가 접힐 수 있도록 useRef를 사용하여 구현하였습니다.

<br />

🤯😊 **후기(어려웠던 점/좋았던 점 등)**  
DropBox를 select 태그를 사용하여 구현했는데, select 태그 안에 input 창이 들어가지 않아 어려웠습니다. 그래서 select 태그를 div로 변경하여 해결할 수 있었습니다.  
div 외부 클릭을 감지하여 DropBox를 닫아주고 싶어 서 useEffect와 useRef를 사용하여 외부 요소 클릭시 작동하도록 구현였습니다. 하지만, 검색을 위해 내부 요소인 input을 클릭했는데도 외부 요소 클릭으로 인식하여 DropBox를 닫았고, DropBox를 열기위해 SeleteBox를 클릭했을 뿐인데도 외부 요소 클릭으로 인식하여 DropBox를 닫아버리는가하면, 외부 요소 클릭이 있으나 인식을 못하기도 했습니다. 해결하기 위해 useEffect()의 두 번째 매개변수로 빈 배열([])을 전달하여 컴포넌트가 마운트된 직후 한 번만 실행되도록 시도해보았지만 해결되지 않았습니다. useEffect() 안에 선언했던 handleClickOutside함수를 useEffect()외부로 빼서 해결할 수 있었습니다.
<br />  
<br />

# 🤔 회고

한 문장으로 표현하자면, **원티드 프리온보딩 선발 과제를 통해 돈주고도 배우기 힘든 많은 것들을 배울수 있어 매우 소중한 시간이 되었습니다.**  
**첫째,** 이번 선발 과제를 계기로 기능을 동작시키기 위해 이유도 모르고 그냥 짜는 코드가 아닌, 구현 방법과 동작 원리에 대해 생각하며 짤 수 있게 되었습니다.  
**둘째,** 나만의 라이브러리를 갖게 되었습니다. 이번 경험을 계기로 UI 외부 라이브러리 사용을 줄이고, 직접 구현해보고 나만의 라이브러리를 계속 구축하고 싶다는 생각이 들었습니다. 코딩 실력도 높이고 라이브러리도 생기는 일석 이조의 과제였습니다.  
**셋쩨,** 과제 제출용 README.md 작성을 통해 TIL, 기술블로그에는 어떤 것들을 적어야 하는지 배울 수 있었습니다.

<br />

# 💻 터미널에서 실행하기

아래 순서대로 터미널에 입력해주세요.

```
$ git clone https://github.com/HANJISUN/wanted_pre_onboarding.git
```

```
$ cd wanted_pre_onboarding
```

```
$ npm install
```

```
$ npm start
```
