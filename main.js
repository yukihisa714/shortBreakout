t = c.getContext("2d");
L = [];
for (i = 10; i--;) L[i] = Array(10).fill(5 - i);
s = c => t.fillStyle = c;
r = (x, y, w, h) => t.fillRect(x, y, w, h);
px = 30;
b.onkeydown = e => (k = e.keyCode - 38) ** 2 == 1 && -k < px && px < 60 - k && (px += k);
bx = 50; by = 85;
vx = vy = 1;
setInterval(z => {
    s("#000");
    r(0, 0, 100, 100);
    s("#eee");
    if (by < 94) {
        for (i = 50; i--;)L[y = i / 10 | 0][x = i % 10] && r(x * 10, y * 10, 10, 10);

        bx += vx; by += vy;
        if (bx < 0 || 96 < bx) vx *= - 1;
        if (L[y = by / 10 | 0][x = bx / 10 | 0] > 0 || (px < bx && bx < px + 40 && 86 < by)) vy *= -1, L[y][x] = 0;
        r(bx, by, 4, 4);

        r(px, 90, 40, 4)
    } else t.fillText("GAME OVER", 20, 55)
}, 32)