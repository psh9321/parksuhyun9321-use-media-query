# @parksuhyun9321/use-media-query

## 설치 
 - npm install @parksuhyun9321/use-media-query
 - pnpm add @parksuhyun9321/use-media-query
 - yarn add @parksuhyun9321/use-media-query

## 테스트 
 - pnpm test

## 빌드 
 - pnpm tsup

## 반응형 커스텀 훅 
- useMediaQuery 선언 시 maxWidth 값을 주고 브라우저 사이즈에 따라 isResize 상태를 변경
- 브라우저 뷰포트에 따른 조건부 렌더링을 위해 사용

### example
 - 브라우저 사이즈 가 설정한 maxWidth 보다 클때 Component 를 랜더링하고 싶을 시

    const [isVisible, SetIsVisible] = useState(false);
    const { isResize } = useMediaQuery(700);

    useEffect(() => {
        if(isResize) SetIsVisible(false);
        else SetIsVisible(true);
    },[isResize])

    export default () => {
        return (
            <>
                { isVisible && <Component> }        
            </>
        )
    }