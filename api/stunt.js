const { size } = require("lodash");

const a = {
  ok: true,
  result: {
    message_id: 38,
    from: {
      id: 6905097620,
      is_bot: true,
      first_name: 'clipsi',
      username: 'clipsibot'
    },
    chat: {
      id: 2143276019,
      first_name: 'Chaitanya',
      last_name: 'Sadhan',
      username: 'ChaitanyaSadhan',
      type: 'private'
    },
    date: 1714043066,
    text: 'bokada6'
  }
};

const b = [1, 3, 5];

console.log(b[size(b)-1]);