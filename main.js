import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.5, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);

document.body.appendChild(renderer.domElement);

// Now inorder to create a 3D object we need to create a wireframe and a material which can be combined to get the mesh
// const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
// const material1 = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
// const mesh1 = new THREE.Mesh(boxGeometry, material1);

const planeGeometry = new THREE.PlaneGeometry(3, 3);
const material2 = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
const mesh2 = new THREE.Mesh(planeGeometry, material2);

// Adding a mesh to the canvas
scene.add(mesh2);
// scene.add(mesh1);

// Setting camera position
camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  // mesh2.rotation.x += 0.01;
  // mesh2.rotation.y += 0.01;
  // mesh1.rotation.x += 0.01;
  // mesh1.rotation.y += 0.01;
}

// renderer.render(scene, camera);  // This is used to create a canvas in HTML with the scene and the camera that we have created above. 

animate()