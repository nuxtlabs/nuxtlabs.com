import paper from 'paper';

export default () => {
    window.onNuxtReady(() => {
        let clientX = -100;
        let clientY = -100; 
        const innerCursor = document.querySelector(".cursor--small");
        let lastX = 0;
        let lastY = 0;
        let isHovered = false;
        let showCursor = false;
        let group, stuckX, stuckY, fillOuterCursor;

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
            
            const polygon = new paper.Path.RegularPolygon(
                new paper.Point(0, 0),
                segments,
                radius
            );

            const circle = new paper.Path.Circle({
                center: [0, 0],
                radius: 2,
                fillColor: 'white'
            });

            polygon.strokeColor = strokeColor;
            polygon.strokeWidth = strokeWidth;
            polygon.smooth();
            circle.smooth();
            group = new paper.Group([polygon, circle]);
            group.applyMatrix = false;
            
            let bigCoordinates = [];
            
            const lerp = (a, b, n) => {
                return (1 - n) * a + n * b;
            };
            
            const map = (value, in_min, in_max, out_min, out_max) => {
                return (
                ((value - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
                );
            };
            let counter = 1;
            paper.view.onFrame = event => {
                lastX = lerp(lastX, clientX, 0.2);
                lastY = lerp(lastY, clientY, 0.2);
                group.position = new paper.Point(lastX, lastY);
                if (isHovered && counter < 20) {
                    polygon.strokeWidth = 2;
                    circle.scale(1.03);
                    counter += 1;
                } else if (!isHovered && counter > 1) {
                    polygon.strokeWidth = 1;
                    circle.scale(0.97);
                    counter -= 1;
                }
            }
        }
        initCanvas();

        const initHovers = () => {
            const handleMouseEnter = e => {
                isHovered = true;
            };
            const handleMouseLeave = () => {
                isHovered = false;
            };
            const links = document.querySelectorAll("a");
            links.forEach(item => {
              item.addEventListener("mouseenter", handleMouseEnter);
              item.addEventListener("mouseleave", handleMouseLeave);
            });
        };
        initHovers();
    })
}