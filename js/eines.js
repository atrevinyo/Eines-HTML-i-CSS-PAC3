import Viewer from 'viewerjs';


const  zoomImatge = (id) => {
  const viewer = new Viewer(document.getElementById(id), {
     viewed() {
       viewer.zoomTo(1);
     },
  });
  viewer.show();
}

window.zoomImatge = zoomImatge;


