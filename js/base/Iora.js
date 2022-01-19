import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';
import { ArcballControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/ArcballControls.js';

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
class Scene{
    self = null;
    container = null;

    frame = 0;
    time = 0;
    _time = 0;
    _start_time = 0;
    state = {
        // move: 'up',
        // move_start: -15,
        move_speed: 1,
        move_vt: 0,
        move_v0: 0,
        move_time: 0,
    };

    scene = null;
    renderer = null;

    lights = [];
    camera = null;
    cameras = [];

    materials = [];
    textures = [];
    objects = [];

    constructor(container){
        this.self = this;
        this.container = $(container);

        this.scene = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({alpha:true, antialias:true});

        this.load_lights(this);
        this.load_cameras(this);

        this.load_controls(this);
        this.load_effects(this);

        this.register_materials(this);
        this.register_textures(this);
        this.load_objects(this);

        this.container.append(this.renderer.domElement);
        this.ready(this);

        this._start_time = performance.now();
        this._tick(this);
    }

    load_lights(context){
        // Hemisphere
        const hemi = new THREE.HemisphereLight(0xffffff, 0xcccccc, 1.2);
        hemi.position.set(200,-200,0);
        hemi.castShadow = true;
        this.lights.push(hemi);
        this.scene.add(hemi);
    }

    load_cameras(context){
        // Camera
        const camera = new THREE.PerspectiveCamera(75, this.container.width() / this.container.height(), 0.1, 10000);
        camera.position.set(0, -250, 100);
        camera.rotation.set(90 * Math.PI / 180, 0, 0);
        this.cameras.push(camera);

        this.camera = camera;
    }

    load_controls(context){
        //
    }

    load_effects(context){
        //
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
            model.rotation.set(90 * Math.PI / 180, -20 * Math.PI / 180, 0);
            model.position.set(0,0,-25);
            model.castShadow = true;
            model.receiveShadow = false;

            // const parts = [model.children[0], ...(model.children[0].children)];
            const parts = getAllChildren(model);
            console.log(parts);
            parts.forEach(function(el, i){
                if(typeof el.material == 'object'){
                    // el.material.metalness = 0;
                    // el.material.roughness = 1;
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

                objects["iora"].rotation.set((90 + (x * -30/top)) * Math.PI / 180, (y/left) * 30 * Math.PI / 180,0);
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
        const A = 0.0001, S0 = -15, Sn = 10;
        const mid = Math.round(S0 + ((Sn - S0)/2));
        const t = state.move_time / 3;

        if(iora instanceof THREE.Object3D){
            state.move_vt = state.move_v0 + (state.move_speed * A * t * t / 2);
            if((t * Math.sign(t)) % 1 == 0) iora.position.z += state.move_vt;

            state.move_time++;
            if(state.move_vt > 0.5 || state.move_vt < -0.5){
                state.move_v0 = 0.499999 * Math.sign(state.move_vt);
                state.move_time = 0;
                state.move_speed *= -1;
            }
        }
    }

    _tick(context){
        context.frame++;
        context.time = performance.now() - context._start_time;
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