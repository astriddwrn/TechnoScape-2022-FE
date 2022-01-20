import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';
// import { ArcballControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/ArcballControls.js';

// HELPER
window.THREE = THREE;

export function getAllChildren(objects){
    const mixed = [objects];

    const child = objects.children;

    // mixed.push(...child);
    child.forEach(function(el, i){
        mixed.push(...getAllChildren(el));
    });

    return mixed;
}

// CLASS
class Renderer extends THREE.WebGLRenderer{
    self = null;
    container = null;

    frame = 0;
    clock = 0; // Three.Clock
    _time = 0; // requestAnimationFrame((_time)=>{})
    state = {
        move_speed: 1,
        move_vt: 0,
        move_v0: 0,
        move_time: 0,
        ratio_add: -5
    };

    scene = null; // Three.Scene
    renderer = null; // this<Three.WebGLRenderer> | EffectComposer

    camera = null; // Used Camera for Rendering
    cameras = null; // Three.ArrayCamera

    materials = [];
    textures = [];

    constructor(params){
        super(params);
        this.self = this;
        this.$container = $(params.container);

        this.scene = new THREE.Scene();
        this.renderer = this;

        this.load_lights(this);

        this.cameras = new THREE.ArrayCamera([]);
        this.scene.add(this.cameras);
        this.load_cameras(this);

        this.load_controls(this);
        this.load_effects(this);

        this.register_materials(this);
        this.register_textures(this);
        this.load_objects(this);

        this.$container.append(this.domElement);
        this.ready(this);

        this.clock = new THREE.Clock(true);
        this.clock.start();
        this._tick(this);
    }

    load_lights({scene}){
        // Point Light - Top Front Left
        const point1 = new THREE.PointLight( 0xffffff, 0.8, 10000 );
        point1.position.set(-113,-598,480);
        scene.add(point1);

        // Point Light - Bottom Front Right
        const point2 = new THREE.PointLight( 0xffffff, 0.5, 10000 );
        point2.position.set(100,-585,-463);
        scene.add(point2);
    }

    load_cameras({$container, cameras, scene, self}){
        // Camera
        const camera = new THREE.PerspectiveCamera(75, $container.width() / $container.height(), 0.1, 10000);
        camera.position.set(0, -210, 100);
        camera.rotation.set(90 * Math.PI / 180, 0, 0);
        cameras.add(camera);

        // Ortho
        // const width = $container.width();
        // const height = $container.height();
        // const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );
        // camera.position.set(0, -210, 100);
        // camera.rotation.set(90 * Math.PI / 180, 0, 0);
        // cameras.add(camera);
        // scene.add(camera);
        
        self.camera = camera;
    }

    load_controls(context){
        //
    }

    load_effects({self, scene, camera}){
        // Renderer
        self.outputEncoding = THREE.sRGBEncoding;
        self.toneMapping = THREE.ACESFilmicToneMapping;
    }

    register_materials(context){
        //
    }

    register_textures(context){
        //
    }

    load_objects({scene}){
        const loader = new GLTFLoader();

        // Load IORA
        loader.load('./assets/3d/mascot.glb', function(gltf){
            const model = gltf.scene;
            gltf.scene.gltf = gltf;

            model.name = 'iora';
            model.scale.set(100,100,100);
            model.rotation.set(92 * Math.PI / 180, 0, 0);
            model.children[0].rotation.set(0, -20 * Math.PI / 180, 0);
            model.position.set(0,0,-25);
            model.castShadow = true;
            model.receiveShadow = false;

            const parts = getAllChildren(model);
            parts.forEach(function(el, i){
                if(typeof el.material == 'object'){
                    el.material.metalness = 0;
                    el.material.roughness = 0.5;
                }
            });

            scene.add(model);
            scene.dispatchEvent({type:'iora_loaded', gltf});
        }, undefined, undefined);

    }

    ready({$container, scene, self}){
        scene.addEventListener('iora_loaded', function(gltf){
            const iora = scene.getObjectByName('iora');
            $('#loading-page').hide();

            $("body").mousemove(function(e){
                const offset = $container.offset();
                const width = $container.width();
                const height = $container.height();
                const left = offset.left + (width / 2);
                const top = offset.top + (height / 2);

                var y = (left - e.pageX) * -1;
                var x = top - e.pageY;

                // atas-bawah (x * NUM/top)
                // kanan-kiri (y/left) * NUM
                // objects["iora"].rotation.set((90 + (x * -3/top)) * Math.PI / 180, (y/left) * 10 * Math.PI / 180,0);
                iora.children[0].rotation.set((x * -5/top) * Math.PI / 180, (-5 + ((y/left) * 20)) * Math.PI / 180,0);
            });
        });
    }

    update(context){
        //
    }

    animate({scene, state, clock}){
        // Ngambang [-15 ~ 0 ~ 10]
        const iora = scene.getObjectByName('iora');

        // A dalam px / frames ^ 2
        const A = 0.0001, S0 = -15, Sn = 10;
        const mid = Math.round(S0 + ((Sn - S0)/2));

        // delay waktu dalam frames
        const t = state.move_time / 5;

        if(iora instanceof THREE.Object3D){
            state.move_vt = state.move_v0 + (state.move_speed * A * t * t / 2);
            if((t * Math.sign(t)) % 1 == 0) iora.position.z += state.move_vt;

            state.move_time++;
            // kecepatan optimum
            if(state.move_vt > 0.3 || state.move_vt < -0.3){
                state.move_v0 = 0.299999 * Math.sign(state.move_vt);
                state.move_time = 0;
                state.move_speed *= -1;
            }
        }
    }

    _tick({self, state, scene, renderer, camera, $container}){
        self.frame++;
        requestAnimationFrame((t)=>{
            self._time = t;
            self._tick(self);
        });

        renderer.setSize($container.width(), $container.height());
        camera.aspect = ($container.width() + state.ratio_add) / $container.height();
        camera.updateProjectionMatrix()

        self.update(self);
        self.animate(self);
        renderer.render(scene, camera);
    }
}

export default Renderer;