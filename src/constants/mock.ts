import { formatLongDate } from '@/utils/date'

export const MOCK_POST_DETAIL = {
  id: 'post_id',
  title: 'POST TITLE',
  date: formatLongDate(new Date()),
  last_modified: formatLongDate(new Date())
}

export const MOCK_POST_LIST = [
  {
    id: 1,
    title: 'Post1',
    slug: 'Post1',
    date: 'August 18th, 2025',
    last_modified: 'September 27th, 2025',
    preview: 'PREVIEW',
    content: 'MARKDOWN ...',
    tags: ['react', 'css'],
    meta_description: 'for meta-description'
  },
  {
    id: 2,
    title: 'Post2',
    slug: 'Post2',
    date: 'August 18th, 2025',
    last_modified: 'September 27th, 2025',
    preview: 'PREVIEW',
    content: 'MARKDOWN ...',
    tags: ['react', 'css'],
    meta_description: 'for meta-description'
  },
  {
    id: 3,
    title: 'Post3',
    slug: 'Post3',
    date: 'August 18th, 2025',
    last_modified: 'September 27th, 2025',
    preview: 'PREVIEW',
    content: 'MARKDOWN ...',
    tags: ['react', 'css'],
    meta_description: 'for meta-description'
  },
  {
    id: 4,
    title: 'Post4',
    slug: 'Post4',
    date: 'August 18th, 2025',
    last_modified: 'September 27th, 2025',
    preview: 'PREVIEW',
    content: 'MARKDOWN ...',
    tags: ['react', 'css'],
    meta_description: 'for meta-description'
  }
]

export const MOCK_TAG_LIST = [
  'react',
  'next',
  'css',
  'tailwind',
  'optimization',
  'whatelse'
]

export const MOCK_MARKDOWN = `
## 참조, 바인딩
### @State
변수 선언에 @State를 사용하면 state가 변할때마다 리렌더링을 유발시킴
\`\`\`
struct TextFieldView: View {
\t@State var textValue: String = ""
    
    var body: some View {
    \tTextField("placeholder", text: $textValue)
        Text(textValue)
    }
}
\`\`\`
**binding을 할때 $ 기호 사용
**

**만약 class를 이용한 State라면 해당 class에 @Observable 추가해야함**
(@Observable은 SwiftUI가 데이터를 관리, SwiftData를 사용한다면 @Model사용)

### @Binding
위 State예시에서 만약 TextField()뷰가 별도의 자식뷰로 구현되어있다면, 해당 자식 뷰에는 다음과 같이 바인딩 되어야한다
**@State래퍼로 선언된 프로퍼티를 바인딩 받을때 @Binding 래퍼를 사용한다.**
\`\`\`
@Binding var text: String
var body: some View {
\tTextField("placeholder", text: $text)
}
\`\`\`

### @Observable
ViewModel을 생성하고 뷰모델의 변화를 관찰하고 바인딩 가능하게 하기위해 사용한다
\`\`\`
@Observable
class ContentViewModel {
\tvar text: String = ""
\t...
}
\`\`\`

### @Bindable
**뷰모델 자체를 바인딩 받을 때(@Observable래퍼로 선언된) @Binding이 아닌, @Bindable을 사용한다**
class로 지정된 **뷰모델에 대해 무차별하게 상위 뷰에서 @State를 쓰지 않고**, 일반 프로퍼티로 선언하며, 하위 뷰 내에 뷰모델을 전달한다.
하지만 아래 예시와 같은 경우 ViewModel에 textValue라는 프로퍼티를 선언하고, Optional 처리를 미리 해둬야한다.
\`\`\`
@Bindable var viewModel: ProfileViewModel
    var body: some View {
    \t...
        TextField("placeholder", text: $viewModel.username)
    }
\`\`\`

예를들어 ProfileViewModel이 인증정보를 통해 얻어진 User데이터를 기반으로 값이 할당될때 다음과 같이 지정해야한다.
\`\`\`
@Observable
class ProfileViewModel {
\tvar user = User?
    var username: String
    
    init() {
    \tlet user = AuthManager.shared.currentUser // 인증관련 매니저클래스를 통해 호출
        serf.user = user
        
        username = user?.username ?? ""
    }
}
\`\`\`
**만약 뷰모델 자체를 바인딩 받는 하위 뷰들이 많다면, 최상단 뷰에서 .environment()를 통해 해당 ViewModel을 주입하는게 더 나은 선택지일수도 있다.**

## .environment() 와 @Environment, @Bindable
위에 설명한 것처럼, 상위뷰에서 .environment()를 통해 뷰모델을 하위의 모든 뷰에서 사용 가능하도록 주입하는 예시를 만들어보자.

Navigation Stack의 depts가 깊은 뷰들이 존재한다고 가정한다.
예를들어, 회원가입뷰 -> 이메일생성뷰 -> 비밀번호생성뷰 -> 이름생성뷰 .. 등등 이런 경우, 계속해서 각 뷰마다 ViewModel을 생성해야한다.

그래서 대안으로 **environment를 통해 뷰모델을 주입하고, 하위 뷰에서 공유**할 수 있다.

**리액트의 ContextApi**라고 생각하면 될것같다.

\`\`\`
LoginView()
\t.environment(signupViewModel)
// environment에 등록 하위 View들에서 이제 @Environment macro를 통해 signupViewModel에 접근 가능
\`\`\`
위처럼 로그인 뷰를 통해 회원가입 -> 이메일생성뷰 등 하위뷰가 이어진다고 가정한다.
**최상단 뷰에 .environment로 뷰모델을 주입한다.**

자식 뷰에서는 다음과 같이 주입된 뷰모델을 사용할 수 있다.

\`\`\`
struct EnterEmailView: View {
    @Environment(SignupViewModel.self) var signupViewModel // 읽기전용

    var body: some View {
        @Bindable var signupViewModel = signupViewModel // 바인딩 가능 객체로 변환
        SignupBackgroundView {
            VStack {
                VStack(alignment: .leading) {
                \tTextField("이메일 주소", text: $signupViewModel.email)
                ...
\`\`\`
**body 내에 @Bindable** 이라는 래퍼를 사용하니 이상하지 않는가?
하지만 @Environment 래퍼만으론 바인딩 가능하도록 만들 수 없고(**읽기 전용**), SwiftUI에서 지원하지 않는다. 
바인딩이 필요한 경우 컴파일 에러를 방지하기 위해 **body 내부에서 @Bindable로 변환**해야 한다.



## 반복문

\`\`\`
struct TestView: View {
\tvar array:[String] = ["a","b","c"]
    var body: some View {
    \tList { // VStack과 ScrollView를 합친 View
        \tForEach(array, id:\\.self) { value in
            \tText(value)
            }
        }
    }
}
\`\`\`
**반복문의 id** (리액트의 key와 같음): \\.self는 당장 귀찮아서 배열의 그 자체 value값을 id로 사용

**하지만 이런 id값을 부여하는 프로토콜이 Array의 값에 존재한다면 id라는 속성을 명시하지 않아도 됨**
\`\`\`
// array의 타입을 커스텀화했다고 가정 (class)
class Test: Identifiable { // Identifiable 프로토콜 선언
\tlet id: UUID
    var title: String
    
    init(title: String) {
    \tself.id = UUID() // UUID를 정의하고
        self.title: title
    }
}

struct TestView: View {
\tvar array:[Test] = [
    Test(title: "A"), Test(title: "B"), Test(title: "C")
    ]
    var body: some View {
    \tList {
        \tForEach(array) { value in // id가 필요없음
            \tText(value.title)
            }
        }
    }
}

\`\`\`

`
