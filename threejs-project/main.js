import * as THREE from './node_modules/three/build/three.module.js';

// 장면(Scene)을 생성합니다.
const scene = new THREE.Scene();

// 카메라(Camera)를 설정합니다.
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 렌더러(Renderer)를 설정합니다.
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#canvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// 박스(큐브) 형상을 생성합니다.
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// 애니메이션 루프를 설정합니다.
function animate() {
    requestAnimationFrame(animate);

    // 큐브를 회전시킵니다.
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}
animate();

// 창 크기가 변경될 때 카메라와 렌더러 크기를 조정합니다.
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
