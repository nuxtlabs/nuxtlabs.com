import paper from 'paper';

export default () => {
    window.onNuxtReady(() => {
        // set the starting position of the cursor outside of the screen
        let clientX = -100;
        let clientY = -100; 
        const innerCursor = document.querySelector(".cursor--small");

        const initCursor = () => {
            // add listener to track the current mouse position
            document.addEventListener("mousemove", e => {
                clientX = e.clientX;
                clientY = e.clientY;
            });
            
            const render = () => {
                innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
                requestAnimationFrame(render);
            };
            requestAnimationFrame(render);
        };
        initCursor();

        let lastX = 0;
        let lastY = 0;
        let isStuck = false;
        let showCursor = false;
        let group, stuckX, stuckY, fillOuterCursor;

        const initCanvas = () => {
            const canvas = document.querySelector(".cursor--canvas");
            const shapeBounds = {
                width: 75,
                height: 75
            };
            paper.setup(canvas);
            const strokeColor = "rgba(255, 255, 255, 0.5)";
            const strokeWidth = 1;
            const segments = 8;
            const radius = 15;
            
            // the base shape for the noisy circle
            const polygon = new paper.Path.RegularPolygon(
                new paper.Point(0, 0),
                segments,
                radius
            );

            const circle = new paper.Path.Circle({
                center: [0, 0],
                radius: 3,
                fillColor: 'white'
            });

            polygon.strokeColor = strokeColor;
            polygon.strokeWidth = strokeWidth;
            polygon.smooth();
            circle.smooth();
            group = new paper.Group([polygon, circle]);
            group.applyMatrix = false;
            
            let bigCoordinates = [];
            
            // function for linear interpolation of values
            const lerp = (a, b, n) => {
                return (1 - n) * a + n * b;
            };
            
            // function to map a value from one range to another range
            const map = (value, in_min, in_max, out_min, out_max) => {
                return (
                ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
                );
            };
            paper.view.onFrame = event => {
                group.position = event.position;
            }
        }

        initCanvas();

        const initHovers = () => {
            const handleMouseEnter = e => {
              //circle.style.strokeWidth = 2;
              paper.projects[0].currentStyle.strokeWidth = 2;
              console.log(paper);
            };
            
            // reset isStuck on mouseLeave
            const handleMouseLeave = () => {
                paper.projects[0].currentStyle.strokeWidth = 1;
            };
            
            // add event listeners to all items
            const links = document.querySelectorAll("a");
            links.forEach(item => {
              item.addEventListener("mouseenter", handleMouseEnter);
              item.addEventListener("mouseleave", handleMouseLeave);
            });
        };
          
        initHovers();
          
    })
}