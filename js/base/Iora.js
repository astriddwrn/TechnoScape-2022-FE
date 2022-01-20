import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';
// import { ArcballControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/ArcballControls.js';

// HELPER
window.THREE = THREE;

export function PromiseHooks(){
    const hooks = {};
    const prom = new Promise((res, rej)=>{
        hooks.res = res;
        hooks.rej = rej;
    });
    prom.resolve = hooks.res;
    prom.reject = hooks.rej;
    return prom;
}

export function getAllChildren(objects){
    const mixed = [objects];

    const child = objects.children;

    // mixed.push(...child);
    child.forEach(function(el, i){
        mixed.push(...getAllChildren(el));
    });

    return mixed;
}

function getChildren(object){
    console.log({object});

    const children = object.children;

    console.log(children);
    children.forEach(function(el, i){
        getChildren(el);
    });
}

// CLASS
class Scene extends THREE.EventDispatcher{
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
    };

    scene = null; // Three.Scene
    renderer = null; // _renderer<Three.WebGLRenderer> | EffectComposer
    _renderer = null; // Three.WebGLRenderer

    lights = null; // Three.Group
    camera = null; // Used Camera for Rendering
    cameras = null; // Three.ArrayCamera

    materials = [];
    textures = [];
    objects = [];

    constructor(container){
        super();
        this.self = this;
        this.container = $(container);

        this.scene = new THREE.Scene();
        this._renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});
        this.renderer = this._renderer;

        this.lights = new THREE.Group();
        this.load_lights(this);

        this.cameras = new THREE.ArrayCamera([]);
        this.scene.add(this.cameras);
        this.load_cameras(this);

        this.load_controls(this);
        this.load_effects(this);

        this.register_materials(this);
        this.register_textures(this);
        this.load_objects(this);

        this.container.append(this.renderer.domElement);
        this.ready(this);

        this.clock = new THREE.Clock(true);
        this.clock.start();
        this._tick(this);
    }

    load_lights(context){
        // Point Light - Top Front Left
        const point1 = new THREE.PointLight( 0xffffff, 0.8, 10000 );
        point1.position.set(-113,-598,480);
        this.lights.add(point1);
        this.scene.add(point1);

        // Point Light - Bottom Front Right
        const point2 = new THREE.PointLight( 0xffffff, 0.5, 10000 );
        point2.position.set(100,-585,-463);
        this.lights.add(point2);
        this.scene.add(point2);
    }

    load_cameras(context){
        // Camera
        const camera = new THREE.PerspectiveCamera(75, this.container.width() / this.container.height(), 0.1, 10000);
        camera.position.set(0, -210, 100);
        camera.rotation.set(90 * Math.PI / 180, 0, 0);
        this.cameras.add(camera);
        
        this.camera = camera;
    }

    load_controls(context){
        //
    }

    load_effects(context){
        // Renderer
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    }

    register_materials(context){
        //
    }

    register_textures(context){
        //
    }

    load_objects({objects, scene}){
        const loader = new GLTFLoader();

        // Load IORA
        const iora = objects['iora'] = PromiseHooks();
        loader.load('./assets/3d/mascot.glb', iora.resolve, undefined, iora.reject);
        iora.then(function(gltf){
            const model = gltf.scene;
            gltf.scene.gltf = gltf;

            model.scale.set(100,100,100);     
            model.rotation.set(90 * Math.PI / 180, 0, 0);
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

            objects['iora'] = model;
            scene.add(model);
            return gltf;
        });

    }

    ready({objects, container}){
        objects["iora"].then(function(gltf){
            $('#loading-page').hide();

            $("body").mousemove(function(e){
                const offset = container.offset();
                const width = container.width();
                const height = container.height();
                const left = offset.left + (width / 2);
                const top = offset.top + (height / 2);

                var y = (left - e.pageX) * -1;
                var x = top - e.pageY;

                // atas-bawah (x * NUM/top)
                // kanan-kiri (y/left) * NUM
                objects["iora"].children[0].rotation.set((x * -3/top) * Math.PI / 180, (y/left) * 10 * Math.PI / 180,0);
            });
        });
    }

    update(context){
        //
    }

    render(context){
        var {objects, state, time} = context;

        // Ngambang [-15 ~ 0 ~ 10]
        const iora = objects["iora"];

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

    _tick(context){
        context.frame++;
        requestAnimationFrame((t)=>{
            context._time = t;
            context._tick(context);
        });

        context.renderer.setSize(context.container.width(), context.container.height());
        context.camera.aspect = context.container.width() / context.container.height();
        context.camera.updateProjectionMatrix()

        context.update(context);
        context.render(context);
        context.renderer.render(context.scene, context.camera);
    }
}

export default Scene;