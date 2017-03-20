;(function(window){

    var renderer, scene, camera;

    function init(){

        // 创建透视摄像机，设置摄像机长宽比为窗口比例
        camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 2000);
        camera.position.set(-4,6,6)
        camera.lookAt(new THREE.Vector3(0, 1, 0));

        // 新建空场景
        scene = new THREE.Scene();

        // 给场景添加环境光
        scene.add(new THREE.AmbientLight(0x404040));

        // 给场景添加平行光，并设置颜色，光源位置和允许产生阴影
        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(-10,8,3);
        light.castShadow = true;
        scene.add(light);

        // 创建环状体的材质
        var wheelMaterial = new THREE.MeshLambertMaterial({
            color: 0xffffff
        });

        var wheelPosArray = [
            { x: -1.1, y: 0.2, z: 1.2},
            { x: 1.1, y: 0.2, z: 1.2},
            { x: -1.1, y: 0.2, z: -1.2},
            { x: 1.1, y: 0.2, z: -1.2}
        ];

        // 创建环状体，并赋予材质
        for(var i = 0; i < wheelPosArray.length; i++){

            var wheel = new THREE.Mesh(

                new THREE.TorusGeometry(0.7,0.2,16,100),
                wheelMaterial
            );

            // 这里设置环状体产生和接收阴影
            wheel.castShadow = true;
            wheel.reveiveShadow = true;
            wheel.rotation.y = 90*Math.PI/180;

            wheel.position.x = wheelPosArray[i].x;
            wheel.position.y = wheelPosArray[i].y;
            wheel.position.z = wheelPosArray[i].z;
            scene.add(wheel);
        }

        // 创建正方体，并赋予Phong材质
        var carBody = new THREE.Mesh(
            new THREE.CubeGeometry(3,2,4),
            new THREE.MeshPhongMaterial({
                color: 0x00DBCD
            })
        );

        // 设置正方体产生和接收阴影
        carBody.castShadow = true;
        carBody.receiveShadow = true;
        carBody.position.y = 2;
        scene.add(carBody);

        // 创建平面作为地面，赋予兰伯特材质
        var floor = new THREE.Mesh(
            new THREE.PlaneGeometry(300,300),
            new THREE.MeshLambertMaterial({
                color: 0xcccccc
            })
        );
        // 设置地面产生和接收阴影
        floor.castShadow = true;
        floor.receiveShadow  = true;

        floor.rotation.set(-90*Math.PI/180,0,0)
        floor.position.set(0,-0.55,0);
        scene.add(floor);

        // 创建平面作为墙面，赋予兰伯特材质
        var wall_1 = new THREE.Mesh(
            new THREE.PlaneGeometry(30,30),
            new THREE.MeshLambertMaterial({
                color: 0xEEFF00
            })
        );
        // 设置墙面产生和接收阴影
        wall_1.castShadow = true;
        wall_1.receiveShadow  = true;

        wall_1.rotation.set(0*Math.PI/180,0,0)
        wall_1.position.set(0,3,-5);
        scene.add(wall_1);
        
        var wall_2 = new THREE.Mesh(
            new THREE.PlaneGeometry(30,30),
            new THREE.MeshLambertMaterial({
                color: 0x05FF00
            })
        );
        wall_2.castShadow = true;
        wall_2.receiveShadow  = true;

        wall_2.rotation.set(0,-90*Math.PI/180,0)
        wall_2.position.set(5,3,0);
        scene.add(wall_2);

        // 初始化渲染器
        renderer = new THREE.WebGLRenderer();

        // 设置允许渲染阴影
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        
        renderer.setPixelRatio(window.devicePixelRatio);
        // 设置渲染画面大小为窗口大小
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 生成canvas添加到body中
        document.body.appendChild(renderer.domElement);

        // 开始渲染
        renderer.render(scene, camera);

        // 添加窗口大小改变监听，使摄像机长宽比、渲染画面大小和窗口一致
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