// 紙吹雪を生成してランダムに配置するスクリプト
function createSnowflakes() {
    const container = document.getElementById('snow-container');
    const numFlakes = 100; // 紙吹雪の数

    for (let i = 0; i < numFlakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // ランダムな位置とアニメーションの遅延を設定
        const size = Math.random() * 10 + 5; // サイズのランダム化
        const left = Math.random() * 100; // 横のランダム位置
        const animationDelay = Math.random() * 5; // アニメーション遅延

        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${left}vw`;
        snowflake.style.animationDelay = `${animationDelay}s`;

        container.appendChild(snowflake);
    }
}

createSnowflakes();
