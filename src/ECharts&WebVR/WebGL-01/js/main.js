;(function(window){

    var renderer, scene, camera;

    function init(){

        camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 2000);
        camera.position.set(-4,6,6)
        camera.lookAt(new THREE.Vector3(0, 1, 0));
        console.log(camera.rotation)

        scene = new THREE.Scene();

        scene.add(new THREE.AmbientLight(0x404040));



        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(-10,8,3);
        light.castShadow = true;

        scene.add(light);

        var wheelMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff
        });

        var wheelPosArray = [
            { x: -1.1, y: 0.2, z: 1.2},
            { x: 1.1, y: 0.2, z: 1.2},
            { x: -1.1, y: 0.2, z: -1.2},
            { x: 1.1, y: 0.2, z: -1.2}
        ];

        for(var i = 0; i < wheelPosArray.length; i++){

            var wheel = new THREE.Mesh(

                new THREE.TorusGeometry(0.7,0.2,16,100),
                wheelMaterial
            );

            wheel.castShadow = true;
            wheel.reveiveShadow = true;
            wheel.rotation.y = 90*Math.PI/180;

            wheel.position.x = wheelPosArray[i].x;
            wheel.position.y = wheelPosArray[i].y;
            wheel.position.z = wheelPosArray[i].z;
            scene.add(wheel);
        }

        var carBody = new THREE.Mesh(
            new THREE.CubeGeometry(3,2,4),
            new THREE.MeshLambertMaterial({
                color: 0x00DBCD
            })
        );
        carBody.castShadow = true;
        carBody.receiveShadow = true;
        carBody.position.y = 2;
        scene.add(carBody);

        var floor = new THREE.Mesh(
            new THREE.PlaneGeometry(300,300),
            new THREE.MeshLambertMaterial({
                color: 0xcccccc
            })
        );
        floor.castShadow = true;
        floor.receiveShadow  = true;

        floor.rotation.set(-90*Math.PI/180,0,0)
        floor.position.set(0,-0.55,0);
        scene.add(floor);


        renderer = new THREE.WebGLRenderer();

        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);
        renderer.render(scene, camera);

        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize(){
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.render(scene, camera);

    }

    init();



})(window);