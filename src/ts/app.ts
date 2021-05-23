import { Game } from './components/game';
import { ImageCategoryModel } from '../models/image-category-model';

export class App {
  private readonly game: Game;

  constructor(private readonly rootElement: HTMLElement) {
    this.game = new Game();
    this.rootElement.appendChild(this.game.element);
    this.game.element.classList.add('field-wrapper');
  }

  async start() {
    const res = await fetch('./images.json');
    const categories: ImageCategoryModel[] = await res.json();

    // Select kind of pictures (top)
    const cat = categories[0];
    const images = cat.images.map((name) => `${cat.category}/${name}`);
    this.game.newGame(images);
  }
}