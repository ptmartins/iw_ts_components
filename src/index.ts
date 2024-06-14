import { Button } from './components/Button/Button';
import { Card } from './components/Card/Card';

const app = document.getElementById('app');


const button1 = new Button('Button');
const button2 = new Button('Button Primary', 'primary');
const button3 = new Button('Button Kill', 'kill');

const card = new Card('Hello Card');

app.append(button1.render(), button2.render(), button3.render(), card.render());
