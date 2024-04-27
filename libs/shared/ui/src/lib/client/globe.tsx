"use client"

import createGlobe from "cobe"
import { useEffect, useRef } from "react"

export const Globe = () => {
    const canvasRef = useRef()

    useEffect(() => {
        let phi = 0

        // @ts-ignore
        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 700 * 2,
            height: 700 * 2,
            phi: 0,
            theta: 0,
            dark: 1,
            diffuse: 0,
            mapSamples: 16000,
            mapBrightness: 5,
            baseColor: [0.3, 0.3, 0.3],
            markerColor: [0, 0, 0],
            glowColor: [0.25, 0.25, 0.25],
            markers: [],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi
                phi += 0.0025
            }
        })

        return () => {
            globe.destroy()
        }
    }, [])

    return (
        <canvas
            // @ts-ignore
            ref={canvasRef}
            style={{ width: 700, height: 700, maxWidth: "100%", aspectRatio: 1, margin: "auto", zIndex: 0 }}
        />
    )
}