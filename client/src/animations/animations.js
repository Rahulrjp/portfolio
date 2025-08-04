import { useSpring, animated, config } from "@react-spring/web";

// from	            object
// to	            object | object[] | function
// loop	            boolean | object | function
// delay	        number | function
// immediate	    boolean | function
// reset	        boolean
// reverse	        boolean
// pause	        boolean
// cancel	        boolean | string | string[] | function
// ref	            SpringRef
// config	        object | function
// events	        function

export const animation = () => {
    const springLtoR = useSpring({
        from: { x: -600 },
        to: { x: 0 },
    })

    const springRtoL = useSpring({
        from: { x: 600 },
        to: { x: 0 }
    })

    const springDtoU = useSpring({
        from: { y: 600 },
        to: { y: 0 }
    })

    const springUtoD = useSpring({
        from: { y: -600 },
        to: { y: 0 }
    })

    const springOpacity = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 }
    });

    const [{ background }] = useSpring(
        () => ({
            from: { background: 'var(--step0)' },
            to: [
                { background: 'var(--step0)' },
                { background: 'var(--step1)' },
                { background: 'var(--step2)' },
                { background: 'var(--step3)' },
                { background: 'var(--step4)' },
            ],
            config: config.molasses,
            loop: {
                reverse: true,
            },
        }),
        []
    )


    return { springLtoR, springRtoL, springOpacity , background ,springDtoU , springUtoD }
}