// 紙吹雪を生成してランダムに配置するスクリプト
function createSnowflakes() {
    const container = document.getElementById('snow-container');
    const numFlakes = 100; // 紙吹雪の数

    // ランダムな色の配列
    const colors = ['#ff5a5f', '#ff9a8b', '#ffcc00', '#50bfe6', '#ffabab', '#ff77ff'];

    for (let i = 0; i < numFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // ランダムな位置とアニメーションの遅延を設定
        const sizeWidth = Math.random() * 20 + 10; // 幅のランダム化
        const sizeHeight = Math.random() * 10 + 5; // 高さのランダム化
        const left = Math.random() * 100; // 横のランダム位置
        const animationDelay = Math.random() * 5; // アニメーション遅延
        const randomColor = colors[Math.floor(Math.random() * colors.length)]; // ランダムな色を選ぶ

        snowflake.style.width = `${sizeWidth}px`;
        snowflake.style.height = `${sizeHeight}px`;
        snowflake.style.left = `${left}vw`;
        snowflake.style.animationDelay = `${animationDelay}s`;
        snowflake.style.backgroundColor = randomColor; // ランダムに色を設定

        container.appendChild(snowflake);
    }
}

createSnowflakes();
