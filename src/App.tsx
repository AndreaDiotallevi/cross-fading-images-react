import styled, { keyframes } from "styled-components"

const IMAGE_DURATION = 4
const IMAGE_FADE = 1.5

const animation = (animationDuration: number) => keyframes`
    0% {
        opacity: 1;
    }
    ${`${(IMAGE_DURATION / animationDuration) * 100}%`} {
        opacity: 1;
    }
    ${`${((IMAGE_DURATION + IMAGE_FADE) / animationDuration) * 100}%`} {
        opacity: 0;
    }
    ${`${100 - (IMAGE_FADE / animationDuration) * 100}%`} {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const ImageContainer = styled.div<{ animationDuration: number }>`
    animation-name: ${(props) => animation(props.animationDuration)};
`

type Props = {
    images: string[]
}

function App(props: Props) {
    const { images } = props
    const animationDuration = (IMAGE_DURATION + IMAGE_FADE) * images.length

    return (
        <div className="position-relative">
            {images.map((image, index) => (
                <ImageContainer
                    key={image}
                    animationDuration={animationDuration}
                    style={{
                        top: 0,
                        position: "absolute",
                        animationIterationCount: "infinite",
                        animationTimingFunction: "ease-in-out",
                        animationDuration: `${animationDuration}s`,
                        animationDelay: `${(IMAGE_DURATION + IMAGE_FADE) * (index - images.length)}s`,
                    }}
                >
                    <img src={image} alt="art" />
                </ImageContainer>
            ))}
        </div>
    )
}

export default App
