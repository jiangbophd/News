/**
 * Created by Richard on 12/24/17.
 */
import { createSelector } from 'reselect';

export const getPics = createSelector(
  [
    state => state.home.getNewsData,
  ],
  (newsData) => {
    let pics = newsData.filter(item => item.pic !== '');
    return pics.slice(0, 4);
  }
);
