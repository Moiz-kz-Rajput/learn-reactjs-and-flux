import AppActions from '../actions/AppActions';

export default {
  searchText(search) {
    const url = 'http://api.duckduckgo.com/?q=' + search.text + '&format=json&pretty=1';
    $.ajax({
      url: url,
      dataType: 'jsonp',
      cache: false,
      success: (data) => {
        AppActions.receiveResults(data.RelatedTopics);
      },
      error: (xhr, status, err) => {
        console.error(err);
      }
    });
  }
}