/**
 * 1. add canvas on the html document
 * 2. create a scene
 * 3. create the geometry that you want to render on the screen e.g. cube
 * 4. create a basic mesh material
 * 5. create a mesh using the geometry and material
 * 6. add mesh onto the scene
 * 7. create a camera & add it to the scene
 * 8. position the camera
 * 9. create a renderer object & render the scene
 */
const canvas = document.querySelector('#canvas'),
  scene = new THREE.Scene(),
  geometry = new THREE.BoxGeometry(1, 1, 1),
  material = new THREE.MeshBasicMaterial({ color: 0xff0000 }),
  mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// Camera
const sizes = [800, 600],
  FOV = 103,
  camera = new THREE.PerspectiveCamera(FOV, sizes[0] / sizes[1]);
camera.position.z = 2;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas,
});

renderer.setSize(...sizes);

renderer.render(scene, camera);
