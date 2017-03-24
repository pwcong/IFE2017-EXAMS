;(function(window){

    var renderer, scene, camera, controls;
    
    init();
    autoRefresh();
    
    function init(){

        // 创建透视摄像机，设置摄像机长宽比为窗口比例
        camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 5000);
        camera.position.set(0,200,0);

        // 新建空场景
        scene = new THREE.Scene();

        // 添加灯光
        var light1 = new THREE.PointLight( 0xACFFAA, 0.7, 500 );
        light1.position.set(200,50,-100);
        light1.castShadow = true;
		scene.add( light1 );

        var light2 = new THREE.PointLight( 0xF7FFBF, 0.8, 500 );
        light2.position.set(0,150,200);
        light2.castShadow = true;
		scene.add( light2 );

        var light3 = new THREE.PointLight( 0xFFFFFF, 1, 500 );
        light3.position.set(-200,150,-100);
        light2.castShadow = true;
		scene.add( light3 );

        // 加载纹理贴图
        new THREE.TextureLoader().load('./textures/map.jpg', function(map){
            material.map = map;
            material.needsUpdate = true;
        });

        // 加载法线贴图
        new THREE.TextureLoader().load('./textures/normal.jpg', function(normal){
            material.normalMap = normal;
            material.needsUpdate = true;
        });

        var ball = new THREE.Mesh(
            new THREE.SphereGeometry(18,30,30),
            material
        );

        ball.position.y = 50;
        scene.add(ball);



        // 创建平面作为地面，赋予兰伯特材质
        var floor = new THREE.Mesh(
            new THREE.PlaneGeometry(2000,2000),
            new THREE.MeshStandardMaterial({
                color: 0xf5f5f5
            })
        );
        // 设置地面接收阴影
        floor.receiveShadow  = true;

        floor.rotation.set(-90*Math.PI/180,0,0)
        floor.position.set(0,0,0);
        scene.add(floor);


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

        controls = new THREE.OrbitControls(camera, renderer.domElement);
        controls.target.set(0,0,0);
        controls.update();

        // 添加窗口大小改变监听，使摄像机长宽比、渲染画面大小和窗口一致
        window.addEventListener('resize', onWindowResize, false);

    }

    function onWindowResize(){
        camera.aspect = window.innerWidth/window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);

        renderer.render(scene, camera);

    }

    function autoRefresh(){

        requestAnimationFrame(autoRefresh);
        renderer.render(scene, camera);

    }

    



})(window);