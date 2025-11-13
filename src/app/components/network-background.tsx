"use client";

import { useEffect, useState, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

export function NetworkBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); 
    }).then(() => setInit(true));
  }, []);

  const options: ISourceOptions = useMemo(() => ({
    background: { color: { value: "transparent" } },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" },
        onClick: { enable: true, mode: "push" },
      },
      modes: {
        grab: { distance: 180, links: { opacity: 0.8 } },
        push: { quantity: 4 },
      },
    },
    particles: {
      number: { value: 220, density: { enable: true } }, // زيادة العدد لجعل الشبكة أكثر كثافة
      color: { value: "#ffffff" },
      shape: { type: "circle" },
      opacity: { value: 0.7 }, // زيادة الوضوح
      size: { value: { min: 2, max: 5 } }, // حجم أكبر قليلاً
      links: { enable: true, color: "#ffffff", distance: 160, opacity: 0.5, width: 1 }, // مسافة أقل لزيادة الكثافة
      move: { enable: true, speed: 2, direction: MoveDirection.none, outModes: { default: OutMode.out }, straight: false },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return <Particles id="tsparticles" options={options} />;
}
