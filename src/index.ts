import { Button } from './components/Button/Button';

const app = document.getElementById('app');

if (app) {
  const button1 = new Button('Button');
  const button2 = new Button('Button Primary', 'primary');
  const button3 = new Button('Button Kill', 'kill');
  
  app.append(button1.render(), button2.render(), button3.render());
}