<script lang="ts">
  import { onMount, onDestroy } from 'svelte';
  import * as THREE from 'three';

  let container: HTMLDivElement;
  let renderer: THREE.WebGLRenderer;
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let stars: THREE.Points;
  let starGeometry: THREE.BufferGeometry;
  let starMaterial: THREE.PointsMaterial;
  let animationId: number;

  onMount(() => {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    starGeometry = new THREE.BufferGeometry();
    const starCount = 6000;
    const posArray = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    starGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    starMaterial = new THREE.PointsMaterial({
      size: 0.015,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    camera.position.z = 1;

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      stars.rotation.y += 0.0003;
      stars.rotation.x += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  onDestroy(() => {
    if (animationId) cancelAnimationFrame(animationId);
    if (starGeometry) starGeometry.dispose();
    if (starMaterial) starMaterial.dispose();
    if (renderer) renderer.dispose();
    if (container && renderer) container.removeChild(renderer.domElement);
  });
</script>

<div 
  bind:this={container} 
  class="fixed inset-0 -z-10 pointer-events-none opacity-40" 
  aria-hidden="true"
></div>
