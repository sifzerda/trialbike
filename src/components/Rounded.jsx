import { useEffect, useRef } from 'react';
import { Engine, Render, Runner, Composite, Bodies, MouseConstraint, Mouse } from 'matter-js';

const RoundedCornersDemo = () => {
    const canvasRef = useRef(null);

    useEffect(() => {

        // Create engine
        const engine = Engine.create();
        const world = engine.world;

        // Create renderer
        const render = Render.create({
            element: canvasRef.current,
            engine: engine,
            options: {
                width: 800,
                height: 600,
                showAxes: true,
            },
        });

        Render.run(render);

        // Create runner
        const runner = Runner.create();
        Runner.run(runner, engine);

        // Add bodies with chamfer (rounded corners)
        Composite.add(world, [
            // Walls
            Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
            Bodies.rectangle(400, 600, 800, 50, { isStatic: true }),
            Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
            Bodies.rectangle(0, 300, 50, 600, { isStatic: true }),
        ]);

        Composite.add(world, [
            Bodies.rectangle(200, 200, 100, 100, { chamfer: { radius: 20 } }),
            Bodies.rectangle(300, 200, 100, 100, { chamfer: { radius: [90, 0, 0, 0] } }),
            Bodies.rectangle(400, 200, 200, 200, { chamfer: { radius: [150, 20, 40, 20] } }),
            Bodies.rectangle(200, 200, 200, 200, { chamfer: { radius: [150, 20, 150, 20] } }),
            Bodies.rectangle(300, 200, 200, 50, { chamfer: { radius: [25, 25, 0, 0] } }),
            Bodies.polygon(200, 100, 8, 80, { chamfer: { radius: 30 } }),
            Bodies.polygon(300, 100, 5, 80, { chamfer: { radius: [10, 40, 20, 40, 10] } }),
            Bodies.polygon(400, 200, 3, 50, { chamfer: { radius: [20, 0, 20] } }),
        ]);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false,
                },
            },
        });

        Composite.add(world, mouseConstraint);

        // Keep the mouse in sync with rendering
        render.mouse = mouse;

        // Fit the render viewport to the scene
        Render.lookAt(render, {
            min: { x: 0, y: 0 },
            max: { x: 800, y: 600 },
        });

        // Cleanup function
        return () => {
            Render.stop(render);
            Runner.stop(runner);
        };
    }, []);

    return (
        <div className='game-window' ref={canvasRef}/>
    );
};

export default RoundedCornersDemo;