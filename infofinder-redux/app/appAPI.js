import {receiveResults} from './actions';

export default {
  searchText(search) {
    const url = 'http://api.duckduckgo.com/?q=' + search.text + '&format=json&pretty=1';
    $.ajax({
      url: url,
      dataType: 'jsonp',
      cache: false,
      success: (data) => {
        receiveResults(data.RelatedTopics);
      },
      error: (xhr, status, err) => {
        console.error(err);
      }
    });
  }
};