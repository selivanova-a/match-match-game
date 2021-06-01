import { BaseComponent } from '../components/base-component';

export class Score extends BaseComponent {
  constructor() {
    super('div', ['score-wrapper']);
    this.element.innerHTML = `
      <h1>Best players</h1>
      <div class="score-top">
        <div class="player-score">
         <div class="player-score__image"></div>
         <div class="player-score__description">
            <div class="name">Anastasya Selivanova</div>
            <div class="email">selivanovaana5tacia@yandex.ru</div>
         </div>
         <div class="player-score__result">Score: <span class="result-number">333</span></div>
        </div>
        <div class="decoration-line"></div>
      </div>
    `;
  }
}
