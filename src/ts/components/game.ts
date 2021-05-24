import { BaseComponent } from './base-component';
import { Card } from './card';
import { CardsField } from './cards-field';
import { delay } from '../../shared/delay';
import { Timer } from './timer';

const FLIP_DELAY = 1500;

export class Game extends BaseComponent {
  private readonly cardsField: CardsField;

  private readonly timer: Timer;

  private activeCard?: Card;

  private isAnimation = false;

  constructor() {
    super();
    this.timer = new Timer();
    this.cardsField = new CardsField();
    this.element.appendChild(this.cardsField.element);
  }

  newGame(images: string[]) {
    this.cardsField.clear();
    const cards = images
      .concat(images)
      .map((url) => new Card(url))
      .sort(() => Math.random() - 0.5);
    cards.forEach((card) => {
      card.element.addEventListener('click', () => this.cardHandler(card));
    });
    this.cardsField.addCards(cards);
    this.timer.startTimer();// Start Timer//////////////////////
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (!card.isFlipped) return;

    this.isAnimation = true;
    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }

    if (this.activeCard.image !== card.image) {
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      // Green background
    }

    this.activeCard = undefined;
    this.isAnimation = false;
  }
}
