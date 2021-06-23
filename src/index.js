import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { onDomReady } from 'cantil';

const app = () => {
  // Init Carousel
  queryAll('.carousel .row img').forEach(image => image.onclick = () => query('.carousel .container img').src = image.src);
};

onDomReady().then(app);
