document.getElementById('submit-button').addEventListener('click', function() {
    var answer = document.getElementById('answer-input').value.trim().toLowerCase();
    var correctAnswer = '노무현'; // 여기에서 정답을 설정하세요

    if (answer === correctAnswer) {
        document.getElementById('result').textContent = '정답입니다!';
        document.getElementById('result').style.color = 'green';
        // 이미지 변경
        document.querySelector('.silhouette-image').src = 'answer.jpg';
    } else {
        document.getElementById('result').textContent = '틀렸습니다. 다시 시도하세요.';
        document.getElementById('result').style.color = 'red';
    }
});
