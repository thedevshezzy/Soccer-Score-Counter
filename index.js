$(() => {
  let team1Score = 0,
    team2Score = 0;
  let team1Name = 'Team1';
  let team2Name = 'Team2';
  let _flag_goaled = false;

  setTimeout(() => {
    console.clear();
    console.log(
      '%c ---  LOGS START  ---',
      'color:yellow;margin-left:45%;font-size:20px'
    );
    console.group('Logs');
  }, 50);

  let updateScore = () => {
    $('#team1Score').html(team1Score);
    $('#team2Score').html(team2Score);
  };

  let increase = (team) => {
    switch (team) {
      case 'team1':
        if (!_flag_goaled) {
          team1Score++;
          updateScore();
          _flag_goaled = true;
          $('#team1ScoreButton .teamBall').toggleClass('animate');
          setTimeout(() => {
            _flag_goaled = false;
            $('#team1ScoreButton .teamBall').toggleClass('animate');
          }, 2000);
          console.log(
            `%c ${team1Name} Scored !!! ⚽ --- Current Score: ${team1Score}`,
            'color: green'
          );
        }
        break;
      case 'team2':
        if (!_flag_goaled) {
          team2Score++;
          updateScore();
          _flag_goaled = true;
          $('#team2ScoreButton .teamBall').toggleClass('animate');
          setTimeout(() => {
            _flag_goaled = false;
            $('#team2ScoreButton .teamBall').toggleClass('animate');
          }, 2000);
          console.log(
            `%c ${team2Name} Scored !!! ⚽ --- Current Score: ${team2Score}`,
            'color: green'
          );
        }
        break;
      default:
        alert('bug');
    }
  };

  let decrease = (team) => {
    switch (team) {
      case 'team1':
        if (team1Score > 0) {
          team1Score--;
          updateScore();
          console.log(
            `%c ${team1Name} Score Deducted !!! ⛔ --- Current Score: ${team1Score}`,
            'color: red'
          );
        }
        break;
      case 'team2':
        if (team2Score > 0) {
          team2Score--;
          updateScore();
          console.log(
            `%c ${team2Name} Score Deducted !!! ⛔ --- Current Score: ${team2Score}`,
            'color: red'
          );
        }
        break;
    }
  };

  $('.addButton').on('click', '', () => {
    $('.addForm').slideToggle();
  });

  $('#team1NameInput').on('keydown keyup change', () => {
    team1Name = $('#team1NameInput').val().toUpperCase();
    $('#team1Name').html(team1Name);
  });

  $('#team2NameInput').on('keydown keyup change', () => {
    team2Name = $('#team2NameInput').val().toUpperCase();
    $('#team2Name').html(team2Name);
  });

  $('#team1ScoreButton').on('click', () => {
    increase('team1');
  });

  $('#team2ScoreButton').on('click', () => {
    increase('team2');
  });

  $('#team1Minus').on('click', () => {
    decrease('team1');
  });

  $('#team2Minus').on('click', () => {
    decrease('team2');
  });

  $('#resetButton').on('click', () => {
    team1Score = 0;
    team2Score = 0;
    updateScore();
    console.log(
      '%c ---  SCORE RESET  --- ',
      'color: orange;font-size:20px;margin-left:45%;'
    );
    $('#team1NameInput').trigger('focus');
  });

  $(document).on('keyup', (e) => {
    if (e.keyCode == 192) {
      $('.addForm').slideToggle();
      $('#team1NameInput').trigger('focus');
    } else if (
      e.keyCode == 97 &&
      $(document.activeElement)[0].nodeName != 'INPUT'
    ) {
      $('#team1ScoreButton').trigger('click');
    } else if (
      e.keyCode == 98 &&
      $(document.activeElement)[0].nodeName != 'INPUT'
    ) {
      $('#team2ScoreButton').trigger('click');
    }
  });

  $('input').on('keydown keyup', (e) => {
    if (e.keyCode == 192) {
      e.preventDefault();
    }
  });

  updateScore();
  $('.addForm').slideToggle();
});
