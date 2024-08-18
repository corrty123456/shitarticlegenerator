document.getElementById('generateBtn').addEventListener('click', function() {
    const protagonist = document.getElementById('protagonist').value.trim();
    const event = document.getElementById('event').value.trim();
    const alternative = document.getElementById('alternative').value.trim();
    const output = document.getElementById('output');
    
    if (protagonist === "" || event === "" || alternative === "") {
        output.textContent = "請填寫所有字段！";
        return;
    }
    
    output.textContent = `最近，有關${protagonist}${event}的話題又一次引起了大家的關注。其實，${protagonist}${event}並不是我們想象中的那麼簡單。${protagonist}面臨的這個問題，可以說是非常有趣的。\n\n根據資料顯示，${protagonist}${event}實際上是${alternative}。這一點雖然讓人有些驚訝，但它揭示了很多我們未曾察覺的事實。\n\n總而言之，${protagonist}${event}讓我們重新思考了一些事情，對這件事的更多了解，讓我們對未來充滿了期待。`;
});
