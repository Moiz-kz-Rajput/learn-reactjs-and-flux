import AppActions from '../actions/AppActions';

export function addNote(note) {
  $.ajax({
    url: "https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=EfYYMThabdspT0pqbw6RMhE5mE17T98J",
    data: JSON.stringify(note),
    type: "POST",
    contentType: "application/json"
  });
}

export function getNotes() {
  $.ajax({
    url: "https://api.mlab.com/api/1/databases/stickypad/collections/notes?apiKey=EfYYMThabdspT0pqbw6RMhE5mE17T98J",
    dataType: "json",
    cache: false,
    success: (data) => {
      AppActions.receiveNotes(data);
    },
    error: (xhr, status, err) => {
      console.error(err);
    }
  });
}