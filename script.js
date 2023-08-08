document.addEventListener('DOMContentLoaded', function () {
    const saveBtn = document.getElementById('saveBtn');
    const scoreCells = document.querySelectorAll('.score');
    const incrementButtons = document.querySelectorAll('.increment');
    const decrementButtons = document.querySelectorAll('.decrement');
  
    // Increment score
    incrementButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const currentScore = parseInt(scoreCells[index].textContent);
        scoreCells[index].textContent = currentScore + 1;
      });
    });
  
    // Decrement score
    decrementButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const currentScore = parseInt(scoreCells[index].textContent);
        if (currentScore > 0) {
          scoreCells[index].textContent = currentScore - 1;
        }
      });
    });
  
    // Save Leaderboard
    saveBtn.addEventListener('click', () => {
      const leaderboardData = [];
      scoreCells.forEach((scoreCell, index) => {
        leaderboardData.push({
          name: scoreCell.previousElementSibling.textContent,
          score: parseInt(scoreCell.textContent),
          rank: index + 1,
        });
      });
  
      // Here, you can implement your save logic (e.g., using local storage or sending data to a server)
      // For this example, we'll just log the data to the console
      console.log(leaderboardData);
    });
  });
  