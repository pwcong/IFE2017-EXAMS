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

            wheel.rotation.y = 90*Math.PI/180;

            wheel.position.x = wheelPosArray[i].x;
            wheel.position.y = wheelPosArray[i].y;
            wheel.position.z = wheelPosArray[i].z;
            scene.add(wheel);
        }

        // 创建正方体，并赋予兰伯特材质
        var carBody = new THREE.Mesh(
            new THREE.CubeGeometry(3,2,4),
            new THREE.MeshLambertMaterial({
                color: 0x00DBCD
            })
        );

        carBody.position.y = 2;
        scene.add(carBody);

        // 创建平面作为地面，赋予兰伯特材质
        var floor = new THREE.Mesh(
            new THREE.PlaneGeometry(300,300),
            new THREE.MeshLambertMaterial({
                color: 0xcccccc
            })
        );

        floor.rotation.set(-90*Math.PI/180,0,0)
        floor.position.set(0,-0.55,0);
        scene.add(floor);

        // 初始化渲染器
        renderer = new THREE.WebGLRenderer();
        
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