import GameSavingLoader from './GameSavingLoader';
import GameSaving from './GameSaving';

(async (data) => {
  try {
    const loadedGame = GameSavingLoader.load(data);
    const savedGame = new GameSaving(loadedGame);
    return savedGame;
  } catch (error) {
    throw new Error(error);
  }
})();
