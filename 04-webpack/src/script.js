import './style.css';
import {
  Mesh,
  Scene,
  BoxGeometry,
  MeshBasicMaterial,
  PerspectiveCamera,
  WebGLRenderer,
} from 'three';

const canvas = document.querySelector('canvas'),
  scene = new Scene(),
  geometry = new BoxGeometry(1, 1, 1),
  material = new MeshBasicMaterial({
    color: 0xff0000,
  }),
  mesh = new Mesh(geometry, material);

scene.add(mesh);

const sizes = [800, 600],
  FOV = 75,
  camera = new PerspectiveCamera(FOV, sizes[0] / sizes[1]);
camera.position.z = 2;

scene.add(camera);

const renderer = new WebGLRenderer({
  canvas,
});

renderer.setSize(...sizes);
renderer.render(scene, camera);
