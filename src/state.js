import { normalizeWord } from "./functions";
import { cleanFact } from "./functions";

class GoatFactState {
  #goatFacts;

  constructor(onUpdate) {
    this.#goatFacts = [];
    this.wordFilter = "";
    this.numberFilter = 0;
    this.onUpdate = onUpdate;
  }

  static types = {
    GOAT_FACTS: "GOAT_FACTS",
    WORD_FILTER: "WORD_FILTER",
    NUMBER_FILTER: "NUMBER_FILTER",
  };

  get goatFacts() {
    if (!(this.wordFilter && this.numberFilter)) {
      return this.#goatFacts;
    }
    const wordFilter = this.wordFilter;
    const numberFilter = this.numberFilter - 1;
    return this.#goatFacts.filter((fact) => {
      const cleaned = cleanFact(fact)
      const factArr = cleaned.split(/\s/);
      return (
        factArr[numberFilter] &&
        normalizeWord(factArr[numberFilter]) === normalizeWord(wordFilter.toLowerCase())
      );
    });
  }

  set goatFacts(val) {
    this.#goatFacts = val;
  }

  update(type, value) {
    switch (type) {
      case GoatFactState.types.GOAT_FACTS:
        this.goatFacts = value;
        break;
      case GoatFactState.types.WORD_FILTER:
        console.log("whatt?");
        this.wordFilter = value;
        break;
      case GoatFactState.types.NUMBER_FILTER:
        this.numberFilter = value;
        break;
    }

    this.onUpdate(this.goatFacts);
  }
}

export default GoatFactState;
