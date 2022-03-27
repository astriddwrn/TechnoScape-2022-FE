import * as THREE from 'three';
import { GLTFLoader } from 'https://unpkg.com/three@0.136.0/examples/jsm/loaders/GLTFLoader.js';
import * as postprocessing from 'https://cdn.jsdelivr.net/npm/postprocessing@6.23.5/build/postprocessing.esm.js';
// import { ArcballControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/ArcballControls.js';

// HELPER
window.THREE = THREE;

function HaloIora(params){
    let frame = 0;
    let _time = 0;
    const state = {};

    const renderer = new THREE.WebGLRenderer(params);
    const $container = $(params.container);

    // const composer = new EffectComposer( renderer );

    const scene = new THREE.Scene();

    const cameras = new THREE.ArrayCamera([]);
    let camera = null;
    scene.add(cameras);

    const materials = [];
    const textures = [];

    $container.append(renderer.domElement);
    const clock = new THREE.Clock(true);

    (async ()=>{
        await load_lights();
        await load_cameras();
        await load_controls();
        await load_effects();
        await register_materials();
        await register_textures();
        await load_objects();

        assign2renderer();

        clock.start();
        scene.dispatchEvent({type:'ready', renderer});
        _tick(0);
    })();

    async function load_lights(){
        //
    }

    async function load_cameras(){
        //
    }

    async function load_controls(){
        //
    }

    async function load_effects(){
        //
    }

    async function register_materials(){
        //
    }

    async function register_textures(){
        //
    }

    async function load_objects(){
        // const loader = new GLTFLoader();

        // var gltf = new Promise((res, rej)=>loader.load('./file.gltf', res, undefined, rej));
    }

    function render() {
        return renderer.render(scene, camera);
    }

    scene.addEventListener('ready', function(){
        //
    });

    scene.addEventListener('update', function(){
        //
    });

    scene.addEventListener('animate', function(){
        //
    });

    function _tick(t=0){
        frame++;
        _time = t;
        assign2renderer();
        requestAnimationFrame(_tick);

        renderer.setSize($container.width(), $container.height());
        camera.aspect = $container.width() / $container.height();
        if(camera) camera.updateProjectionMatrix()

        scene.dispatchEvent({type:'update', renderer});
        scene.dispatchEvent({type:'animate', renderer});
        render();
    }

    function assign2renderer(){
        Object.assign(renderer, {
            frame, _time, state, $container, scene, 
            cameras, camera, materials, textures, clock,
            _tick,
            // composer
        });
    }

    return renderer;
}