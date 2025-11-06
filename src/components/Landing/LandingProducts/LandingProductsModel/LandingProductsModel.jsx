import * as OV from 'online-3d-viewer';
import { useEffect, useRef } from 'react';



function LandingProductsModel({ model }) {
   const viewerRef = useRef(null);

   useEffect(() => {
      const parentDiv = viewerRef.current;

      const viewer = new OV.EmbeddedViewer(parentDiv, {
         camera: new OV.Camera(
            new OV.Coord3D(100, 30, 150), // позиция камеры
            new OV.Coord3D(0, 0, 0),   // точка, на которую смотрит
            new OV.Coord3D(0, 1, 0),   // "вверх"
            45.0
         ),
         backgroundColor: new OV.RGBAColor(255, 255, 255, 0),
         edgeSettings: new OV.EdgeSettings(false, new OV.RGBColor(255, 255, 255), 1),
         projectionMode: OV.ProjectionMode.Perspective,
         environmentSettings: new OV.EnvironmentSettings(
            [
               '/model/assets/envmaps/ice_river/posx.jpg',
               '/model/assets/envmaps/ice_river/negx.jpg',
               '/model/assets/envmaps/ice_river/posy.jpg',
               '/model/assets/envmaps/ice_river/negy.jpg',
               '/model/assets/envmaps/ice_river/posz.jpg',
               '/model/assets/envmaps/ice_river/negz.jpg'
            ],
            false
         )
      });

      viewer.LoadModelFromUrlList([model], () => {

      });

      const viewer3D = viewer.GetViewer();
      const camera = viewer3D.camera;

      const radius = 200;
      let angle = 0;

      const animate = () => {

         requestAnimationFrame(animate);

         angle += 0.01;

         const x = Math.sin(angle) * radius;
         const z = Math.cos(angle) * radius;

         // Меняем положение камеры
         camera.position.x = x;
         camera.position.z = z;

         // Обновляем target камеры — она всегда смотрит на центр
         // camera.target.x = 0;
         // camera.target.y = 0;
         // camera.target.z = 0;
         console.log(camera);


         // Обновляем рендер
         viewer3D.renderer.render(viewer3D.scene, viewer3D.camera);
      };

      // animate();
   }, []);

   return (
      <div className="online_3d_viewer" ref={viewerRef}>
      </div>
   );
}

export default LandingProductsModel;