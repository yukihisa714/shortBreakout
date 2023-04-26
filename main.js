t = c.getContext("2d");
L = [];
b.onkeydown = e => L[e.keyCode] = 1;
b.onkeyup = e => L[e.keyCode] = 0;
for (i = 10; i--;) L[i] = Array(10).fill(5 - i);
s = c => t.fillStyle = c;
r = (x, y, w, h) => t.fillRect(x, y, w, h);
px = 30; py = 90;
bx = 50; by = 85;
vx = vy = 1;
setInterval(z => {
    t.clearRect(0, 0, 100, 100);
    if (by < 99) {
        s("blue");
        for (i = 50; i--;)L[y = i / 10 | 0][x = i % 10] && r(x * 10, y * 10, 10, 10);

        bx += vx; by += vy;
        if (bx < 2 || 98 < bx) vx *= - 1;
        if (L[y = by / 10 | 0][x = bx / 10 | 0] > 0) vy *= -1, L[y][x] = 0;
        if (px < bx && bx < px + 40 && py < by + 2 && by < py + 4) vy *= -1;
        s("red");
        r(bx - 2, by - 2, 4, 4);

        if (L[37] && 0 < px) px -= 2;
        if (L[39] && px < 60) px += 2;
        s("#fff");
        r(px, py, 40, 4)
    } else s("#fff"), t.fillText("GAME OVER", 20, 55)
}, 32)