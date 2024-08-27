"use client";

import React, { useEffect, useRef } from "react";

const MeteorBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (!canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        // Meteor class
        class Meteor {
            x: number = 100;
            y: number = 0;
            length: number = 10;
            speed: number = 2;
            opacity: number = 0.1;
            fade: boolean = false;

            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = 0;
                this.length = Math.random() * 80 + 10;
                this.speed = Math.random() * 2 + 2;
                this.opacity = 0.1;
                this.fade = false;
            }

            draw() {
                if (!ctx) return;

                ctx.beginPath();
                ctx.moveTo(this.x, this.y);
                ctx.lineTo(this.x + this.length, this.y + this.length);
                ctx.strokeStyle = `rgba(150, 150, 150, ${this.opacity})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            move() {
                this.x += this.speed;
                this.y += this.speed;
                if (this.fade) {
                    this.opacity -= 0.01;
                } else {
                    this.opacity += 0.01;
                }
                if (this.opacity >= 1) {
                    this.fade = true;
                } else if (this.opacity <= 0.1) {
                    this.opacity = 0.1;
                }
                if (this.y > canvas.width) this.reset();
            }
        }

        const meteors: Meteor[] = [];
        for (let i = 0; i < 10; i++) {
            meteors.push(new Meteor());
        }

        function animate() {
            if (!ctx) return;

            ctx.fillStyle = "#1d232a";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            meteors.forEach((meteor) => {
                meteor.draw();
                meteor.move();
            });

            requestAnimationFrame(animate);
        }

        animate();

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
            }}
        />
    );
};

export default MeteorBackground;
