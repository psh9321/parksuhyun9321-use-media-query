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

	import useMediaQuery from "@parksuhyun9321/use-media-query";

	const Example = () => {
		const { isResize } = useMediaQuery(700);

		/** 브라우저 사이즈가 700 보다 클때 p 태그를 랜더링 */
		return <> { !isResize && <p>700</p> } </>
	}
